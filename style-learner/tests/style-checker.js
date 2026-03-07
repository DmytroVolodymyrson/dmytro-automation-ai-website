#!/usr/bin/env node
'use strict';

/**
 * Style checker for content.
 * Enforces configurable writing rules.
 *
 * Usage: node tests/style-checker.js "your text here"
 *        echo "text" | node tests/style-checker.js --stdin
 */

const RULES = [
  {
    id: 'no-em-dash',
    name: 'No em-dashes (\u2014)',
    description: 'Em-dashes can look AI-generated. Use commas, periods, or rephrase.',
    test: (text) => {
      const violations = [];
      const regex = /\u2014/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = Math.max(0, match.index - 20);
        const end = Math.min(text.length, match.index + 21);
        const context = text.slice(start, end);
        violations.push({
          position: match.index,
          context: `...${context}...`,
          suggestion: 'Replace with comma, period, or rephrase the sentence',
        });
      }
      return violations;
    },
  },
  {
    id: 'no-yo',
    name: 'No letter \u0451 (use \u0435 instead)',
    description: 'Always use \u0435, never \u0451. Replace every occurrence.',
    test: (text) => {
      const violations = [];
      const regex = /[\u0451\u0401]/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = Math.max(0, match.index - 20);
        const end = Math.min(text.length, match.index + 21);
        const context = text.slice(start, end);
        const replacement = match[0] === '\u0451' ? '\u0435' : '\u0415';
        violations.push({
          position: match.index,
          context: `...${context}...`,
          suggestion: `Replace "${match[0]}" with "${replacement}"`,
        });
      }
      return violations;
    },
  },
  {
    id: 'no-en-dash',
    name: 'No en-dashes (\u2013) used as em-dashes',
    description: 'En-dashes can also look AI-generated when used as sentence punctuation.',
    test: (text) => {
      const violations = [];
      const regex = / \u2013 /g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = Math.max(0, match.index - 20);
        const end = Math.min(text.length, match.index + 21);
        const context = text.slice(start, end);
        violations.push({
          position: match.index,
          context: `...${context}...`,
          suggestion: 'Replace with comma, period, or rephrase',
        });
      }
      return violations;
    },
  },
  {
    id: 'no-ai-buzzwords',
    name: 'No AI buzzwords',
    description: 'Avoid words that sound corporate/AI-generated.',
    test: (text) => {
      const violations = [];
      const buzzwords = [
        'revolutionary',
        'game-changing',
        'cutting-edge',
        'groundbreaking',
        'disruptive',
        'synergy',
        'paradigm',
        'leverage',
      ];
      const lower = text.toLowerCase();
      for (const word of buzzwords) {
        let idx = lower.indexOf(word);
        while (idx !== -1) {
          const start = Math.max(0, idx - 15);
          const end = Math.min(text.length, idx + word.length + 15);
          const context = text.slice(start, end);
          violations.push({
            position: idx,
            context: `...${context}...`,
            suggestion: `"${word}" sounds corporate/AI. Use simpler language.`,
          });
          idx = lower.indexOf(word, idx + 1);
        }
      }
      return violations;
    },
  },
];

function checkText(text) {
  const results = {
    passed: true,
    totalViolations: 0,
    rules: [],
  };

  for (const rule of RULES) {
    const violations = rule.test(text);
    const ruleResult = {
      id: rule.id,
      name: rule.name,
      passed: violations.length === 0,
      violations,
    };
    results.rules.push(ruleResult);
    if (violations.length > 0) {
      results.passed = false;
      results.totalViolations += violations.length;
    }
  }

  return results;
}

function formatResults(results) {
  const lines = [];

  if (results.passed) {
    lines.push('PASS - All style checks passed.');
  } else {
    lines.push(`FAIL - ${results.totalViolations} violation(s) found.\n`);
  }

  for (const rule of results.rules) {
    if (!rule.passed) {
      lines.push(`  [FAIL] ${rule.name}`);
      for (const v of rule.violations) {
        lines.push(`    Position ${v.position}: ${v.context}`);
        lines.push(`    -> ${v.suggestion}`);
      }
      lines.push('');
    }
  }

  return lines.join('\n');
}

// CLI mode
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log('Usage: node style-checker.js "your text here"');
    console.log('       echo "text" | node style-checker.js --stdin');
    console.log('       node style-checker.js --file path/to/file.txt');
    process.exit(0);
  }

  let text;

  if (args.includes('--stdin')) {
    const fs = require('fs');
    text = fs.readFileSync('/dev/stdin', 'utf8');
  } else if (args.includes('--file')) {
    const fs = require('fs');
    const fileIdx = args.indexOf('--file');
    const filePath = args[fileIdx + 1];
    if (!filePath) {
      console.error('Error: --file requires a path argument');
      process.exit(1);
    }
    text = fs.readFileSync(filePath, 'utf8');
  } else {
    text = args.join(' ');
  }

  const results = checkText(text);
  console.log(formatResults(results));
  process.exit(results.passed ? 0 : 1);
}

module.exports = { checkText, formatResults, RULES };
