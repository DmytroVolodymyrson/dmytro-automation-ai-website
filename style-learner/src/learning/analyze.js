#!/usr/bin/env node

/**
 * Style signal extraction from a post entry.
 *
 * Takes a corpus JSON file (created by schema.js), analyzes the published text,
 * and writes the analysis back into the entry's `analysis` field.
 *
 * Usage:
 *   node src/learning/analyze.js data/learning/corpus/2026-03-06-friday-voice-agent.json
 *   node src/learning/analyze.js --all
 */

const fs = require("fs");
const path = require("path");

const CORPUS_DIR = path.join(__dirname, "../../data/learning/corpus");

// --- Text utilities ---

function splitSentences(text) {
  // Split on sentence-ending punctuation, keeping the delimiter
  // Handles: periods, exclamation, question marks, ellipsis
  return text
    .split(/(?<=[.!?])\s+|(?<=\.\.\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function splitParagraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function countOccurrences(text, char) {
  let count = 0;
  for (const c of text) {
    if (c === char) count++;
  }
  return count;
}

// --- Analyzers ---

function analyzeStructure(text) {
  const paragraphs = splitParagraphs(text);
  const sentencesPerParagraph = paragraphs.map(
    (p) => splitSentences(p).length
  );
  const allSentences = paragraphs.flatMap(splitSentences);
  const sentenceLengths = allSentences.map((s) => tokenize(s).length);
  const totalWords = tokenize(text).length;

  return {
    paragraphCount: paragraphs.length,
    sentencesPerParagraph,
    avgSentenceLength:
      sentenceLengths.length > 0
        ? Math.round(
            (sentenceLengths.reduce((a, b) => a + b, 0) /
              sentenceLengths.length) *
              10
          ) / 10
        : 0,
    sentenceLengthRange: sentenceLengths.length > 0
      ? [Math.min(...sentenceLengths), Math.max(...sentenceLengths)]
      : [0, 0],
    totalWords,
  };
}

function classifyOpener(text) {
  const paragraphs = splitParagraphs(text);
  if (!paragraphs.length) return { type: "unknown", text: "", pattern: "empty" };

  const firstPara = paragraphs[0];
  const firstSentence = splitSentences(firstPara)[0] || firstPara;
  const words = tokenize(firstSentence);

  // Day label: single word that's a day name (Phase 2: single-word-day)
  const dayNames = {
    ru: ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    en: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  };
  const allDays = [...dayNames.ru, ...dayNames.en];
  if (words.length <= 2 && allDays.includes(words[0])) {
    return { type: "day-label", text: firstSentence, wordCount: words.length, pattern: "single-word-day" };
  }

  // Question opener
  if (firstSentence.includes("?")) {
    return { type: "question", text: firstSentence, wordCount: words.length, pattern: "question" };
  }

  // Number/stat opener
  if (/^\d|^[\d.,]+%/.test(firstSentence.trim()) || (/\d/.test(firstSentence) && words.length <= 10)) {
    return { type: "stat", text: firstSentence, wordCount: words.length, pattern: "stat" };
  }

  // Story opener: first-person narrative or past tense personal
  const storyStarters = ["сегодня", "вчера", "на", "когда", "today", "yesterday", "when", "last", "i", "я"];
  if (storyStarters.includes(words[0])) {
    return { type: "story", text: firstSentence, wordCount: words.length, pattern: "story" };
  }

  // Short punchy opener (<=4 words, declarative) (Phase 2: short-punch)
  if (words.length <= 4) {
    return { type: "short-punch", text: firstSentence, wordCount: words.length, pattern: "short-punch" };
  }

  // Situation: describes a scene/context (longer opener that sets the stage)
  const situationStarters = ["представьте", "imagine", "picture", "there", "вот", "бывает", "знаете", "помните"];
  if (situationStarters.includes(words[0]) || (words.length >= 5 && words.length <= 15 && !firstSentence.includes("?"))) {
    return { type: "situation", text: firstSentence, wordCount: words.length, pattern: "situation" };
  }

  return { type: "general", text: firstSentence, wordCount: words.length, pattern: "standard-opener" };
}

function classifyCloser(text) {
  const paragraphs = splitParagraphs(text);
  if (!paragraphs.length) return { type: "unknown", text: "", pattern: "empty" };

  const lastPara = paragraphs[paragraphs.length - 1];
  const words = tokenize(lastPara);

  // Ellipsis trailing off (Phase 2: ellipsis-casual)
  if (lastPara.includes("...")) {
    return { type: "trailing-off", text: lastPara, pattern: "ellipsis-casual" };
  }

  // Question closer (Phase 2: question)
  if (lastPara.includes("?")) {
    return { type: "question", text: lastPara, pattern: "question" };
  }

  // CTA closer (Phase 2: cta)
  const ctaWords = ["ссылка", "пишите", "подписывайтесь", "link", "check", "subscribe", "comment", "dm", "join", "try", "click", "register", "sign"];
  if (ctaWords.some((w) => words.includes(w))) {
    return { type: "cta", text: lastPara, pattern: "cta" };
  }

  // Movement: forward-looking (Phase 2: movement)
  const movementWords = ["moving", "lets", "go", "двигаемся", "вперед", "поехали", "дальше", "продолжаем", "forward", "onward", "next"];
  if (movementWords.some((w) => words.includes(w))) {
    return { type: "movement", text: lastPara, pattern: "movement" };
  }

  // Reflection: philosophical/summary statement (Phase 2: reflection)
  if (words.length > 8) {
    return { type: "reflection", text: lastPara, pattern: "reflection" };
  }

  // Short punchy
  if (words.length <= 5) {
    return { type: "short-punch", text: lastPara, pattern: "short-closer" };
  }

  return { type: "general", text: lastPara, pattern: "standard-close" };
}

// --- Paragraph role classification (Phase 2) ---

function classifyParagraphRole(paragraph, index, totalParagraphs, text) {
  const words = tokenize(paragraph);

  if (index === 0) return "opener";
  if (index === totalParagraphs - 1) return "closer";

  // Product-pitch: mentions product, service, tool, feature
  const productWords = ["продукт", "сервис", "инструмент", "фича", "product", "service", "tool", "feature", "app", "platform", "bot", "agent", "приложение", "платформа"];
  if (productWords.some((w) => words.includes(w))) {
    return "product-pitch";
  }

  // Result: shares outcome/metric
  const resultWords = ["результат", "result", "выросли", "grew", "increased", "revenue", "conversion", "metric", "roi", "доход", "конверсия", "x2", "x3", "x5", "x10"];
  if (resultWords.some((w) => words.includes(w)) || /\d+%|\d+x/.test(paragraph)) {
    return "result";
  }

  // Lesson: insight or lesson learned
  const lessonWords = ["урок", "lesson", "вывод", "takeaway", "insight", "learned", "понял", "важно", "ключевое", "главное", "moral", "conclusion"];
  if (lessonWords.some((w) => words.includes(w))) {
    return "lesson";
  }

  // Context: sets up background (usually early paragraphs)
  if (index <= 2) {
    return "context";
  }

  return "context";
}

function extractTemplate(text) {
  const paragraphs = splitParagraphs(text);
  if (!paragraphs.length) return { roles: [], template: "" };

  const roles = paragraphs.map((p, i) =>
    classifyParagraphRole(p, i, paragraphs.length, text)
  );

  return {
    roles,
    template: roles.join(" | "),
  };
}

function analyzePunctuation(text) {
  const sentences = splitSentences(text);
  const sentenceCount = Math.max(sentences.length, 1);

  return {
    periods: countOccurrences(text, ".") - (text.match(/\.\.\./g) || []).length * 3,
    commas: countOccurrences(text, ","),
    emDashes: (text.match(/\u2014/g) || []).length,
    enDashes: (text.match(/\u2013/g) || []).length,
    hyphens: (text.match(/(?<!\w)-(?!\w)| - /g) || []).length,
    ellipsis: (text.match(/\.\.\./g) || []).length,
    exclamation: countOccurrences(text, "!"),
    question: countOccurrences(text, "?"),
    colon: countOccurrences(text, ":"),
    commasPerSentence: Math.round((countOccurrences(text, ",") / sentenceCount) * 100) / 100,
  };
}

function analyzeVocabulary(text, language) {
  const words = tokenize(text);
  const freq = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const distinctWords = Object.keys(freq).length;

  // Stopwords (basic, per language)
  const stopwords = {
    ru: new Set(["и", "в", "на", "не", "что", "с", "а", "по", "к", "у", "за", "из", "от", "о", "до", "но", "все", "это", "я", "мы"]),
    en: new Set(["the", "a", "an", "is", "are", "was", "were", "in", "on", "at", "to", "for", "of", "and", "or", "but", "i", "we", "you"]),
  };
  const stops = stopwords[language] || stopwords.en;
  const topWords = sorted.filter(([w]) => !stops.has(w)).slice(0, 15);

  // Casual markers (Russian)
  const casualMarkersRu = ["короче", "типа", "кароче", "ну", "блин", "чел", "двигаемся", "норм", "жесть", "прикольно"];
  const casualMarkersEn = ["basically", "essentially", "stuff", "guys", "cool", "right", "nah", "yeah"];
  const markers = language === "ru" ? casualMarkersRu : casualMarkersEn;
  const casualMarkers = words.filter((w) => markers.includes(w));

  // Formal words to flag
  const formalRu = ["осуществлять", "реализовывать", "предоставлять", "функционировать", "оптимизировать", "имплементировать"];
  const formalEn = ["facilitate", "leverage", "synergy", "paradigm", "utilize", "implement", "furthermore", "subsequently"];
  const formals = language === "ru" ? formalRu : formalEn;
  const formalWords = words.filter((w) => formals.includes(w));

  // Buzzwords
  const buzzRu = ["революционный", "инновационный", "уникальный", "передовой", "прорывной"];
  const buzzEn = ["revolutionary", "game-changing", "cutting-edge", "groundbreaking", "disruptive"];
  const buzzList = language === "ru" ? buzzRu : buzzEn;
  const buzzwords = words.filter((w) => buzzList.includes(w));

  return {
    distinctWords,
    totalWords: words.length,
    topWords,
    casualMarkers,
    formalWords,
    buzzwords,
    casualMarkerRate: words.length > 0 ? Math.round((casualMarkers.length / words.length) * 1000) / 1000 : 0,
  };
}

function analyzeEdits(edits) {
  if (!edits || !edits.length) {
    return { totalEdits: 0, cuts: 0, additions: 0, wordSwaps: 0, rephrases: 0, reorders: 0, toneShifts: 0, patterns: [] };
  }

  const counts = { cuts: 0, additions: 0, wordSwaps: 0, rephrases: 0, reorders: 0, toneShifts: 0 };
  const patterns = [];

  for (const edit of edits) {
    switch (edit.type) {
      case "cut": counts.cuts++; break;
      case "addition": counts.additions++; break;
      case "word_swap": counts.wordSwaps++; break;
      case "rephrase": counts.rephrases++; break;
      case "reorder": counts.reorders++; break;
      case "tone_shift": counts.toneShifts++; break;
    }

    // Extract patterns from edits
    const reason = (edit.reason || edit.description || "").toLowerCase();

    if (edit.type === "word_swap" && /casual|direct|simple/i.test(reason)) {
      patterns.push("prefers-casual-verbs");
    }
    if (edit.type === "cut" && /analysis|over|detail|technical/i.test(reason)) {
      patterns.push("cuts-analysis-keeps-action");
    }
    if (edit.type === "cut" && /list|breakdown|pipeline|step/i.test(reason)) {
      patterns.push("cuts-detail-lists");
    }
    if (edit.type === "rephrase" && /tight|short|concise/i.test(reason)) {
      patterns.push("tightens-closers");
    }
    if (edit.type === "addition" && /security|trust|proof/i.test(reason)) {
      patterns.push("adds-trust-signals");
    }
    if (edit.type === "reorder") {
      patterns.push("reorders-for-flow");
    }
    if (edit.type === "cut" && /removed|dropped/i.test(reason)) {
      patterns.push("removes-unnecessary-detail");
    }
  }

  return {
    totalEdits: edits.length,
    ...counts,
    patterns: [...new Set(patterns)],
  };
}

// --- Main analysis ---

function analyzeEntry(entry) {
  const text = entry.published.text;
  if (!text) return null;

  const templateInfo = extractTemplate(text);

  return {
    analyzedAt: new Date().toISOString(),
    structure: analyzeStructure(text),
    opener: classifyOpener(text),
    closer: classifyCloser(text),
    template: templateInfo,
    punctuation: analyzePunctuation(text),
    vocabulary: analyzeVocabulary(text, entry.language),
    editSignals: analyzeEdits(entry.edits),
  };
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);

  if (args[0] === "--all") {
    if (!fs.existsSync(CORPUS_DIR)) {
      console.log("No corpus directory found. Run schema.js add first.");
      return;
    }
    const files = fs.readdirSync(CORPUS_DIR).filter((f) => f.endsWith(".json"));
    let analyzed = 0;
    for (const file of files) {
      const filePath = path.join(CORPUS_DIR, file);
      const entry = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const analysis = analyzeEntry(entry);
      if (analysis) {
        entry.analysis = analysis;
        fs.writeFileSync(filePath, JSON.stringify(entry, null, 2) + "\n");
        analyzed++;
        console.log(`Analyzed: ${file}`);
        printSummary(analysis);
      }
    }
    console.log(`\nAnalyzed ${analyzed} entries.`);
    return;
  }

  if (!args[0]) {
    console.log("Usage:");
    console.log("  node analyze.js <path-to-entry.json>");
    console.log("  node analyze.js --all");
    return;
  }

  const filePath = path.resolve(args[0]);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const entry = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const analysis = analyzeEntry(entry);
  if (!analysis) {
    console.error("No published text to analyze.");
    process.exit(1);
  }

  entry.analysis = analysis;
  fs.writeFileSync(filePath, JSON.stringify(entry, null, 2) + "\n");
  console.log(`Analysis written to: ${filePath}`);
  printSummary(analysis);
}

function printSummary(analysis) {
  console.log(`  Structure: ${analysis.structure.paragraphCount} paragraphs, ${analysis.structure.totalWords} words`);
  console.log(`  Avg sentence: ${analysis.structure.avgSentenceLength} words`);
  console.log(`  Opener: ${analysis.opener.pattern} ("${analysis.opener.text.slice(0, 40)}...")`);
  console.log(`  Closer: ${analysis.closer.pattern} ("${analysis.closer.text.slice(0, 40)}...")`);
  console.log(`  Em-dashes: ${analysis.punctuation.emDashes}, Ellipsis: ${analysis.punctuation.ellipsis}`);
  if (analysis.editSignals.totalEdits > 0) {
    console.log(`  Edits: ${analysis.editSignals.totalEdits} (${analysis.editSignals.patterns.join(", ")})`);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeEntry,
  analyzeStructure,
  classifyOpener,
  classifyCloser,
  classifyParagraphRole,
  extractTemplate,
  analyzePunctuation,
  analyzeVocabulary,
  analyzeEdits,
  splitSentences,
  splitParagraphs,
  tokenize,
};
