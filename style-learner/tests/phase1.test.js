#!/usr/bin/env node
'use strict';

/**
 * Comprehensive Phase 1 test suite for the style learning system.
 * Tests schema.js, analyze.js, and profile.js using only Node.js built-ins.
 */

const path = require('path');
const fs = require('fs');
const os = require('os');

const { validate, createEntryFromInput, SCHEMA_VERSION, PLATFORMS, EDIT_TYPES, MEDIA_TYPES, DAYS } = require('../src/learning/schema');
const { analyzeEntry, analyzeStructure, classifyOpener, classifyCloser, analyzePunctuation, analyzeEdits, splitParagraphs, splitSentences, tokenize } = require('../src/learning/analyze');
const { buildProfile, saveProfile, confidence, statSummary } = require('../src/learning/profile');

let passed = 0;
let failed = 0;
let currentSection = '';

function section(name) {
  currentSection = name;
  console.log(`\n=== ${name} ===`);
}

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

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// ============================================================
// SCHEMA.JS TESTS
// ============================================================

section('schema.js - Creates a valid post entry from structured input');

{
  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'This is a test post. It has two sentences.',
  });
  assert(entry !== null, 'Entry is created');
  assert(entry.schemaVersion === SCHEMA_VERSION, `Schema version is ${SCHEMA_VERSION}`);
  assert(entry.platform === PLATFORMS[0], `Platform is ${PLATFORMS[0]}`);
  assert(entry.date === '2026-03-06', 'Date is set correctly');
  assert(entry.published.text === 'This is a test post. It has two sentences.', 'Text is set correctly');
  assert(typeof entry.dayOfWeek === 'string' && DAYS.includes(entry.dayOfWeek), 'dayOfWeek is a valid day');
  assert(typeof entry.id === 'string' && entry.id.length > 0, 'ID is generated');
}

section('schema.js - Validates required fields (platform, date, text)');

{
  // Valid entry
  const validEntry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Hello world.',
  });
  const validResult = validate(validEntry);
  assert(validResult.valid, 'Valid entry passes validation');
  assert(validResult.errors.length === 0, 'No errors for valid entry');

  // Missing platform
  const noPlatform = { ...validEntry, platform: undefined };
  const noPlatformResult = validate(noPlatform);
  assert(!noPlatformResult.valid, 'Missing platform fails validation');

  // Missing date
  const noDate = { ...validEntry, date: undefined };
  const noDateResult = validate(noDate);
  assert(!noDateResult.valid, 'Missing date fails validation');

  // Missing published text
  const noText = { ...validEntry, published: { text: '' } };
  const noTextResult = validate(noText);
  assert(!noTextResult.valid, 'Empty published.text fails validation');

  // Missing published entirely
  const noPub = { ...validEntry, published: null };
  const noPubResult = validate(noPub);
  assert(!noPubResult.valid, 'Null published fails validation');
}

section('schema.js - Rejects invalid platform values');

{
  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Test.',
  });

  // Valid platform
  const validResult = validate(entry);
  assert(validResult.valid, `Platform "${PLATFORMS[0]}" is valid`);

  // Invalid platform
  const badEntry = { ...entry, platform: 'tiktok-fakebook' };
  const badResult = validate(badEntry);
  assert(!badResult.valid, 'Invalid platform "tiktok-fakebook" is rejected');
  assert(badResult.errors.some(e => e.includes('platform')), 'Error message mentions platform');
}

section('schema.js - Handles missing optional fields gracefully');

{
  // No draft, no media, no edits
  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Minimal post.',
  });
  const result = validate(entry);
  assert(result.valid, 'Entry without optional fields is valid');
  assert(entry.draft === null, 'Draft is null when not provided');
  assert(entry.engagement === null, 'Engagement is null when not provided');
  assert(Array.isArray(entry.edits) && entry.edits.length === 0, 'Edits is empty array when not provided');
  assert(entry.published.media === undefined, 'Media is undefined when not provided');
}

section('schema.js - Handles all edit types');

{
  const editTypes = ['word_swap', 'cut', 'addition', 'reorder', 'rephrase', 'tone_shift'];
  const edits = editTypes.map(type => ({ type, description: `Test ${type}` }));

  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Post with edits.',
    edits,
  });

  const result = validate(entry);
  assert(result.valid, 'Entry with all edit types is valid');
  assert(entry.edits.length === editTypes.length, `All ${editTypes.length} edit types stored`);

  // Invalid edit type
  const badEdits = [{ type: 'invalid_type', description: 'bad' }];
  const badEntry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Post.',
    edits: badEdits,
  });
  const badResult = validate(badEntry);
  assert(!badResult.valid, 'Invalid edit type is rejected');
}

section('schema.js - Serializes to JSON correctly');

{
  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'JSON test post.',
    edits: [{ type: 'word_swap', draft: 'old', final: 'new', reason: 'better' }],
  });

  const json = JSON.stringify(entry);
  const parsed = JSON.parse(json);
  assert(parsed.schemaVersion === SCHEMA_VERSION, 'Schema version survives JSON roundtrip');
  assert(parsed.published.text === 'JSON test post.', 'Text survives JSON roundtrip');
  assert(parsed.edits[0].type === 'word_swap', 'Edit type survives JSON roundtrip');
  assert(parsed.edits[0].draft === 'old', 'Edit draft survives JSON roundtrip');
  assert(parsed.edits[0].final === 'new', 'Edit final survives JSON roundtrip');
}

// ============================================================
// ANALYZE.JS TESTS
// ============================================================

section('analyze.js - Counts paragraphs correctly');

{
  const oneP = analyzeStructure('Single paragraph here.');
  assert(oneP.paragraphCount === 1, 'Single paragraph counted as 1');

  const threeP = analyzeStructure('First paragraph.\n\nSecond paragraph.\n\nThird paragraph.');
  assert(threeP.paragraphCount === 3, 'Three paragraphs counted as 3');

  const withBlanks = analyzeStructure('First.\n\n\n\nSecond.');
  assert(withBlanks.paragraphCount === 2, 'Multiple blank lines still count as 2 paragraphs');
}

section('analyze.js - Calculates average sentence length');

{
  // "Hello world. Goodbye world." -> 2 sentences, each 2 words -> avg = 2
  const result = analyzeStructure('Hello world. Goodbye world.');
  assert(result.avgSentenceLength === 2, `Avg sentence length is 2 (got ${result.avgSentenceLength})`);

  // Single sentence
  const single = analyzeStructure('This is a test sentence.');
  assert(single.avgSentenceLength === 5, `Single 5-word sentence has avgSentenceLength 5 (got ${single.avgSentenceLength})`);
}

section('analyze.js - Detects em-dashes as violation signal');

{
  const textWithEmDash = 'This text \u2014 has an em-dash in it.';
  const punct = analyzePunctuation(textWithEmDash);
  assert(punct.emDashes === 1, `Em-dash count is 1 (got ${punct.emDashes})`);

  const textNoEmDash = 'This text has no special dashes.';
  const punct2 = analyzePunctuation(textNoEmDash);
  assert(punct2.emDashes === 0, 'No em-dashes in clean text');

  const multiEmDash = 'First \u2014 second \u2014 third.';
  const punct3 = analyzePunctuation(multiEmDash);
  assert(punct3.emDashes === 2, `Two em-dashes counted (got ${punct3.emDashes})`);
}

section('analyze.js - Detects \u0451 as violation signal');

{
  // The \u0451 detection is in the style-checker, but analyze.js vocabulary
  // would include it in word tokens. We test that the vocabulary analyzer
  // handles Cyrillic text properly.
  const vocab = require('../src/learning/analyze').analyzeVocabulary;
  const result = vocab('\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u0442\u0435\u0441\u0442', 'ru');
  assert(result.totalWords === 3, `Russian text tokenized to 3 words (got ${result.totalWords})`);
}

section('analyze.js - Classifies opener types');

{
  // single-word-day
  const dayOpener = classifyOpener('Friday.');
  assert(dayOpener.pattern === 'single-word-day', `"Friday." -> single-word-day (got ${dayOpener.pattern})`);

  // question
  const questionOpener = classifyOpener('What if we could automate this?\n\nMore text here.');
  assert(questionOpener.pattern === 'question-hook', `Question opener detected (got ${questionOpener.pattern})`);

  // stat/number hook
  const statOpener = classifyOpener('3 projects shipped.');
  assert(statOpener.pattern === 'number-hook', `Stat opener detected (got ${statOpener.pattern})`);

  // story
  const storyOpener = classifyOpener('Yesterday I met a client who changed my perspective on automation completely.');
  assert(storyOpener.pattern === 'story-start', `Story opener detected (got ${storyOpener.pattern})`);

  // short punch
  const punchOpener = classifyOpener('Done.\n\nThe project is complete.');
  assert(punchOpener.pattern === 'short-statement', `Short punch opener detected (got ${punchOpener.pattern})`);
}

section('analyze.js - Classifies closer types');

{
  // ellipsis-casual
  const ellipsisCloser = classifyCloser('Some text.\n\nKeep moving...');
  assert(ellipsisCloser.pattern === 'ellipsis-casual', `Ellipsis closer detected (got ${ellipsisCloser.pattern})`);

  // question
  const questionCloser = classifyCloser('Some text.\n\nWhat do you think?');
  assert(questionCloser.pattern === 'question-close', `Question closer detected (got ${questionCloser.pattern})`);

  // CTA
  const ctaCloser = classifyCloser('Some text.\n\nCheck the link for details.');
  assert(ctaCloser.pattern === 'call-to-action', `CTA closer detected (got ${ctaCloser.pattern})`);

  // reflection (long last paragraph)
  const reflectionCloser = classifyCloser('Some text.\n\nThis has been a journey of discovery that taught me more about automation than I expected to learn in a lifetime.');
  assert(reflectionCloser.pattern === 'reflective-close', `Reflection closer detected (got ${reflectionCloser.pattern})`);

  // short closer
  const shortCloser = classifyCloser('Some text.\n\nShip it.');
  assert(shortCloser.pattern === 'short-closer', `Short closer detected (got ${shortCloser.pattern})`);
}

section('analyze.js - Counts edit pattern types from edits array');

{
  const edits = [
    { type: 'word_swap', draft: 'build', final: 'make', reason: 'more casual' },
    { type: 'word_swap', draft: 'create', final: 'do', reason: 'simpler' },
    { type: 'cut', description: 'Removed over-analysis paragraph', reason: 'over-analysis' },
    { type: 'addition', text: 'trust signal', reason: 'trust' },
    { type: 'reorder', description: 'Moved intro before details' },
    { type: 'rephrase', draft: 'long sentence', final: 'short', reason: 'tighter' },
    { type: 'tone_shift', description: 'Made it more casual' },
  ];

  const result = analyzeEdits(edits);
  assert(result.totalEdits === 7, `Total edits is 7 (got ${result.totalEdits})`);
  assert(result.wordSwaps === 2, `Word swaps is 2 (got ${result.wordSwaps})`);
  assert(result.cuts === 1, `Cuts is 1 (got ${result.cuts})`);
  assert(result.additions === 1, `Additions is 1 (got ${result.additions})`);
  assert(result.reorders === 1, `Reorders is 1 (got ${result.reorders})`);
  assert(result.rephrases === 1, `Rephrases is 1 (got ${result.rephrases})`);
  assert(result.toneShifts === 1, `Tone shifts is 1 (got ${result.toneShifts})`);

  // Pattern detection
  assert(result.patterns.includes('prefers-casual-verbs'), 'Detects prefers-casual-verbs pattern');
  assert(result.patterns.includes('reorders-for-flow'), 'Detects reorders-for-flow pattern');
}

section('analyze.js - Handles empty text gracefully');

{
  const emptyResult = analyzeStructure('');
  assert(emptyResult.paragraphCount === 0, 'Empty text has 0 paragraphs');
  assert(emptyResult.totalWords === 0, 'Empty text has 0 words');
  assert(emptyResult.avgSentenceLength === 0, 'Empty text has 0 avg sentence length');

  const emptyOpener = classifyOpener('');
  assert(emptyOpener.pattern === 'empty', 'Empty text has empty opener pattern');

  const emptyCloser = classifyCloser('');
  assert(emptyCloser.pattern === 'empty', 'Empty text has empty closer pattern');
}

section('analyze.js - Handles post with no edits');

{
  const result = analyzeEdits(null);
  assert(result.totalEdits === 0, 'Null edits returns 0 total');
  assert(result.patterns.length === 0, 'Null edits returns empty patterns');

  const result2 = analyzeEdits([]);
  assert(result2.totalEdits === 0, 'Empty edits array returns 0 total');
  assert(result2.patterns.length === 0, 'Empty edits array returns empty patterns');

  const result3 = analyzeEdits(undefined);
  assert(result3.totalEdits === 0, 'Undefined edits returns 0 total');
}

section('analyze.js - Full analyzeEntry integration');

{
  const entry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'Friday.\n\nBuilt a new automation today. Client loved it.\n\nKeep moving...',
    edits: [
      { type: 'word_swap', draft: 'created', final: 'built', reason: 'more direct' },
    ],
  });

  const analysis = analyzeEntry(entry);
  assert(analysis !== null, 'analyzeEntry returns non-null for valid entry');
  assert(analysis.structure.paragraphCount === 3, `3 paragraphs detected (got ${analysis.structure.paragraphCount})`);
  assert(analysis.opener.pattern === 'single-word-day', `Opener is single-word-day (got ${analysis.opener.pattern})`);
  assert(analysis.closer.pattern === 'ellipsis-casual', `Closer is ellipsis-casual (got ${analysis.closer.pattern})`);
  assert(analysis.editSignals.totalEdits === 1, 'Edit signals count is 1');
  assert(typeof analysis.analyzedAt === 'string', 'analyzedAt timestamp is present');

  // Null text
  const nullEntry = createEntryFromInput({
    platform: PLATFORMS[0],
    date: '2026-03-06',
    text: 'placeholder',
  });
  nullEntry.published.text = '';
  const nullAnalysis = analyzeEntry(nullEntry);
  assert(nullAnalysis === null, 'analyzeEntry returns null for empty text');
}

// ============================================================
// PROFILE.JS TESTS
// ============================================================

function makeAnalyzedEntry(overrides = {}) {
  const entry = createEntryFromInput({
    platform: overrides.platform || PLATFORMS[0],
    date: overrides.date || '2026-03-06',
    text: overrides.text || 'Friday.\n\nBuilt a new feature. Client liked it. We shipped it fast.\n\nKeep going...',
    edits: overrides.edits || [
      { type: 'word_swap', draft: 'created', final: 'built', reason: 'more casual/direct' },
    ],
  });
  entry.engagement = overrides.engagement || null;
  entry.analysis = analyzeEntry(entry);
  return entry;
}

section('profile.js - Builds profile from 1 post');

{
  const entries = [makeAnalyzedEntry()];
  const profile = buildProfile(entries);

  assert(profile !== null, 'Profile is built from 1 post');
  assert(profile.postCount === 1, 'Post count is 1');
  assert(profile.schemaVersion === 1, 'Schema version is 1');
  assert(typeof profile.updatedAt === 'string', 'updatedAt is set');
  assert(profile.structure.paragraphCount.samples === 1, 'Structure has 1 sample');
  assert(Object.keys(profile.openers.patterns).length > 0, 'Opener patterns populated');
  assert(Object.keys(profile.closers.patterns).length > 0, 'Closer patterns populated');
}

section('profile.js - Builds profile from 3 posts (checks aggregation)');

{
  const entries = [
    makeAnalyzedEntry({ date: '2026-03-06', text: 'Monday.\n\nFirst post content here. Two sentences.\n\nDone.' }),
    makeAnalyzedEntry({ date: '2026-03-07', text: 'What if we tried this?\n\nSecond post with more content. Testing aggregation.\n\nThoughts...' }),
    makeAnalyzedEntry({ date: '2026-03-08', text: '3 projects shipped.\n\nThird post about results. Everything worked.\n\nNext steps coming.' }),
  ];

  const profile = buildProfile(entries);

  assert(profile.postCount === 3, `Post count is 3 (got ${profile.postCount})`);
  assert(profile.structure.paragraphCount.samples === 3, 'Structure aggregates 3 samples');
  assert(profile.structure.paragraphCount.mean > 0, 'Mean paragraph count > 0');
  assert(typeof profile.structure.sentenceLength.mean === 'number', 'Sentence length mean is a number');
  assert(typeof profile.structure.totalWords.median === 'number', 'Total words median is a number');

  // Check opener pattern aggregation
  const openerPatternCount = Object.values(profile.openers.patterns).reduce((sum, p) => sum + p.count, 0);
  assert(openerPatternCount === 3, `3 opener patterns total (got ${openerPatternCount})`);
}

section('profile.js - Confidence scoring');

{
  assert(confidence(1) === 'low', '1 obs = low');
  assert(confidence(2) === 'low', '2 obs = low');
  assert(confidence(3) === 'medium', '3 obs = medium');
  assert(confidence(5) === 'medium', '5 obs = medium');
  assert(confidence(6) === 'high', '6 obs = high');
  assert(confidence(9) === 'high', '9 obs = high');
  assert(confidence(10) === 'proven', '10 obs = proven');
  assert(confidence(15) === 'proven', '15 obs = proven');
  assert(confidence(0) === 'low', '0 obs = low');
}

section('profile.js - Word swap dictionary accumulates correctly');

{
  const entries = [
    makeAnalyzedEntry({
      date: '2026-03-06',
      edits: [
        { type: 'word_swap', draft: 'build', final: 'make', reason: 'casual' },
        { type: 'word_swap', draft: 'create', final: 'do', reason: 'direct' },
      ],
    }),
    makeAnalyzedEntry({
      date: '2026-03-07',
      edits: [
        { type: 'word_swap', draft: 'build', final: 'make', reason: 'casual' },
      ],
    }),
    makeAnalyzedEntry({
      date: '2026-03-08',
      edits: [
        { type: 'word_swap', draft: 'build', final: 'make', reason: 'casual' },
        { type: 'cut', description: 'Removed extra paragraph' },
      ],
    }),
  ];

  const profile = buildProfile(entries);

  assert(profile.wordSwaps.length >= 2, `Word swaps has >= 2 entries (got ${profile.wordSwaps.length})`);

  const buildMake = profile.wordSwaps.find(s => s.from === 'build' && s.to === 'make');
  assert(buildMake !== undefined, '"build -> make" swap exists in profile');
  assert(buildMake.count === 3, `"build -> make" count is 3 (got ${buildMake ? buildMake.count : 'n/a'})`);

  const createDo = profile.wordSwaps.find(s => s.from === 'create' && s.to === 'do');
  assert(createDo !== undefined, '"create -> do" swap exists');
  assert(createDo.count === 1, `"create -> do" count is 1 (got ${createDo ? createDo.count : 'n/a'})`);

  // Sorted by count descending
  assert(profile.wordSwaps[0].count >= profile.wordSwaps[1].count, 'Word swaps sorted by count desc');
}

section('profile.js - Edit pattern frequencies compound across posts');

{
  const entries = [
    makeAnalyzedEntry({
      date: '2026-03-06',
      edits: [
        { type: 'word_swap', draft: 'a', final: 'b', reason: 'more casual' },
        { type: 'cut', description: 'over-analysis removed', reason: 'over-analysis' },
      ],
    }),
    makeAnalyzedEntry({
      date: '2026-03-07',
      edits: [
        { type: 'word_swap', draft: 'c', final: 'd', reason: 'more direct' },
        { type: 'reorder', description: 'Moved intro before details' },
      ],
    }),
    makeAnalyzedEntry({
      date: '2026-03-08',
      edits: [
        { type: 'word_swap', draft: 'e', final: 'f', reason: 'casual and simple' },
        { type: 'cut', description: 'cut the over-detailed list', reason: 'over-detailed list' },
      ],
    }),
  ];

  const profile = buildProfile(entries);

  // prefers-casual-verbs should appear from multiple posts
  const casualVerbs = profile.editPatterns['prefers-casual-verbs'];
  assert(casualVerbs !== undefined, 'prefers-casual-verbs pattern exists');
  assert(casualVerbs.count >= 2, `prefers-casual-verbs count >= 2 (got ${casualVerbs ? casualVerbs.count : 0})`);

  // reorders-for-flow from the reorder edit
  const reorders = profile.editPatterns['reorders-for-flow'];
  assert(reorders !== undefined, 'reorders-for-flow pattern exists');
  assert(reorders.count === 1, `reorders-for-flow count is 1 (got ${reorders ? reorders.count : 0})`);

  // Each pattern has a confidence field
  if (casualVerbs) {
    assert(typeof casualVerbs.confidence === 'string', 'Edit pattern has confidence field');
  }
}

section('profile.js - Profile saves to correct location');

{
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'style-learner-test-'));
  const profilePath = path.join(tmpDir, 'profile.json');
  const historyDir = path.join(tmpDir, 'history');

  const entries = [makeAnalyzedEntry()];
  const profile = buildProfile(entries);

  const result = saveProfile(profile, { profilePath, historyDir });

  assert(fs.existsSync(result.profilePath), 'Profile file created');
  assert(fs.existsSync(result.historyPath), 'History snapshot created');

  const savedProfile = JSON.parse(fs.readFileSync(result.profilePath, 'utf-8'));
  assert(savedProfile.postCount === 1, 'Saved profile has correct postCount');
  assert(savedProfile.schemaVersion === 1, 'Saved profile has correct schemaVersion');

  // Clean up
  fs.rmSync(tmpDir, { recursive: true });
}

section('profile.js - Profile snapshot saved to profile-history/');

{
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'style-learner-history-'));
  const profilePath = path.join(tmpDir, 'profile.json');
  const historyDir = path.join(tmpDir, 'profile-history');

  const entries = [makeAnalyzedEntry()];
  const profile = buildProfile(entries);

  const result = saveProfile(profile, { profilePath, historyDir });

  // History file should have today's date in the name
  const today = new Date().toISOString().slice(0, 10);
  const expectedHistoryFile = `profile-${today}.json`;
  assert(
    result.historyPath.endsWith(expectedHistoryFile),
    `History file named with today's date (${expectedHistoryFile})`
  );

  const historyContent = JSON.parse(fs.readFileSync(result.historyPath, 'utf-8'));
  assert(historyContent.postCount === profile.postCount, 'History snapshot matches profile content');

  // Clean up
  fs.rmSync(tmpDir, { recursive: true });
}

section('profile.js - Handles no analyzed entries');

{
  const entries = [{ published: { text: 'test' }, edits: [] }]; // no analysis field
  const profile = buildProfile(entries);
  assert(profile === null, 'Returns null when no entries have analysis');
}

section('profile.js - statSummary helper');

{
  const stats = statSummary([1, 2, 3, 4, 5]);
  assert(stats.mean === 3, `Mean of [1,2,3,4,5] is 3 (got ${stats.mean})`);
  assert(stats.median === 3, `Median of [1,2,3,4,5] is 3 (got ${stats.median})`);
  assert(stats.min === 1, `Min is 1 (got ${stats.min})`);
  assert(stats.max === 5, `Max is 5 (got ${stats.max})`);
  assert(stats.samples === 5, `Samples is 5 (got ${stats.samples})`);

  const empty = statSummary([]);
  assert(empty.mean === 0, 'Empty array mean is 0');
  assert(empty.samples === 0, 'Empty array samples is 0');
}

// ============================================================
// SUMMARY
// ============================================================

console.log('\n===========================');
console.log(`Phase 1 Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
console.log('===========================\n');

process.exit(failed > 0 ? 1 : 0);
