#!/bin/zsh
# Post a short GEO run summary to Discord after the weekly cron completes.
# Usage: scripts/geo-discord-summary.sh [YYYY-MM-DD]
#   Defaults to today's date if no argument given.
#   Set DRY_RUN=1 to print the message without sending.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE="${1:-$(date +%Y-%m-%d)}"
JSON_PATH="$REPO/docs/data/geo-results/${DATE}.json"
DISCORD_CHANNEL="1471656725336817779"

export PATH="/Users/whatever/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"

if [[ ! -f "$JSON_PATH" ]]; then
  echo "No GEO results found for $DATE at $JSON_PATH"
  exit 1
fi

# Extract summary fields from the JSON report using Node one-liner
SUMMARY=$(node -e "
  const d = require('$JSON_PATH');
  const ts = d.timestamp;
  const score = d.totalScore;
  const providers = d.providers.join(', ');
  const results = d.results || [];
  const links = results.filter(r => r.autoScore === 'L').length;
  const mentions = results.filter(r => r.autoScore === 'M').length;
  const errors = results.filter(r => r.error);
  const errSummary = errors.length
    ? errors.map(e => e.provider + ': ' + (e.error || '').slice(0, 80)).filter((v,i,a) => a.indexOf(v) === i).join('; ')
    : '';

  let msg = '**GEO Weekly Report — ${DATE}**\n';
  msg += '> Timestamp: ' + ts + '\n';
  msg += '> Providers: ' + providers + '\n';
  msg += '> Overall score: **' + score + '**\n';
  if (links > 0 || mentions > 0) {
    msg += '> Direct links: ' + links + ' | Mentions: ' + mentions + '\n';
  }
  if (errSummary) {
    msg += '> Errors: ' + errSummary + '\n';
  }
  msg += '> Report: docs/data/geo-results/${DATE}.json';

  process.stdout.write(msg);
")

if [[ "${DRY_RUN:-}" == "1" ]]; then
  echo "[dry-run] Would send to Discord channel $DISCORD_CHANNEL:"
  echo "$SUMMARY"
  exit 0
fi

openclaw message send \
  --channel discord \
  --target "channel:${DISCORD_CHANNEL}" \
  -m "$SUMMARY"

echo "Discord summary sent for $DATE"
