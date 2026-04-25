#!/usr/bin/env npx tsx
/**
 * GEO Test Runner — Weekly AI visibility tracker for dmytroai.com
 *
 * Runs tracked prompts against approved AI providers and records whether
 * dmytroai.com appears in responses/citations.
 *
 * Provider types:
 *   - CLI providers (openai, claude): use local subscription CLIs — no API keys.
 *     OpenAI uses Codex CLI (`codex exec`), Claude uses Claude Code (`claude -p`).
 *   - API providers (gemini, perplexity): use pay-per-token API keys as before.
 *
 * Usage:
 *   npx tsx scripts/geo-runner.ts                                       # approved providers, all tracked pages
 *   npx tsx scripts/geo-runner.ts --provider openai                      # single provider
 *   npx tsx scripts/geo-runner.ts --providers perplexity,gemini          # multi-provider override
 *   npx tsx scripts/geo-runner.ts --page ai-automation-consultant-small-business
 *   npx tsx scripts/geo-runner.ts --provider perplexity --page ai-appointment-setter
 *   npx tsx scripts/geo-runner.ts --dry-run                              # show prompts, no API calls
 *   npx tsx scripts/geo-runner.ts --sample-pages 30 --output-dir docs/data/geo-weekly --output-prefix weekly- --weekly-report
 *   npx tsx scripts/geo-runner.ts --sample-pages 30 --dry-run            # preview weekly sample, no calls
 *
 * Env vars needed (set in .env or export):
 *   GEMINI_API_KEY, PERPLEXITY_API_KEY
 *
 * CLI requirements:
 *   openai: `codex` CLI installed and authenticated via Codex subscription
 *   claude: `claude` CLI installed and authenticated via Claude Code Max subscription
 *
 * Cost guardrail: OpenAI and Claude checks use flat-rate CLI subscriptions only.
 *   The old Anthropic pay-per-token API path has been removed entirely.
 *   OPENAI_API_KEY and ANTHROPIC_API_KEY are never read or used.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

// ---------------------------------------------------------------------------
// Load .env.local (lightweight, no dependencies)
// ---------------------------------------------------------------------------

function loadEnvFile(filePath: string) {
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PromptConfig {
  target_domain: string;
  target_names: string[];
  pages: {
    id: string;
    path: string;
    label: string;
    prompts: string[];
  }[];
  providers: string[];
  scoring: Record<string, { label: string; points: number }>;
}

interface ProviderResult {
  provider: string;
  model: string;
  prompt: string;
  pageId: string;
  answer: string;
  citations: string[];
  hasDomain: boolean;
  hasMention: boolean;
  autoScore: string; // L, M, P, or - (auto-detected; R requires human review)
  latencyMs: number;
  timestamp: string;
  error?: string;
}

interface RunSummary {
  runId: string;
  timestamp: string;
  providers: string[];
  results: ProviderResult[];
  scores: Record<string, Record<string, number>>; // pageId -> provider -> score
  totalScore: number;
}

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const PROMPTS_PATH = join(__dirname, "geo-prompts.json");
const RESULTS_DIR = join(ROOT, "docs", "data", "geo-results");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadPrompts(): PromptConfig {
  return JSON.parse(readFileSync(PROMPTS_PATH, "utf-8"));
}

function ensureDir(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function defaultRunId(): string {
  const now = new Date();
  return now.toISOString().slice(0, 10); // YYYY-MM-DD
}

let activeRunId = defaultRunId();

function runId(): string {
  return activeRunId;
}

function outputDirPath(input: string | undefined): string {
  if (!input) return RESULTS_DIR;
  return isAbsolute(input) ? input : resolve(ROOT, input);
}

function envKey(name: string): string | undefined {
  return process.env[name];
}

/** Deterministic bounded sample: pick N pages using a seed so the same week
 *  always selects the same pages, but different weeks rotate through the watchlist. */
function samplePages<T>(items: T[], size: number, seed: number): T[] {
  if (size >= items.length) return items;
  const copy = [...items];
  let s = seed;
  const next = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s; };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = next() % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, size);
}

/** ISO week number for deterministic sampling seed */
function isoWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Extract URLs from plain text (CLI output doesn't have structured citations) */
function extractUrlsFromText(text: string): string[] {
  const urlPattern = /https?:\/\/[^\s)\]}>,"'`]+/g;
  const matches = text.match(urlPattern) || [];
  // Clean trailing punctuation that isn't part of the URL
  return [...new Set(matches.map((u) => u.replace(/[.,;:!?)]+$/, "")))];
}

/** Check if the target domain or brand names appear in text */
function detectPresence(
  text: string,
  citations: string[],
  config: PromptConfig
): { hasDomain: boolean; hasMention: boolean } {
  const lower = text.toLowerCase();
  const allText = lower + " " + citations.join(" ").toLowerCase();

  const hasDomain = allText.includes(config.target_domain);
  const hasMention = config.target_names.some((name) =>
    allText.includes(name.toLowerCase())
  );

  return { hasDomain, hasMention };
}

/** Auto-score based on what we can detect programmatically */
function autoScore(hasDomain: boolean, hasMention: boolean, citations: string[], domain: string): string {
  // Check citations for direct link
  if (citations.some((c) => c.toLowerCase().includes(domain))) return "L";
  // Domain in answer text
  if (hasDomain) return "L";
  // Brand name mentioned
  if (hasMention) return "M";
  // Cannot auto-detect P (paraphrase) or R (recommendation) — needs human review
  return "-";
}

// ---------------------------------------------------------------------------
// CLI availability guards
// ---------------------------------------------------------------------------

/** Check that a CLI command is available and authenticated before running */
function assertCliAvailable(command: string, testArgs: string[], label: string): void {
  try {
    execFileSync(command, testArgs, {
      timeout: 15_000,
      stdio: ["pipe", "pipe", "pipe"],
      encoding: "utf-8",
    });
  } catch (err: any) {
    // Command not found
    if (err.code === "ENOENT") {
      throw new Error(
        `${label}: '${command}' is not installed or not on PATH. ` +
        `Install it and authenticate via your subscription before running GEO checks.`
      );
    }
    // Command found but failed (auth issue, etc.)
    const stderr = (err.stderr || "").toString().trim();
    const exitCode = err.status;
    throw new Error(
      `${label}: '${command} ${testArgs.join(" ")}' exited with code ${exitCode}. ` +
      `Ensure you are logged in via your subscription.\n` +
      (stderr ? `  stderr: ${stderr.slice(0, 300)}` : "")
    );
  }
}

// ---------------------------------------------------------------------------
// Provider implementations — CLI providers
// ---------------------------------------------------------------------------

async function queryOpenAICli(prompt: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Use Codex CLI subscription — no OPENAI_API_KEY used.
  // Pin the model because the local Codex default can move ahead of the installed CLI.
  const model = "gpt-5.4";
  const result = execFileSync("codex", ["exec", "-m", model, prompt], {
    timeout: 120_000,
    stdio: ["pipe", "pipe", "pipe"],
    encoding: "utf-8",
    env: { ...process.env, OPENAI_API_KEY: undefined }, // hard-block API key leak
  });

  const answer = result.trim();
  const citations = extractUrlsFromText(answer);

  return { answer, citations, model: `codex-cli:${model}` };
}

async function queryClaudeCli(prompt: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Use Claude Code Max subscription — no ANTHROPIC_API_KEY used
  const result = execFileSync("claude", ["-p", prompt], {
    timeout: 120_000,
    stdio: ["pipe", "pipe", "pipe"],
    encoding: "utf-8",
    env: { ...process.env, ANTHROPIC_API_KEY: undefined }, // hard-block API key leak
  });

  const answer = result.trim();
  const citations = extractUrlsFromText(answer);

  return { answer, citations, model: "claude-cli" };
}

// ---------------------------------------------------------------------------
// Provider implementations — API providers
// ---------------------------------------------------------------------------

async function queryGemini(prompt: string, apiKey: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Gemini API with Google Search grounding
  const model = "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      tools: [{ google_search: {} }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gemini ${res.status}: ${body}`);
  }

  const data = await res.json();
  let answer = "";
  const citations: string[] = [];

  // Extract answer text
  const candidates = data.candidates || [];
  for (const cand of candidates) {
    if (cand.content?.parts) {
      for (const part of cand.content.parts) {
        if (part.text) answer += part.text;
      }
    }
    // Grounding metadata contains search result URLs
    if (cand.groundingMetadata?.groundingChunks) {
      for (const chunk of cand.groundingMetadata.groundingChunks) {
        if (chunk.web?.uri) citations.push(chunk.web.uri);
      }
    }
  }

  return { answer, citations: [...new Set(citations)], model };
}

async function queryPerplexity(prompt: string, apiKey: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Perplexity Sonar API
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Perplexity ${res.status}: ${body}`);
  }

  const data = await res.json();
  const answer = data.choices?.[0]?.message?.content || "";
  const citations: string[] = data.citations || [];

  return { answer, citations: [...new Set(citations)], model: "sonar" };
}

// ---------------------------------------------------------------------------
// Provider registry
// ---------------------------------------------------------------------------

type CliProvider = {
  kind: "cli";
  command: string;
  testArgs: string[];
  fn: (prompt: string) => Promise<{ answer: string; citations: string[]; model: string }>;
};

type ApiProvider = {
  kind: "api";
  envVar: string;
  fn: (prompt: string, key: string) => Promise<{ answer: string; citations: string[]; model: string }>;
};

type ProviderEntry = CliProvider | ApiProvider;

const PROVIDER_FNS: Record<string, ProviderEntry> = {
  openai: {
    kind: "cli",
    command: "codex",
    testArgs: ["login", "status"],
    fn: queryOpenAICli,
  },
  claude: {
    kind: "cli",
    command: "claude",
    testArgs: ["auth", "status", "--text"],
    fn: queryClaudeCli,
  },
  gemini: {
    kind: "api",
    envVar: "GEMINI_API_KEY",
    fn: queryGemini,
  },
  perplexity: {
    kind: "api",
    envVar: "PERPLEXITY_API_KEY",
    fn: queryPerplexity,
  },
};

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

async function runProvider(
  provider: string,
  prompt: string,
  pageId: string,
  config: PromptConfig
): Promise<ProviderResult> {
  const prov = PROVIDER_FNS[provider];
  if (!prov) throw new Error(`Unknown provider: ${provider}`);

  const start = Date.now();
  try {
    let answer: string;
    let citations: string[];
    let model: string;

    if (prov.kind === "cli") {
      ({ answer, citations, model } = await prov.fn(prompt));
    } else {
      const apiKey = envKey(prov.envVar);
      if (!apiKey) {
        return {
          provider,
          model: "n/a",
          prompt,
          pageId,
          answer: "",
          citations: [],
          hasDomain: false,
          hasMention: false,
          autoScore: "-",
          latencyMs: 0,
          timestamp: new Date().toISOString(),
          error: `Missing ${prov.envVar}`,
        };
      }
      ({ answer, citations, model } = await prov.fn(prompt, apiKey));
    }

    const latencyMs = Date.now() - start;
    const { hasDomain, hasMention } = detectPresence(answer, citations, config);
    const score = autoScore(hasDomain, hasMention, citations, config.target_domain);

    return {
      provider,
      model,
      prompt,
      pageId,
      answer: answer.slice(0, 3000), // cap stored answer length
      citations,
      hasDomain,
      hasMention,
      autoScore: score,
      latencyMs,
      timestamp: new Date().toISOString(),
    };
  } catch (err: any) {
    return {
      provider,
      model: "n/a",
      prompt,
      pageId,
      answer: "",
      citations: [],
      hasDomain: false,
      hasMention: false,
      autoScore: "-",
      latencyMs: Date.now() - start,
      timestamp: new Date().toISOString(),
      error: err.message,
    };
  }
}

function buildSummary(results: ProviderResult[], config: PromptConfig, providers: string[]): RunSummary {
  const id = runId();
  const scores: Record<string, Record<string, number>> = {};
  let totalScore = 0;

  for (const page of config.pages) {
    scores[page.id] = {};
    for (const prov of providers) {
      const pageProvResults = results.filter(
        (r) => r.pageId === page.id && r.provider === prov
      );
      const provScore = pageProvResults.reduce((sum, r) => {
        const pts = config.scoring[r.autoScore]?.points || 0;
        return sum + pts;
      }, 0);
      scores[page.id][prov] = provScore;
      totalScore += provScore;
    }
  }

  return {
    runId: id,
    timestamp: new Date().toISOString(),
    providers,
    results,
    scores,
    totalScore,
  };
}

function formatMarkdownSummary(summary: RunSummary, config: PromptConfig): string {
  const lines: string[] = [];
  lines.push(`# GEO Tracking Run — ${summary.runId}`);
  lines.push("");
  lines.push(`**Timestamp:** ${summary.timestamp}`);
  lines.push(`**Providers:** ${summary.providers.join(", ")}`);
  lines.push(`**Total Score:** ${summary.totalScore}`);
  lines.push("");

  for (const page of config.pages) {
    lines.push(`## ${page.label}`);
    lines.push("");
    lines.push(`| # | Prompt | ${summary.providers.map((p) => p).join(" | ")} |`);
    lines.push(`|---|--------|${summary.providers.map(() => "---").join("|")}|`);

    page.prompts.forEach((prompt, i) => {
      const cells = summary.providers.map((prov) => {
        const r = summary.results.find(
          (x) => x.pageId === page.id && x.provider === prov && x.prompt === prompt
        );
        if (!r) return "—";
        if (r.error) return `ERR`;
        return r.autoScore;
      });
      lines.push(`| ${i + 1} | ${prompt.slice(0, 60)} | ${cells.join(" | ")} |`);
    });

    lines.push("");
    lines.push(`**Page scores:** ${summary.providers.map((p) => `${p}: ${summary.scores[page.id]?.[p] ?? 0}`).join(", ")}`);
    lines.push("");
  }

  // Errors section
  const errors = summary.results.filter((r) => r.error);
  if (errors.length > 0) {
    lines.push("## Errors");
    lines.push("");
    for (const e of errors) {
      lines.push(`- **${e.provider}**: ${e.error}`);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("*Auto-scored: L=link, M=mention, -=absent. P (paraphrase) and R (recommendation) require human review.*");

  return lines.join("\n");
}

function formatWeeklyReport(summary: RunSummary, config: PromptConfig): string {
  const lines: string[] = [];
  const results = summary.results;
  const total = results.length;
  const errors = results.filter((r) => r.error);
  const links = results.filter((r) => r.autoScore === "L");
  const mentions = results.filter((r) => r.autoScore === "M");
  const absent = results.filter((r) => r.autoScore === "-" && !r.error);

  const fullConfig = loadPrompts();

  lines.push(`# GEO Weekly Visibility Report — ${summary.runId}`);
  lines.push("");
  lines.push(`**Generated:** ${summary.timestamp}`);
  lines.push(`**Providers:** ${summary.providers.join(", ")}`);
  lines.push(`**Pages sampled:** ${config.pages.length} of ${fullConfig.pages.length}`);
  lines.push(`**Total prompts checked:** ${total}`);
  lines.push("");

  // Headline metrics
  lines.push("## Headline Metrics");
  lines.push("");
  lines.push(`| Metric | Count | % |`);
  lines.push(`|--------|------:|--:|`);
  const visCount = links.length + mentions.length;
  const pct = (n: number) => total ? Math.round((n / total) * 100) : 0;
  lines.push(`| Visibility responses (L or M) | ${visCount} | ${pct(visCount)}% |`);
  lines.push(`| Citation / domain hits (L) | ${links.length} | ${pct(links.length)}% |`);
  lines.push(`| Mention hits (M) | ${mentions.length} | ${pct(mentions.length)}% |`);
  lines.push(`| Absent (-) | ${absent.length} | ${pct(absent.length)}% |`);
  lines.push(`| Errors | ${errors.length} | ${pct(errors.length)}% |`);
  lines.push(`| **Total score** | **${summary.totalScore}** | |`);
  lines.push("");

  // Provider breakdown
  lines.push("## Provider Breakdown");
  lines.push("");
  lines.push(`| Provider | Checked | L | M | - | Err | Score |`);
  lines.push(`|----------|--------:|--:|--:|--:|----:|------:|`);
  for (const prov of summary.providers) {
    const pr = results.filter((r) => r.provider === prov);
    const pL = pr.filter((r) => r.autoScore === "L").length;
    const pM = pr.filter((r) => r.autoScore === "M").length;
    const pA = pr.filter((r) => r.autoScore === "-" && !r.error).length;
    const pE = pr.filter((r) => r.error).length;
    const pScore = pr.reduce((s, r) => s + (config.scoring[r.autoScore]?.points || 0), 0);
    lines.push(`| ${prov} | ${pr.length} | ${pL} | ${pM} | ${pA} | ${pE} | ${pScore} |`);
  }
  lines.push("");

  // Top cited external domains
  const allCitations = results.flatMap((r) => r.citations);
  const domainCounts = new Map<string, number>();
  for (const url of allCitations) {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      if (host !== config.target_domain) {
        domainCounts.set(host, (domainCounts.get(host) || 0) + 1);
      }
    } catch { /* skip malformed */ }
  }
  const topDomains = [...domainCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
  if (topDomains.length > 0) {
    lines.push("## Top Cited External Domains");
    lines.push("");
    lines.push(`| Domain | Citations |`);
    lines.push(`|--------|----------:|`);
    for (const [domain, count] of topDomains) {
      lines.push(`| ${domain} | ${count} |`);
    }
    lines.push("");
  }

  // Strongest wins (pages with highest scores)
  const pageScores = config.pages.map((page) => {
    const pageResults = results.filter((r) => r.pageId === page.id);
    const score = pageResults.reduce((s, r) => s + (config.scoring[r.autoScore]?.points || 0), 0);
    const lCount = pageResults.filter((r) => r.autoScore === "L").length;
    const mCount = pageResults.filter((r) => r.autoScore === "M").length;
    return { page, score, lCount, mCount };
  }).sort((a, b) => b.score - a.score);

  const wins = pageScores.filter((p) => p.score > 0);
  if (wins.length > 0) {
    lines.push("## Strongest Wins");
    lines.push("");
    lines.push(`| Page | Score | L | M |`);
    lines.push(`|------|------:|--:|--:|`);
    for (const w of wins.slice(0, 20)) {
      lines.push(`| ${w.page.label} | ${w.score} | ${w.lCount} | ${w.mCount} |`);
    }
    lines.push("");
  }

  // Biggest gaps (sampled pages with score 0)
  const gaps = pageScores.filter((p) => p.score === 0);
  if (gaps.length > 0) {
    lines.push("## Biggest Gaps (score 0)");
    lines.push("");
    lines.push(`${gaps.length} of ${config.pages.length} sampled pages had zero visibility.`);
    lines.push("");
    if (gaps.length <= 30) {
      for (const g of gaps) {
        lines.push(`- ${g.page.label} (\`${g.page.path}\`)`);
      }
    } else {
      for (const g of gaps.slice(0, 15)) {
        lines.push(`- ${g.page.label} (\`${g.page.path}\`)`);
      }
      lines.push(`- ... and ${gaps.length - 15} more`);
    }
    lines.push("");
  }

  // Action suggestions
  lines.push("## Action Suggestions");
  lines.push("");
  const visRate = total ? visCount / total : 0;
  if (visRate === 0) {
    lines.push("- Visibility is at zero. Focus on proof assets, structured data, and internal linking before the next weekly check.");
    lines.push("- Consider running manual Perplexity spot-checks on the 3-5 highest-value pages to verify the API signal matches the consumer UI.");
  } else if (visRate < 0.05) {
    lines.push("- Early signals detected. Double down on the pages showing movement — add proof, case studies, and schema markup.");
    lines.push("- Cross-check winning pages in the Perplexity and Gemini web UIs to confirm API results match consumer experience.");
  } else if (visRate < 0.2) {
    lines.push("- Visibility is growing. Review gap pages for missing structured data, thin content, or weak internal links.");
    lines.push("- Consider expanding the weekly sample size to catch more pages as they start to surface.");
  } else {
    lines.push("- Strong visibility. Maintain content freshness and monitor for competitor displacement.");
    lines.push("- Start tracking competitor domains from the external citation table above.");
  }
  if (errors.length > 0) {
    const uniqueErrs = [...new Set(errors.map((e) => `${e.provider}: ${(e.error || "").slice(0, 80)}`))];
    lines.push("");
    lines.push("### Errors to investigate");
    for (const e of uniqueErrs) {
      lines.push(`- ${e}`);
    }
  }
  lines.push("");

  lines.push("---");
  lines.push("*Auto-scored: L=link, M=mention, -=absent. P (paraphrase) and R (recommendation) require human review.*");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

async function main() {
  // Load .env.local from project root
  loadEnvFile(join(ROOT, ".env.local"));

  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const reportMode = args.includes("--report") || args.includes("--weekly-report");
  const providerArg = args.find((_, i) => args[i - 1] === "--provider");
  const providersArg = args.find((_, i) => args[i - 1] === "--providers");
  const pageArg = args.find((_, i) => args[i - 1] === "--page");
  const sampleSizeArg = args.find((_, i) => args[i - 1] === "--sample-size" || args[i - 1] === "--sample-pages");
  const runIdArg = args.find((_, i) => args[i - 1] === "--run-id");
  const outputPrefixArg = args.find((_, i) => args[i - 1] === "--output-prefix") || "";
  const outputDirArg = args.find((_, i) => args[i - 1] === "--output-dir");

  if (runIdArg) {
    if (!/^[a-zA-Z0-9._-]+$/.test(runIdArg)) {
      console.error(`\n  Invalid --run-id: ${runIdArg}. Use only letters, numbers, dot, underscore, or dash.`);
      process.exit(1);
    }
    activeRunId = runIdArg;
  }

  const config = loadPrompts();

  // Provider resolution: --providers (comma-sep) > --provider (single) > config default
  const providers = providersArg
    ? providersArg.split(",").map((p) => p.trim()).filter(Boolean)
    : providerArg
      ? [providerArg]
      : config.providers;

  // Page selection: --page (single) > --sample-pages/--sample-size (bounded deterministic sample) > all
  let pages = pageArg
    ? config.pages.filter((page) => page.id === pageArg)
    : config.pages;

  if (!pageArg && sampleSizeArg) {
    const size = parseInt(sampleSizeArg, 10);
    if (isNaN(size) || size < 1) {
      console.error(`\n  Invalid --sample-pages/--sample-size: ${sampleSizeArg}`);
      process.exit(1);
    }
    const seed = isoWeekNumber(new Date()) + new Date().getFullYear() * 100;
    pages = samplePages(pages, size, seed);
  }

  // Output directory: --output-dir overrides default. Relative paths are repo-root relative.
  const resultsDir = outputDirPath(outputDirArg);

  if (pageArg && pages.length === 0) {
    console.error(`\n  Unknown page id: ${pageArg}`);
    console.error(`   Available page ids: ${config.pages.map((page) => page.id).join(", ")}`);
    process.exit(1);
  }

  const activeConfig: PromptConfig = {
    ...config,
    pages,
  };

  console.log(`\n  GEO Test Runner — ${runId()}`);
  console.log(`   Providers: ${providers.join(", ")}`);
  console.log(`   Prompts: ${activeConfig.pages.reduce((s, p) => s + p.prompts.length, 0)} across ${activeConfig.pages.length} pages`);
  if (sampleSizeArg) console.log(`   Sample: ${activeConfig.pages.length} of ${config.pages.length} pages (seed: week ${isoWeekNumber(new Date())})`);

  if (dryRun) {
    console.log("\n  DRY RUN — prompts that would be sent:\n");
    for (const page of activeConfig.pages) {
      console.log(`  ${page.label}:`);
      for (const prompt of page.prompts) {
        console.log(`    -> ${prompt}`);
      }
    }
    // Show provider readiness summary. CLI checks only run local auth/status commands.
    console.log("\n   Provider readiness:");
    for (const p of providers) {
      const prov = PROVIDER_FNS[p];
      if (!prov) {
        console.log(`    x ${p}: unknown provider`);
      } else if (prov.kind === "cli") {
        try {
          assertCliAvailable(prov.command, prov.testArgs, p);
          console.log(`    ok ${p}: CLI provider (${prov.command}) authenticated — no API key needed`);
        } catch (err: any) {
          console.log(`    !! ${p}: CLI provider (${prov.command}) unavailable — ${err.message.split("\n")[0]}`);
        }
      } else {
        const hasKey = !!envKey(prov.envVar);
        console.log(`    ${hasKey ? "ok" : "!!"} ${p}: API provider — ${prov.envVar} ${hasKey ? "set" : "missing"}`);
      }
    }
    console.log("\n   No provider prompts/API calls made.");
    return;
  }

  // Pre-flight: verify CLI providers are installed/authenticated, but do not fall back to APIs.
  const cliErrors = new Map<string, string>();
  const apiErrors = new Map<string, string>();
  const cliProviders = providers.filter((p) => PROVIDER_FNS[p]?.kind === "cli");
  for (const p of cliProviders) {
    const prov = PROVIDER_FNS[p] as CliProvider;
    console.log(`\n  Checking ${p} CLI (${prov.command})...`);
    try {
      assertCliAvailable(prov.command, prov.testArgs, p);
      console.log(`   ok ${prov.command} is authenticated and available`);
    } catch (err: any) {
      cliErrors.set(p, err.message.split("\n")[0]);
      console.log(`   !! ${err.message.split("\n")[0]}`);
    }
  }

  // Pre-flight API providers too. This costs one tiny request per API provider, but avoids
  // wasting an entire weekly sweep on an expired/invalid key.
  const apiProviders = providers.filter((p) => PROVIDER_FNS[p]?.kind === "api");
  for (const p of apiProviders) {
    const prov = PROVIDER_FNS[p] as ApiProvider;
    const key = envKey(prov.envVar);
    if (!key) continue;
    console.log(`\n  Checking ${p} API key (${prov.envVar})...`);
    try {
      await prov.fn("Answer with exactly: OK", key);
      console.log(`   ok ${p} API key is active`);
    } catch (err: any) {
      apiErrors.set(p, err.message.split("\n")[0]);
      console.log(`   !! ${err.message.split("\n")[0]}`);
    }
  }

  // Check which providers are ready
  const available: string[] = [];
  const missing: string[] = [];
  for (const p of providers) {
    const prov = PROVIDER_FNS[p];
    if (!prov) {
      missing.push(p);
      continue;
    }
    if (prov.kind === "cli") {
      if (cliErrors.has(p)) missing.push(p);
      else available.push(p);
    } else if (!envKey(prov.envVar)) {
      missing.push(p);
    } else if (apiErrors.has(p)) {
      missing.push(p);
    } else {
      available.push(p);
    }
  }

  if (missing.length > 0) {
    const missingDetails = missing.map((p) => {
      const prov = PROVIDER_FNS[p];
      if (!prov) return `${p} (unknown)`;
      if (prov.kind === "api") return `${p} (${apiErrors.get(p) || `set ${prov.envVar}`})`;
      return `${p} (${cliErrors.get(p) || `install/authenticate ${(prov as CliProvider).command}`})`;
    });
    console.log(`\n  Unavailable providers: ${missingDetails.join(", ")}`);
  }

  if (available.length === 0) {
    console.error("\n  No providers available. Install CLI tools or set API keys and retry.");
    process.exit(1);
  }

  console.log(`\n  Running ${available.length} provider(s)...\n`);

  const results: ProviderResult[] = [];

  for (const page of activeConfig.pages) {
    for (const prompt of page.prompts) {
      for (const prov of available) {
        const label = `  [${prov}] ${prompt.slice(0, 50)}...`;
        process.stdout.write(label);
        const result = await runProvider(prov, prompt, page.id, config);
        results.push(result);

        const icon = result.error ? "x" : result.autoScore === "-" ? "." : "ok";
        console.log(` ${icon} ${result.autoScore} (${result.latencyMs}ms)`);

        // Small delay to avoid rate limits
        await new Promise((r) => setTimeout(r, 500));
      }
    }
  }

  // Build and save results
  const summary = buildSummary(results, activeConfig, available);

  ensureDir(resultsDir);

  const fileBase = `${outputPrefixArg}${summary.runId}`;
  const jsonPath = join(resultsDir, `${fileBase}.json`);
  writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  console.log(`\n  JSON results: ${jsonPath}`);

  const mdPath = join(resultsDir, `${fileBase}.md`);
  writeFileSync(mdPath, formatMarkdownSummary(summary, activeConfig));
  console.log(`  Summary:      ${mdPath}`);

  if (reportMode) {
    const reportPath = join(resultsDir, `${fileBase}-report.md`);
    writeFileSync(reportPath, formatWeeklyReport(summary, activeConfig));
    console.log(`  Report:       ${reportPath}`);
  }

  console.log(`\n  Total score: ${summary.totalScore}`);
  for (const page of activeConfig.pages) {
    const pageTotal = Object.values(summary.scores[page.id] || {}).reduce(
      (a, b) => a + b,
      0
    );
    console.log(`   ${page.label}: ${pageTotal}`);
  }

  console.log("\nDone.\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
