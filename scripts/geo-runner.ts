#!/usr/bin/env npx tsx
/**
 * GEO Test Runner — Weekly AI visibility tracker for dmytroai.com
 *
 * Runs tracked prompts against 4 AI providers and records whether
 * dmytroai.com appears in responses/citations.
 *
 * Usage:
 *   npx tsx scripts/geo-runner.ts                  # all providers
 *   npx tsx scripts/geo-runner.ts --provider openai # single provider
 *   npx tsx scripts/geo-runner.ts --dry-run         # show prompts, no API calls
 *
 * Env vars needed (set in .env or export):
 *   OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY, PERPLEXITY_API_KEY
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

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

function runId(): string {
  const now = new Date();
  return now.toISOString().slice(0, 10); // YYYY-MM-DD
}

function envKey(name: string): string | undefined {
  return process.env[name];
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
// Provider implementations
// ---------------------------------------------------------------------------

async function queryOpenAI(prompt: string, apiKey: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // OpenAI Responses API with web search tool
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      tools: [{ type: "web_search_preview" }],
      input: prompt,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`OpenAI ${res.status}: ${body}`);
  }

  const data = await res.json();

  // Extract text and citations from the response output
  let answer = "";
  const citations: string[] = [];

  if (Array.isArray(data.output)) {
    for (const item of data.output) {
      if (item.type === "message" && Array.isArray(item.content)) {
        for (const part of item.content) {
          if (part.type === "output_text") {
            answer += part.text || "";
            // Extract inline citations/annotations
            if (Array.isArray(part.annotations)) {
              for (const ann of part.annotations) {
                if (ann.url) citations.push(ann.url);
              }
            }
          }
        }
      }
      // web_search_call results may contain URLs
      if (item.type === "web_search_call" && Array.isArray(item.results)) {
        for (const r of item.results) {
          if (r.url) citations.push(r.url);
        }
      }
    }
  }

  return { answer, citations: [...new Set(citations)], model: "gpt-4o" };
}

async function queryAnthropic(prompt: string, apiKey: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Claude API with web search tool
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      tools: [
        {
          type: "web_search_20250305",
          name: "web_search",
          max_uses: 5,
        },
      ],
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic ${res.status}: ${body}`);
  }

  const data = await res.json();
  let answer = "";
  const citations: string[] = [];

  if (Array.isArray(data.content)) {
    for (const block of data.content) {
      if (block.type === "text") {
        answer += block.text || "";
        // Extract citations from text block
        if (Array.isArray(block.citations)) {
          for (const cite of block.citations) {
            if (cite.url) citations.push(cite.url);
          }
        }
      }
      if (block.type === "web_search_tool_result" && Array.isArray(block.content)) {
        for (const r of block.content) {
          if (r.type === "web_search_result" && r.url) {
            citations.push(r.url);
          }
        }
      }
    }
  }

  return { answer, citations: [...new Set(citations)], model: "claude-sonnet-4-20250514" };
}

async function queryGemini(prompt: string, apiKey: string): Promise<{ answer: string; citations: string[]; model: string }> {
  // Gemini API with Google Search grounding
  const model = "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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
    if (cand.groundingMetadata?.webSearchQueries) {
      // Just metadata, not citations
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
// Runner
// ---------------------------------------------------------------------------

const PROVIDER_FNS: Record<
  string,
  { envVar: string; fn: (prompt: string, key: string) => Promise<{ answer: string; citations: string[]; model: string }> }
> = {
  openai: { envVar: "OPENAI_API_KEY", fn: queryOpenAI },
  anthropic: { envVar: "ANTHROPIC_API_KEY", fn: queryAnthropic },
  gemini: { envVar: "GEMINI_API_KEY", fn: queryGemini },
  perplexity: { envVar: "PERPLEXITY_API_KEY", fn: queryPerplexity },
};

async function runProvider(
  provider: string,
  prompt: string,
  pageId: string,
  config: PromptConfig
): Promise<ProviderResult> {
  const prov = PROVIDER_FNS[provider];
  if (!prov) throw new Error(`Unknown provider: ${provider}`);

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

  const start = Date.now();
  try {
    const { answer, citations, model } = await prov.fn(prompt, apiKey);
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

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

async function main() {
  // Load .env.local from project root
  loadEnvFile(join(ROOT, ".env.local"));

  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const providerArg = args.find((_, i) => args[i - 1] === "--provider");

  const config = loadPrompts();
  const providers = providerArg
    ? [providerArg]
    : config.providers;

  console.log(`\n🔍 GEO Test Runner — ${runId()}`);
  console.log(`   Providers: ${providers.join(", ")}`);
  console.log(`   Prompts: ${config.pages.reduce((s, p) => s + p.prompts.length, 0)} across ${config.pages.length} pages`);

  if (dryRun) {
    console.log("\n📋 DRY RUN — prompts that would be sent:\n");
    for (const page of config.pages) {
      console.log(`  ${page.label}:`);
      for (const prompt of page.prompts) {
        console.log(`    → ${prompt}`);
      }
    }
    console.log("\n   No API calls made.");
    return;
  }

  // Check which providers have keys
  const available: string[] = [];
  const missing: string[] = [];
  for (const p of providers) {
    const prov = PROVIDER_FNS[p];
    if (prov && envKey(prov.envVar)) {
      available.push(p);
    } else {
      missing.push(p);
    }
  }

  if (missing.length > 0) {
    console.log(`\n⚠️  Missing API keys for: ${missing.join(", ")}`);
    console.log(`   Set: ${missing.map((p) => PROVIDER_FNS[p]?.envVar).join(", ")}`);
  }

  if (available.length === 0) {
    console.error("\n❌ No API keys available. Set at least one provider key and retry.");
    process.exit(1);
  }

  console.log(`\n▶ Running ${available.length} provider(s)...\n`);

  const results: ProviderResult[] = [];

  for (const page of config.pages) {
    for (const prompt of page.prompts) {
      for (const prov of available) {
        const label = `  [${prov}] ${prompt.slice(0, 50)}...`;
        process.stdout.write(label);
        const result = await runProvider(prov, prompt, page.id, config);
        results.push(result);

        const icon = result.error ? "❌" : result.autoScore === "-" ? "·" : "✓";
        console.log(` ${icon} ${result.autoScore} (${result.latencyMs}ms)`);

        // Small delay to avoid rate limits
        await new Promise((r) => setTimeout(r, 500));
      }
    }
  }

  // Build and save results
  const summary = buildSummary(results, config, available);

  ensureDir(RESULTS_DIR);

  const jsonPath = join(RESULTS_DIR, `${summary.runId}.json`);
  writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  console.log(`\n📁 JSON results: ${jsonPath}`);

  const mdPath = join(RESULTS_DIR, `${summary.runId}.md`);
  writeFileSync(mdPath, formatMarkdownSummary(summary, config));
  console.log(`📄 Summary:      ${mdPath}`);

  console.log(`\n📊 Total score: ${summary.totalScore}`);
  for (const page of config.pages) {
    const pageTotal = Object.values(summary.scores[page.id] || {}).reduce(
      (a, b) => a + b,
      0
    );
    console.log(`   ${page.label}: ${pageTotal}`);
  }

  console.log("\nDone. ✅\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
