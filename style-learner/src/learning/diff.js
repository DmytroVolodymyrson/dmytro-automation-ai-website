#!/usr/bin/env node

/**
 * Auto text diff: computes structured edit list between draft and published text.
 *
 * Word-level diff (added, removed, swapped words)
 * Sentence-level diff (added, removed, reordered sentences)
 * Structural diff (paragraph count change, opener/closer changed)
 *
 * Output: structured edit list compatible with schema.js edits array.
 *
 * Usage:
 *   node src/learning/diff.js --draft "text A" --published "text B"
 */

const { splitSentences, splitParagraphs, tokenize } = require("./analyze");

// --- LCS for diff computation ---

function lcs(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the LCS items
  const result = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      result.unshift({ value: a[i - 1], indexA: i - 1, indexB: j - 1 });
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return result;
}

// --- Word-level diff ---

function diffWords(draftText, publishedText) {
  const draftWords = tokenize(draftText);
  const pubWords = tokenize(publishedText);
  const common = lcs(draftWords, pubWords);

  const removed = [];
  const added = [];
  const commonSet = new Set(common.map((c) => c.indexA));
  const commonSetB = new Set(common.map((c) => c.indexB));

  for (let i = 0; i < draftWords.length; i++) {
    if (!commonSet.has(i)) removed.push(draftWords[i]);
  }
  for (let i = 0; i < pubWords.length; i++) {
    if (!commonSetB.has(i)) added.push(pubWords[i]);
  }

  // Detect swaps: words removed from draft that appear in added (different position)
  const swapped = [];
  const addedSet = new Set(added);
  const removedSet = new Set(removed);
  for (const word of removed) {
    if (addedSet.has(word)) {
      // Same word moved, not a swap - skip
    }
  }

  // Detect word substitutions: removed word at position i replaced by added word
  const substitutions = [];
  let ri = 0;
  let ai = 0;
  // Walk through positions to find 1-to-1 substitutions
  let draftPos = 0;
  let pubPos = 0;
  let commonIdx = 0;

  while (draftPos < draftWords.length && pubPos < pubWords.length) {
    if (
      commonIdx < common.length &&
      common[commonIdx].indexA === draftPos &&
      common[commonIdx].indexB === pubPos
    ) {
      // Both match, advance
      draftPos++;
      pubPos++;
      commonIdx++;
    } else {
      // Mismatch region - collect consecutive mismatches
      const draftStart = draftPos;
      const pubStart = pubPos;
      while (
        draftPos < draftWords.length &&
        (commonIdx >= common.length || common[commonIdx].indexA !== draftPos)
      ) {
        draftPos++;
      }
      while (
        pubPos < pubWords.length &&
        (commonIdx >= common.length || common[commonIdx].indexB !== pubPos)
      ) {
        pubPos++;
      }
      const draftChunk = draftWords.slice(draftStart, draftPos);
      const pubChunk = pubWords.slice(pubStart, pubPos);

      if (draftChunk.length === 1 && pubChunk.length === 1) {
        substitutions.push({ draft: draftChunk[0], final: pubChunk[0] });
      } else if (draftChunk.length > 0 && pubChunk.length > 0) {
        substitutions.push({
          draft: draftChunk.join(" "),
          final: pubChunk.join(" "),
        });
      }
    }
  }

  return {
    added: added.filter(
      (w) => !substitutions.some((s) => s.final.split(" ").includes(w))
    ),
    removed: removed.filter(
      (w) => !substitutions.some((s) => s.draft.split(" ").includes(w))
    ),
    substitutions,
  };
}

// --- Sentence-level diff ---

function normalizeSentence(s) {
  return tokenize(s).join(" ");
}

function sentenceSimilarity(a, b) {
  const wordsA = tokenize(a);
  const wordsB = tokenize(b);
  if (!wordsA.length || !wordsB.length) return 0;

  const setA = new Set(wordsA);
  const setB = new Set(wordsB);
  let overlap = 0;
  for (const w of setA) {
    if (setB.has(w)) overlap++;
  }
  return overlap / Math.max(setA.size, setB.size);
}

function diffSentences(draftText, publishedText) {
  const draftSentences = splitSentences(draftText);
  const pubSentences = splitSentences(publishedText);

  const draftNorm = draftSentences.map(normalizeSentence);
  const pubNorm = pubSentences.map(normalizeSentence);

  // Exact matches via LCS
  const common = lcs(draftNorm, pubNorm);
  const matchedDraft = new Set(common.map((c) => c.indexA));
  const matchedPub = new Set(common.map((c) => c.indexB));

  // For unmatched, try fuzzy matching (similarity > 0.5)
  const rephrased = [];
  const unmatchedDraft = [];
  const unmatchedPub = [];

  for (let i = 0; i < draftSentences.length; i++) {
    if (!matchedDraft.has(i)) unmatchedDraft.push(i);
  }
  for (let i = 0; i < pubSentences.length; i++) {
    if (!matchedPub.has(i)) unmatchedPub.push(i);
  }

  // First pass: detect exact-match reorders (same normalized text, different position)
  const reordered = [];
  const reorderedDraft = new Set();
  const reorderedPub = new Set();

  for (const di of unmatchedDraft) {
    for (const pi of unmatchedPub) {
      if (reorderedPub.has(pi)) continue;
      if (draftNorm[di] === pubNorm[pi]) {
        reordered.push(draftSentences[di]);
        reorderedDraft.add(di);
        reorderedPub.add(pi);
        break;
      }
    }
  }

  // Second pass: fuzzy matching for remaining unmatched (rephrases)
  const fuzzyMatchedDraft = new Set();
  const fuzzyMatchedPub = new Set();

  for (const di of unmatchedDraft) {
    if (reorderedDraft.has(di)) continue;
    let bestSim = 0;
    let bestPi = -1;
    for (const pi of unmatchedPub) {
      if (reorderedPub.has(pi) || fuzzyMatchedPub.has(pi)) continue;
      const sim = sentenceSimilarity(draftSentences[di], pubSentences[pi]);
      if (sim > bestSim) {
        bestSim = sim;
        bestPi = pi;
      }
    }
    if (bestSim >= 0.5 && bestPi !== -1) {
      rephrased.push({
        draft: draftSentences[di],
        final: pubSentences[bestPi],
        similarity: Math.round(bestSim * 100) / 100,
      });
      fuzzyMatchedDraft.add(di);
      fuzzyMatchedPub.add(bestPi);
    }
  }

  // Also detect reordering within the LCS (relative order inversion)
  for (const c of common) {
    const othersBefore = common.filter((o) => o !== c && o.indexA < c.indexA);
    for (const o of othersBefore) {
      if (o.indexB > c.indexB) {
        reordered.push(draftSentences[c.indexA]);
        break;
      }
    }
  }

  const removed = unmatchedDraft
    .filter((i) => !reorderedDraft.has(i) && !fuzzyMatchedDraft.has(i))
    .map((i) => draftSentences[i]);

  const added = unmatchedPub
    .filter((i) => !reorderedPub.has(i) && !fuzzyMatchedPub.has(i))
    .map((i) => pubSentences[i]);

  return { added, removed, rephrased, reordered: [...new Set(reordered)] };
}

// --- Structural diff ---

function diffStructure(draftText, publishedText) {
  const draftParas = splitParagraphs(draftText);
  const pubParas = splitParagraphs(publishedText);

  const result = {
    paragraphCountChange: pubParas.length - draftParas.length,
    draftParagraphs: draftParas.length,
    publishedParagraphs: pubParas.length,
  };

  // Check if opener changed
  if (draftParas.length > 0 && pubParas.length > 0) {
    const openerSim = sentenceSimilarity(draftParas[0], pubParas[0]);
    result.openerChanged = openerSim < 0.8;
    result.openerSimilarity = Math.round(openerSim * 100) / 100;
  }

  // Check if closer changed
  if (draftParas.length > 0 && pubParas.length > 0) {
    const closerSim = sentenceSimilarity(
      draftParas[draftParas.length - 1],
      pubParas[pubParas.length - 1]
    );
    result.closerChanged = closerSim < 0.8;
    result.closerSimilarity = Math.round(closerSim * 100) / 100;
  }

  return result;
}

// --- Generate edits array (schema.js compatible) ---

function computeEdits(draftText, publishedText) {
  const edits = [];

  const wordDiff = diffWords(draftText, publishedText);
  const sentDiff = diffSentences(draftText, publishedText);
  const structDiff = diffStructure(draftText, publishedText);

  // Word swaps
  for (const sub of wordDiff.substitutions) {
    const wordCount = sub.draft.split(/\s+/).length;
    edits.push({
      type: wordCount <= 2 ? "word_swap" : "rephrase",
      draft: sub.draft,
      final: sub.final,
      reason: "",
    });
  }

  // Sentence-level rephrases (only if not already covered by word-level)
  for (const r of sentDiff.rephrased) {
    edits.push({
      type: "rephrase",
      draft: r.draft,
      final: r.final,
      reason: `similarity: ${r.similarity}`,
    });
  }

  // Removed sentences
  for (const s of sentDiff.removed) {
    edits.push({
      type: "cut",
      description: `Removed: "${s.slice(0, 80)}"`,
    });
  }

  // Added sentences
  for (const s of sentDiff.added) {
    edits.push({
      type: "addition",
      text: s,
      description: `Added: "${s.slice(0, 80)}"`,
    });
  }

  // Reordered sentences
  for (const s of sentDiff.reordered) {
    edits.push({
      type: "reorder",
      description: `Reordered: "${s.slice(0, 80)}"`,
    });
  }

  return {
    edits,
    summary: {
      wordSwaps: wordDiff.substitutions.length,
      sentencesAdded: sentDiff.added.length,
      sentencesRemoved: sentDiff.removed.length,
      sentencesRephrased: sentDiff.rephrased.length,
      sentencesReordered: sentDiff.reordered.length,
      paragraphCountChange: structDiff.paragraphCountChange,
      openerChanged: structDiff.openerChanged || false,
      closerChanged: structDiff.closerChanged || false,
    },
  };
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);
  const draftIdx = args.indexOf("--draft");
  const pubIdx = args.indexOf("--published");

  if (draftIdx === -1 || pubIdx === -1 || !args[draftIdx + 1] || !args[pubIdx + 1]) {
    console.log('Usage: node diff.js --draft "text A" --published "text B"');
    process.exit(1);
  }

  const draftText = args[draftIdx + 1];
  const publishedText = args[pubIdx + 1];

  const result = computeEdits(draftText, publishedText);

  console.log("=== Diff Result ===\n");
  console.log(`Word swaps: ${result.summary.wordSwaps}`);
  console.log(`Sentences added: ${result.summary.sentencesAdded}`);
  console.log(`Sentences removed: ${result.summary.sentencesRemoved}`);
  console.log(`Sentences rephrased: ${result.summary.sentencesRephrased}`);
  console.log(`Sentences reordered: ${result.summary.sentencesReordered}`);
  console.log(`Paragraph count change: ${result.summary.paragraphCountChange}`);
  console.log(`Opener changed: ${result.summary.openerChanged}`);
  console.log(`Closer changed: ${result.summary.closerChanged}`);

  console.log("\n--- Edits ---");
  for (const edit of result.edits) {
    if (edit.type === "word_swap" || edit.type === "rephrase") {
      console.log(`  [${edit.type}] "${edit.draft}" -> "${edit.final}"`);
    } else {
      console.log(`  [${edit.type}] ${edit.description || edit.text}`);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  computeEdits,
  diffWords,
  diffSentences,
  diffStructure,
  lcs,
  sentenceSimilarity,
};
