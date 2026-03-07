#!/usr/bin/env node

/**
 * Builds/updates the aggregate style profile from the corpus.
 *
 * Reads every analyzed entry in data/learning/corpus/, computes
 * aggregate statistics, and writes data/learning/profile.json.
 * Also saves a timestamped snapshot to profile-history/.
 *
 * Usage:
 *   node src/learning/profile.js
 *   node src/learning/profile.js --print
 */

const fs = require("fs");
const path = require("path");

const CORPUS_DIR = path.join(__dirname, "../../data/learning/corpus");
const PROFILE_PATH = path.join(__dirname, "../../data/learning/profile.json");
const HISTORY_DIR = path.join(__dirname, "../../data/learning/profile-history");

const SCHEMA_VERSION = 1;

// --- Confidence levels ---

function confidence(count) {
  if (count >= 10) return "proven";
  if (count >= 6) return "high";
  if (count >= 3) return "medium";
  return "low";
}

// --- Stats helpers ---

function mean(arr) {
  if (!arr.length) return 0;
  return Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10;
}

function median(arr) {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function percentile(arr, p) {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const idx = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, idx)];
}

function statSummary(arr) {
  return {
    mean: mean(arr),
    median: median(arr),
    min: arr.length ? Math.min(...arr) : 0,
    max: arr.length ? Math.max(...arr) : 0,
    p25: percentile(arr, 25),
    p75: percentile(arr, 75),
    samples: arr.length,
  };
}

// --- Profile builder ---

function buildProfile(entries) {
  const analyzed = entries.filter((e) => e.analysis);
  if (!analyzed.length) {
    console.log("No analyzed entries found. Run analyze.js first.");
    return null;
  }

  // Platform counts
  const platforms = { telegram: 0, linkedin: 0, instagram: 0 };
  for (const e of analyzed) {
    if (platforms[e.platform] !== undefined) platforms[e.platform]++;
  }

  // --- Structure ---
  const paragraphCounts = analyzed.map((e) => e.analysis.structure.paragraphCount);
  const sentenceLengths = analyzed.map((e) => e.analysis.structure.avgSentenceLength);
  const totalWords = analyzed.map((e) => e.analysis.structure.totalWords);

  // Template frequency (Phase 2: structural templates from paragraph roles)
  const templateFreq = {};
  const structuralTemplateFreq = {};
  for (const e of analyzed) {
    // Legacy: sentence-count based template
    const template = e.analysis.structure.sentencesPerParagraph
      .map((n) => (n === 1 ? "single" : n <= 2 ? "short" : "long"))
      .join(" | ");
    templateFreq[template] = (templateFreq[template] || 0) + 1;

    // Phase 2: role-based structural template
    if (e.analysis.template && e.analysis.template.template) {
      const st = e.analysis.template.template;
      structuralTemplateFreq[st] = (structuralTemplateFreq[st] || 0) + 1;
    }
  }

  // --- Openers ---
  const openerPatterns = {};
  for (const e of analyzed) {
    const p = e.analysis.opener.pattern;
    if (!openerPatterns[p]) openerPatterns[p] = { count: 0, examples: [] };
    openerPatterns[p].count++;
    if (openerPatterns[p].examples.length < 3) {
      openerPatterns[p].examples.push(e.analysis.opener.text.slice(0, 80));
    }
  }

  // --- Closers ---
  const closerPatterns = {};
  for (const e of analyzed) {
    const p = e.analysis.closer.pattern;
    if (!closerPatterns[p]) closerPatterns[p] = { count: 0, examples: [] };
    closerPatterns[p].count++;
    if (closerPatterns[p].examples.length < 3) {
      closerPatterns[p].examples.push(e.analysis.closer.text.slice(0, 80));
    }
  }

  // --- Punctuation ---
  const punct = {
    emDashRates: [],
    ellipsisRates: [],
    exclamationRates: [],
    commasPerSentence: [],
  };
  for (const e of analyzed) {
    const a = e.analysis.punctuation;
    const totalPunct = a.periods + a.commas + a.emDashes + a.ellipsis + a.exclamation + a.question + a.colon;
    const denom = Math.max(totalPunct, 1);
    punct.emDashRates.push(a.emDashes / denom);
    punct.ellipsisRates.push(a.ellipsis / denom);
    punct.exclamationRates.push(a.exclamation / denom);
    punct.commasPerSentence.push(a.commasPerSentence);
  }

  // --- Vocabulary ---
  const wordFreqGlobal = {};
  const casualMarkerCounts = [];
  const allBuzzwords = [];
  const allFormalWords = [];

  for (const e of analyzed) {
    const v = e.analysis.vocabulary;
    for (const [word, count] of v.topWords) {
      wordFreqGlobal[word] = (wordFreqGlobal[word] || 0) + count;
    }
    casualMarkerCounts.push(v.casualMarkerRate);
    allBuzzwords.push(...v.buzzwords);
    allFormalWords.push(...v.formalWords);
  }

  const sortedGlobalWords = Object.entries(wordFreqGlobal)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30);

  // --- Edit patterns ---
  const editPatternCounts = {};
  const wordSwaps = {};

  for (const e of analyzed) {
    const es = e.analysis.editSignals;
    for (const pattern of es.patterns) {
      editPatternCounts[pattern] = (editPatternCounts[pattern] || 0) + 1;
    }

    // Collect word swaps from the raw edits
    if (e.edits) {
      for (const edit of e.edits) {
        if (edit.type === "word_swap" && edit.draft && edit.final) {
          const key = `${edit.draft} -> ${edit.final}`;
          wordSwaps[key] = (wordSwaps[key] || 0) + 1;
        }
      }
    }
  }

  const editPatterns = {};
  for (const [pattern, count] of Object.entries(editPatternCounts)) {
    editPatterns[pattern] = { count, confidence: confidence(count) };
  }

  const wordSwapList = Object.entries(wordSwaps)
    .map(([swap, count]) => {
      const [from, to] = swap.split(" -> ");
      return { from, to, count };
    })
    .sort((a, b) => b.count - a.count);

  // --- Engagement correlation (basic) ---
  const engagementByOpener = {};
  const engagementByCloser = {};
  for (const e of analyzed) {
    if (!e.engagement || !e.engagement.views) continue;
    const op = e.analysis.opener.pattern;
    const cl = e.analysis.closer.pattern;
    if (!engagementByOpener[op]) engagementByOpener[op] = [];
    engagementByOpener[op].push(e.engagement.views);
    if (!engagementByCloser[cl]) engagementByCloser[cl] = [];
    engagementByCloser[cl].push(e.engagement.views);
  }

  // Average views per pattern
  const engagementCorrelation = {
    byOpener: {},
    byCloser: {},
  };
  for (const [pattern, views] of Object.entries(engagementByOpener)) {
    engagementCorrelation.byOpener[pattern] = { avgViews: mean(views), samples: views.length };
  }
  for (const [pattern, views] of Object.entries(engagementByCloser)) {
    engagementCorrelation.byCloser[pattern] = { avgViews: mean(views), samples: views.length };
  }

  // --- Platform-specific profiles ---
  const platformProfiles = {};
  for (const platform of ["telegram", "linkedin", "instagram"]) {
    const platEntries = analyzed.filter((e) => e.platform === platform);
    if (!platEntries.length) continue;

    platformProfiles[platform] = {
      postCount: platEntries.length,
      avgWords: mean(platEntries.map((e) => e.analysis.structure.totalWords)),
      avgSentenceLength: mean(platEntries.map((e) => e.analysis.structure.avgSentenceLength)),
      avgParagraphs: mean(platEntries.map((e) => e.analysis.structure.paragraphCount)),
      topOpenerPattern: mostFrequent(platEntries.map((e) => e.analysis.opener.pattern)),
      topCloserPattern: mostFrequent(platEntries.map((e) => e.analysis.closer.pattern)),
    };
  }

  // --- Assemble profile ---
  return {
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    postCount: analyzed.length,
    platforms,

    structure: {
      paragraphCount: statSummary(paragraphCounts),
      sentenceLength: statSummary(sentenceLengths),
      totalWords: statSummary(totalWords),
      templateFrequency: templateFreq,
      structuralTemplates: structuralTemplateFreq,
    },

    openers: { patterns: openerPatterns },
    closers: { patterns: closerPatterns },

    punctuation: {
      emDashRate: mean(punct.emDashRates),
      ellipsisRate: mean(punct.ellipsisRates),
      exclamationRate: mean(punct.exclamationRates),
      avgCommasPerSentence: mean(punct.commasPerSentence),
    },

    vocabulary: {
      topWords: sortedGlobalWords,
      casualMarkerRate: mean(casualMarkerCounts),
      buzzwordsUsed: [...new Set(allBuzzwords)],
      formalWordsUsed: [...new Set(allFormalWords)],
    },

    editPatterns,
    wordSwaps: wordSwapList,
    engagementCorrelation,
    platformProfiles,
  };
}

function mostFrequent(arr) {
  const freq = {};
  for (const item of arr) freq[item] = (freq[item] || 0) + 1;
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : null;
}

// --- File I/O ---

function loadCorpus() {
  if (!fs.existsSync(CORPUS_DIR)) return [];
  return fs
    .readdirSync(CORPUS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(CORPUS_DIR, f), "utf-8")));
}

function saveProfile(profile) {
  fs.mkdirSync(path.dirname(PROFILE_PATH), { recursive: true });
  fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile, null, 2) + "\n");

  // Save history snapshot
  fs.mkdirSync(HISTORY_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const historyPath = path.join(HISTORY_DIR, `profile-${date}.json`);
  fs.writeFileSync(historyPath, JSON.stringify(profile, null, 2) + "\n");

  return { profilePath: PROFILE_PATH, historyPath };
}

// --- Pretty print ---

function printProfile(profile) {
  console.log("\n=== STYLE PROFILE ===\n");
  console.log(`Posts analyzed: ${profile.postCount}`);
  console.log(`Platforms: ${Object.entries(profile.platforms).filter(([, v]) => v > 0).map(([k, v]) => `${k}(${v})`).join(", ")}`);
  console.log(`Updated: ${profile.updatedAt}\n`);

  console.log("--- Structure ---");
  console.log(`  Words per post: ${profile.structure.totalWords.mean} avg (${profile.structure.totalWords.min}-${profile.structure.totalWords.max})`);
  console.log(`  Sentence length: ${profile.structure.sentenceLength.mean} words avg`);
  console.log(`  Paragraphs: ${profile.structure.paragraphCount.mean} avg`);

  console.log("\n--- Openers ---");
  for (const [pattern, data] of Object.entries(profile.openers.patterns)) {
    console.log(`  ${pattern}: ${data.count}x [${confidence(data.count)}]`);
    if (data.examples[0]) console.log(`    e.g. "${data.examples[0]}"`);
  }

  console.log("\n--- Closers ---");
  for (const [pattern, data] of Object.entries(profile.closers.patterns)) {
    console.log(`  ${pattern}: ${data.count}x [${confidence(data.count)}]`);
    if (data.examples[0]) console.log(`    e.g. "${data.examples[0]}"`);
  }

  console.log("\n--- Punctuation ---");
  console.log(`  Em-dash rate: ${profile.punctuation.emDashRate}`);
  console.log(`  Commas/sentence: ${profile.punctuation.avgCommasPerSentence}`);
  console.log(`  Ellipsis rate: ${profile.punctuation.ellipsisRate}`);

  console.log("\n--- Top Words ---");
  console.log(`  ${profile.vocabulary.topWords.slice(0, 10).map(([w, c]) => `${w}(${c})`).join(", ")}`);

  if (Object.keys(profile.editPatterns).length) {
    console.log("\n--- Edit Patterns ---");
    for (const [pattern, data] of Object.entries(profile.editPatterns)) {
      console.log(`  ${pattern}: ${data.count}x [${data.confidence}]`);
    }
  }

  if (profile.wordSwaps.length) {
    console.log("\n--- Word Swaps ---");
    for (const swap of profile.wordSwaps.slice(0, 10)) {
      console.log(`  "${swap.from}" -> "${swap.to}" (${swap.count}x)`);
    }
  }

  if (Object.keys(profile.platformProfiles || {}).length) {
    console.log("\n--- Platform-Specific ---");
    for (const [platform, data] of Object.entries(profile.platformProfiles)) {
      console.log(`  ${platform}: ${data.postCount} posts, ${data.avgWords} avg words, opener: ${data.topOpenerPattern}, closer: ${data.topCloserPattern}`);
    }
  }

  console.log("");
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);
  const entries = loadCorpus();

  if (!entries.length) {
    console.log("No corpus entries found. Add posts with schema.js first.");
    return;
  }

  const profile = buildProfile(entries);
  if (!profile) return;

  const { profilePath, historyPath } = saveProfile(profile);
  console.log(`Profile written to: ${profilePath}`);
  console.log(`Snapshot saved to: ${historyPath}`);

  if (args.includes("--print") || args.includes("-p")) {
    printProfile(profile);
  } else {
    console.log(`\nRun with --print to see the full profile.`);
    console.log(`Posts: ${profile.postCount}, Patterns: ${Object.keys(profile.editPatterns).length}, Word swaps: ${profile.wordSwaps.length}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildProfile,
  loadCorpus,
  saveProfile,
  printProfile,
  confidence,
  statSummary,
};
