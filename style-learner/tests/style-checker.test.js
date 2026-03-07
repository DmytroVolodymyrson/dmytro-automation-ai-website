#!/usr/bin/env node
'use strict';

const { checkText } = require('./style-checker');
const sampleTexts = require('./sample-texts.json');

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

// --- Unit tests for individual rules ---

console.log('\n=== Em-dash rule ===');

assert(
  checkText('Hello, how are you').passed,
  'Clean text passes'
);

assert(
  !checkText('Hello \u2014 how are you').passed,
  'Em-dash detected'
);

assert(
  checkText('Hello - how are you').passed,
  'Regular hyphen is OK'
);

assert(
  !checkText('First \u2014 second \u2014 third').passed,
  'Multiple em-dashes detected'
);

assert(
  checkText('First \u2014 second \u2014 third').totalViolations === 2,
  'Counts multiple em-dashes correctly'
);

console.log('\n=== Yo (\u0451) rule ===');

assert(
  checkText('Все хорошо').passed,
  'Text without \u0451 passes'
);

assert(
  !checkText('Вс\u0451 хорошо').passed,
  '\u0451 detected'
);

assert(
  !checkText('\u0401Ж').passed,
  'Capital \u0401 detected'
);

console.log('\n=== En-dash as punctuation rule ===');

assert(
  checkText('Hello, world').passed,
  'No en-dash passes'
);

assert(
  !checkText('Hello \u2013 world').passed,
  'En-dash with spaces detected'
);

assert(
  checkText('2020-2025').passed,
  'Hyphen in ranges is OK'
);

console.log('\n=== AI buzzwords rule ===');

assert(
  checkText('We built a simple automation').passed,
  'Normal text passes'
);

assert(
  !checkText('This is a revolutionary solution').passed,
  'Buzzword "revolutionary" detected'
);

assert(
  !checkText('A groundbreaking approach to automation').passed,
  'Buzzword "groundbreaking" detected'
);

assert(
  checkText('We automated the process in 2 days').passed,
  'Practical language passes'
);

console.log('\n=== Combined violations ===');

assert(
  !checkText('This is revolutionary \u2014 and groundbreaking').passed,
  'Text with em-dash + buzzwords detected'
);

{
  const result = checkText('This is revolutionary \u2014 and groundbreaking');
  assert(
    result.totalViolations >= 3,
    `Multiple violations counted (got ${result.totalViolations})`
  );
}

console.log('\n=== Clean text passes all rules ===');

assert(
  checkText('Had a call with a client today. Showed him the automation. He liked it. We move forward.').passed,
  'Well-written post passes'
);

assert(
  checkText('Automated the lead collection process. Used to take 40 hours, now takes 15 minutes. Client is happy.').passed,
  'Short clean post passes'
);

// --- Sample texts from JSON ---

console.log('\n=== Sample texts benchmark ===');

for (const sample of sampleTexts) {
  const result = checkText(sample.text);
  const expectPass = sample.shouldPass;

  if (expectPass) {
    assert(result.passed, `[GOOD] "${sample.id}": ${sample.description}`);
  } else {
    assert(!result.passed, `[BAD]  "${sample.id}": ${sample.description}`);
    if (sample.expectedViolations) {
      for (const expectedRule of sample.expectedViolations) {
        const ruleResult = result.rules.find((r) => r.id === expectedRule);
        assert(
          ruleResult && !ruleResult.passed,
          `  -> Rule "${expectedRule}" triggered for "${sample.id}"`
        );
      }
    }
  }
}

// --- Summary ---

console.log('\n===========================');
console.log(`Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
console.log('===========================\n');

process.exit(failed > 0 ? 1 : 0);
