#!/usr/bin/env node
'use strict';

const { computeEdits, diffWords, diffSentences, diffStructure, lcs, sentenceSimilarity } = require('../src/learning/diff');
const { classifyOpener, classifyCloser, extractTemplate, classifyParagraphRole, analyzeEntry } = require('../src/learning/analyze');
const { buildProfile } = require('../src/learning/profile');

let passed = 0;
let failed = 0;

function assert(condition, testName, details) {
  if (condition) {
    console.log(`  PASS: ${testName}`);
    passed++;
  } else {
    console.log(`  FAIL: ${testName}`);
    if (details) console.log(`        ${details}`);
    failed++;
  }
}

// ============================================================
// DIFF TESTS
// ============================================================

console.log('\n=== diff.js: LCS ===');

assert(
  lcs(['a', 'b', 'c'], ['a', 'b', 'c']).length === 3,
  'LCS of identical arrays is full length'
);

assert(
  lcs(['a', 'b', 'c'], ['x', 'y', 'z']).length === 0,
  'LCS of completely different arrays is 0'
);

assert(
  lcs(['a', 'b', 'c', 'd'], ['a', 'c', 'd']).length === 3,
  'LCS skips removed element'
);

assert(
  lcs([], ['a', 'b']).length === 0,
  'LCS with empty first array'
);

assert(
  lcs(['a'], ['a']).length === 1,
  'LCS single matching element'
);

// --- Word diff ---

console.log('\n=== diff.js: diffWords ===');

(() => {
  const r = diffWords('hello world', 'hello world');
  assert(
    r.added.length === 0 && r.removed.length === 0 && r.substitutions.length === 0,
    'Identical text produces no diff'
  );
})();

(() => {
  const r = diffWords('hello world', 'hello universe');
  assert(
    r.substitutions.length === 1 && r.substitutions[0].draft === 'world' && r.substitutions[0].final === 'universe',
    'One word swap detected',
    JSON.stringify(r.substitutions)
  );
})();

(() => {
  const r = diffWords('the quick brown fox', 'the slow brown fox');
  assert(
    r.substitutions.some(s => s.draft === 'quick' && s.final === 'slow'),
    'Substitution: quick -> slow',
    JSON.stringify(r.substitutions)
  );
})();

(() => {
  const r = diffWords('hello world', 'hello beautiful world');
  assert(
    r.added.length > 0 || r.substitutions.some(s => s.final.includes('beautiful')),
    'Word added detected',
    JSON.stringify(r)
  );
})();

(() => {
  const r = diffWords('hello beautiful world', 'hello world');
  assert(
    r.removed.length > 0 || r.substitutions.some(s => s.draft.includes('beautiful')),
    'Word removed detected',
    JSON.stringify(r)
  );
})();

(() => {
  const r = diffWords('a b c d e', 'a b c d e');
  assert(
    r.substitutions.length === 0 && r.added.length === 0 && r.removed.length === 0,
    'Five identical words - no diff'
  );
})();

(() => {
  const r = diffWords('cat sat mat', 'dog sat mat');
  assert(
    r.substitutions.some(s => s.draft === 'cat' && s.final === 'dog'),
    'First word substitution',
    JSON.stringify(r.substitutions)
  );
})();

// --- Sentence diff ---

console.log('\n=== diff.js: diffSentences ===');

(() => {
  const r = diffSentences(
    'Hello world. How are you.',
    'Hello world. How are you.'
  );
  assert(
    r.added.length === 0 && r.removed.length === 0 && r.rephrased.length === 0,
    'Identical sentences produce no diff'
  );
})();

(() => {
  const r = diffSentences(
    'Hello world.',
    'Hello world. New sentence here.'
  );
  assert(
    r.added.length === 1,
    'One sentence added',
    `added: ${JSON.stringify(r.added)}`
  );
})();

(() => {
  const r = diffSentences(
    'Hello world. Goodbye world.',
    'Hello world.'
  );
  assert(
    r.removed.length === 1,
    'One sentence removed',
    `removed: ${JSON.stringify(r.removed)}`
  );
})();

(() => {
  const r = diffSentences(
    'The quick brown fox jumps over the lazy dog.',
    'The fast brown fox jumps over the lazy dog.'
  );
  assert(
    r.rephrased.length === 1 || r.added.length + r.removed.length > 0,
    'Rephrased sentence detected',
    JSON.stringify(r)
  );
})();

(() => {
  const r = diffSentences(
    'First. Second. Third.',
    'Third. First. Second.'
  );
  assert(
    r.reordered.length > 0,
    'Sentence reorder detected',
    `reordered: ${JSON.stringify(r.reordered)}`
  );
})();

(() => {
  const r = diffSentences(
    'Alpha beta gamma.',
    'Completely different text here.'
  );
  assert(
    r.removed.length >= 1 && r.added.length >= 1,
    'Complete rewrite: removed and added',
    JSON.stringify(r)
  );
})();

(() => {
  const r = diffSentences(
    'First sentence. Second sentence. Third sentence.',
    'First sentence. Third sentence.'
  );
  assert(
    r.removed.length === 1,
    'Middle sentence removed',
    `removed: ${JSON.stringify(r.removed)}`
  );
})();

// --- Structural diff ---

console.log('\n=== diff.js: diffStructure ===');

(() => {
  const r = diffStructure(
    'Paragraph one.\n\nParagraph two.',
    'Paragraph one.\n\nParagraph two.\n\nParagraph three.'
  );
  assert(
    r.paragraphCountChange === 1,
    'Paragraph added: count change +1',
    `change: ${r.paragraphCountChange}`
  );
})();

(() => {
  const r = diffStructure(
    'Same opener.\n\nMiddle.\n\nCloser.',
    'Same opener.\n\nMiddle.\n\nCloser.'
  );
  assert(
    r.openerChanged === false && r.closerChanged === false,
    'Identical text: opener and closer unchanged'
  );
})();

(() => {
  const r = diffStructure(
    'Original opener.\n\nMiddle.\n\nOriginal closer.',
    'Different opener text.\n\nMiddle.\n\nOriginal closer.'
  );
  assert(
    r.openerChanged === true,
    'Opener changed detected',
    `openerSimilarity: ${r.openerSimilarity}`
  );
})();

(() => {
  const r = diffStructure(
    'Opener.\n\nMiddle.\n\nOriginal closer.',
    'Opener.\n\nMiddle.\n\nCompletely new ending.'
  );
  assert(
    r.closerChanged === true,
    'Closer changed detected',
    `closerSimilarity: ${r.closerSimilarity}`
  );
})();

// --- computeEdits (integration) ---

console.log('\n=== diff.js: computeEdits ===');

(() => {
  const r = computeEdits('Hello world.', 'Hello world.');
  assert(
    r.edits.length === 0,
    'Identical text produces no edits'
  );
})();

(() => {
  const r = computeEdits(
    'The old approach was slow.',
    'The new approach was fast.'
  );
  assert(
    r.edits.length > 0,
    'Changed text produces edits',
    `edits: ${r.edits.length}`
  );
  assert(
    r.edits.some(e => e.type === 'word_swap' || e.type === 'rephrase'),
    'Contains word_swap or rephrase edits'
  );
})();

(() => {
  const r = computeEdits(
    'First paragraph.\n\nSecond paragraph.',
    'First paragraph.\n\nSecond paragraph.\n\nThird paragraph.'
  );
  assert(
    r.summary.paragraphCountChange === 1,
    'Summary tracks paragraph count change'
  );
})();

(() => {
  const r = computeEdits(
    'Sentence one. Sentence two. Sentence three.',
    'Sentence one. Sentence three.'
  );
  assert(
    r.summary.sentencesRemoved >= 1,
    'Summary tracks sentences removed',
    `removed: ${r.summary.sentencesRemoved}`
  );
})();

// --- sentenceSimilarity ---

console.log('\n=== diff.js: sentenceSimilarity ===');

assert(
  sentenceSimilarity('hello world foo', 'hello world foo') === 1,
  'Identical sentences have similarity 1'
);

assert(
  sentenceSimilarity('hello world', 'goodbye universe') === 0,
  'Completely different sentences have similarity 0'
);

assert(
  sentenceSimilarity('the quick brown fox', 'the slow brown fox') > 0.5,
  'Similar sentences have similarity > 0.5'
);

// ============================================================
// OPENER CLASSIFICATION TESTS (Phase 2)
// ============================================================

console.log('\n=== analyze.js: Opener classification ===');

// 1. single-word-day
assert(
  classifyOpener('Пятница.\n\nОстальной текст тут.').pattern === 'single-word-day',
  'Russian day name -> single-word-day'
);

assert(
  classifyOpener('Monday.\n\nRest of text here.').pattern === 'single-word-day',
  'English day name -> single-word-day'
);

// 2. question
assert(
  classifyOpener('Как вы думаете, что лучше?\n\nПродолжение.').pattern === 'question',
  'Question opener detected'
);

assert(
  classifyOpener('What if everything changed?\n\nMore text.').pattern === 'question',
  'English question opener detected'
);

// 3. stat
assert(
  classifyOpener('95% клиентов уходят.\n\nОстальное.').pattern === 'stat',
  'Percentage stat opener detected'
);

assert(
  classifyOpener('3 things matter.\n\nDetails.').pattern === 'stat',
  'Number stat opener detected'
);

// 4. story
assert(
  classifyOpener('I built a bot last week and it changed everything.\n\nMore text.').pattern === 'story',
  'First-person story opener detected'
);

assert(
  classifyOpener('Вчера случилось нечто странное.\n\nДальше.').pattern === 'story',
  'Russian story opener (вчера) detected'
);

// 5. short-punch
assert(
  classifyOpener('Все сломалось.\n\nОстальное.').pattern === 'short-punch',
  'Short punch opener (2 words) detected'
);

assert(
  classifyOpener('Game over.\n\nMore text.').pattern === 'short-punch',
  'Short punch opener English detected'
);

// 6. situation
assert(
  classifyOpener('Imagine you are sitting in a meeting and nobody cares.\n\nMore text.').pattern === 'situation',
  'Situation opener (imagine) detected'
);

assert(
  classifyOpener('Представьте что вы пришли на собеседование и забыли все.\n\nДальше.').pattern === 'situation',
  'Russian situation opener detected'
);

// ============================================================
// CLOSER CLASSIFICATION TESTS (Phase 2)
// ============================================================

console.log('\n=== analyze.js: Closer classification ===');

// 1. ellipsis-casual
assert(
  classifyCloser('Первый абзац.\n\nИ вот так все и закончилось...').pattern === 'ellipsis-casual',
  'Ellipsis closer detected'
);

// 2. question
assert(
  classifyCloser('Text here.\n\nА что думаете вы?').pattern === 'question',
  'Question closer detected'
);

// 3. cta
assert(
  classifyCloser('Text here.\n\nПишите в комментариях, пишите в dm.').pattern === 'cta',
  'CTA closer (dm) detected'
);

assert(
  classifyCloser('Text here.\n\nCheck out the link in bio.').pattern === 'cta',
  'CTA closer (check, link) detected'
);

// 4. movement
assert(
  classifyCloser('Text here.\n\nДвигаемся дальше.').pattern === 'movement',
  'Movement closer (двигаемся) detected'
);

assert(
  classifyCloser('Text here.\n\nLets go forward and build.').pattern === 'movement',
  'Movement closer (lets go forward) detected'
);

// 5. reflection
assert(
  classifyCloser('Text here.\n\nIn the end what matters is not the tools but the people who use them every day.').pattern === 'reflection',
  'Reflection closer detected (long sentence)'
);

// ============================================================
// STRUCTURAL TEMPLATE TESTS (Phase 2)
// ============================================================

console.log('\n=== analyze.js: Structural templates ===');

// Template 1: simple opener | closer
(() => {
  const r = extractTemplate('Opener text.\n\nCloser text.');
  assert(
    r.roles.length === 2,
    'Two-paragraph post has 2 roles'
  );
  assert(
    r.roles[0] === 'opener' && r.roles[1] === 'closer',
    'Two paragraphs: opener | closer',
    `got: ${r.template}`
  );
})();

// Template 2: opener | context | closer
(() => {
  const r = extractTemplate('Пятница.\n\nКонтекст и фон для поста.\n\nЗаключение и мысли.');
  assert(
    r.roles.length === 3,
    'Three-paragraph post has 3 roles'
  );
  assert(
    r.template === 'opener | context | closer',
    'Three paragraphs: opener | context | closer',
    `got: ${r.template}`
  );
})();

// Template 3: opener | context | product-pitch | result | closer
(() => {
  const r = extractTemplate(
    'Начало.\n\n' +
    'Контекст ситуации.\n\n' +
    'Наш новый продукт решает эту проблему.\n\n' +
    'Результат: конверсия выросла на 40%.\n\n' +
    'Вот так и живем.'
  );
  assert(
    r.roles[0] === 'opener',
    'First paragraph is opener'
  );
  assert(
    r.roles[2] === 'product-pitch',
    'Product paragraph detected',
    `got: ${r.roles[2]}`
  );
  assert(
    r.roles[3] === 'result',
    'Result paragraph detected',
    `got: ${r.roles[3]}`
  );
  assert(
    r.roles[4] === 'closer',
    'Last paragraph is closer'
  );
  assert(
    r.template.includes('product-pitch'),
    'Template string contains product-pitch',
    `got: ${r.template}`
  );
})();

// Template with lesson
(() => {
  const r = extractTemplate(
    'Opener.\n\n' +
    'Background context.\n\n' +
    'Context continues here.\n\n' +
    'The main lesson I learned from this experience.\n\n' +
    'Closer.'
  );
  assert(
    r.roles[3] === 'lesson',
    'Lesson paragraph detected',
    `got: ${r.roles[3]}`
  );
})();

// --- classifyParagraphRole directly ---

console.log('\n=== analyze.js: classifyParagraphRole ===');

assert(
  classifyParagraphRole('Anything', 0, 5) === 'opener',
  'Index 0 is always opener'
);

assert(
  classifyParagraphRole('Anything', 4, 5) === 'closer',
  'Last index is always closer'
);

assert(
  classifyParagraphRole('We built a new product for our team.', 2, 5) === 'product-pitch',
  'Paragraph with "product" -> product-pitch'
);

assert(
  classifyParagraphRole('Revenue grew by 200% this quarter.', 2, 5) === 'result',
  'Paragraph with "grew" and percentage -> result'
);

assert(
  classifyParagraphRole('The key lesson here is to move fast.', 3, 5) === 'lesson',
  'Paragraph with "lesson" -> lesson'
);

// ============================================================
// PROFILE TEMPLATE FREQUENCY TESTS (Phase 2)
// ============================================================

console.log('\n=== profile.js: Template frequency tracking ===');

(() => {
  // Create 3 mock entries with analysis including template
  const entries = [
    {
      platform: 'telegram',
      language: 'ru',
      edits: [],
      analysis: {
        structure: { paragraphCount: 3, sentencesPerParagraph: [1, 2, 1], avgSentenceLength: 5, totalWords: 20 },
        opener: { pattern: 'single-word-day', text: 'Пятница.', type: 'day-label' },
        closer: { pattern: 'ellipsis-casual', text: 'Вот так...', type: 'trailing-off' },
        template: { roles: ['opener', 'context', 'closer'], template: 'opener | context | closer' },
        punctuation: { periods: 3, commas: 1, emDashes: 0, enDashes: 0, ellipsis: 1, exclamation: 0, question: 0, colon: 0, commasPerSentence: 0.25 },
        vocabulary: { topWords: [['пятница', 2]], casualMarkerRate: 0, buzzwords: [], formalWords: [] },
        editSignals: { totalEdits: 0, patterns: [] },
      },
      engagement: { views: 100 },
    },
    {
      platform: 'telegram',
      language: 'ru',
      edits: [],
      analysis: {
        structure: { paragraphCount: 3, sentencesPerParagraph: [1, 2, 1], avgSentenceLength: 6, totalWords: 24 },
        opener: { pattern: 'single-word-day', text: 'Понедельник.', type: 'day-label' },
        closer: { pattern: 'question', text: 'Что думаете?', type: 'question' },
        template: { roles: ['opener', 'context', 'closer'], template: 'opener | context | closer' },
        punctuation: { periods: 2, commas: 2, emDashes: 0, enDashes: 0, ellipsis: 0, exclamation: 0, question: 1, colon: 0, commasPerSentence: 0.5 },
        vocabulary: { topWords: [['понедельник', 1]], casualMarkerRate: 0, buzzwords: [], formalWords: [] },
        editSignals: { totalEdits: 0, patterns: [] },
      },
      engagement: { views: 150 },
    },
    {
      platform: 'telegram',
      language: 'ru',
      edits: [],
      analysis: {
        structure: { paragraphCount: 5, sentencesPerParagraph: [1, 3, 2, 2, 1], avgSentenceLength: 7, totalWords: 63 },
        opener: { pattern: 'question', text: 'Зачем?', type: 'question' },
        closer: { pattern: 'movement', text: 'Двигаемся дальше.', type: 'movement' },
        template: { roles: ['opener', 'context', 'product-pitch', 'result', 'closer'], template: 'opener | context | product-pitch | result | closer' },
        punctuation: { periods: 5, commas: 3, emDashes: 0, enDashes: 0, ellipsis: 0, exclamation: 0, question: 1, colon: 0, commasPerSentence: 0.33 },
        vocabulary: { topWords: [['продукт', 2]], casualMarkerRate: 0, buzzwords: [], formalWords: [] },
        editSignals: { totalEdits: 0, patterns: [] },
      },
      engagement: { views: 200 },
    },
  ];

  const profile = buildProfile(entries);

  assert(
    profile !== null,
    'Profile built successfully from 3 entries'
  );

  assert(
    profile.postCount === 3,
    'Profile has 3 posts',
    `got: ${profile.postCount}`
  );

  assert(
    profile.structure.structuralTemplates !== undefined,
    'Profile has structuralTemplates field'
  );

  assert(
    profile.structure.structuralTemplates['opener | context | closer'] === 2,
    'opener | context | closer appears 2 times',
    `got: ${JSON.stringify(profile.structure.structuralTemplates)}`
  );

  assert(
    profile.structure.structuralTemplates['opener | context | product-pitch | result | closer'] === 1,
    'Full template appears 1 time',
    `got: ${JSON.stringify(profile.structure.structuralTemplates)}`
  );

  assert(
    profile.openers.patterns['single-word-day'] !== undefined,
    'Profile tracks single-word-day opener pattern'
  );

  assert(
    profile.openers.patterns['single-word-day'].count === 2,
    'single-word-day appears 2 times',
    `got: ${profile.openers.patterns['single-word-day']?.count}`
  );

  assert(
    profile.closers.patterns['movement'] !== undefined,
    'Profile tracks movement closer pattern'
  );
})();

// --- analyzeEntry integration with template ---

console.log('\n=== analyze.js: analyzeEntry with template ===');

(() => {
  const entry = {
    published: {
      text: 'Пятница.\n\nСегодня запустили новый продукт.\n\nИ вот так все и закончилось...',
    },
    language: 'ru',
    edits: [],
  };
  const analysis = analyzeEntry(entry);
  assert(
    analysis.template !== undefined,
    'analyzeEntry includes template field'
  );
  assert(
    analysis.template.roles.length === 3,
    'Template has 3 roles for 3 paragraphs',
    `got: ${analysis.template.roles.length}`
  );
  assert(
    analysis.template.roles[0] === 'opener',
    'First role is opener'
  );
  assert(
    analysis.template.roles[2] === 'closer',
    'Last role is closer'
  );
  assert(
    typeof analysis.template.template === 'string',
    'Template string is a string'
  );
})();

// ============================================================
// SUMMARY
// ============================================================

console.log(`\n=== Phase 2 Results: ${passed} passed, ${failed} failed ===\n`);
if (failed > 0) process.exit(1);
