#!/bin/zsh
# Post a short GEO run summary to Discord after the weekly cron completes.
# Usage: scripts/geo-discord-summary.sh [YYYY-MM-DD]
#        scripts/geo-discord-summary.sh --weekly [YYYY-MM-DD]
#   Defaults to today's date if no date argument given.
#   --weekly reads from docs/data/geo-weekly/ with weekly- prefix.
#   Set DRY_RUN=1 to print the message without sending.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
DISCORD_CHANNEL="1471656725336817779"

export PATH="/Users/whatever/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"

# Parse args: optional --weekly flag then optional date
WEEKLY=0
DATE=""
for arg in "$@"; do
  if [[ "$arg" == "--weekly" ]]; then
    WEEKLY=1
  elif [[ -z "$DATE" ]]; then
    DATE="$arg"
  fi
done
DATE="${DATE:-$(date +%Y-%m-%d)}"

if [[ "$WEEKLY" -eq 1 ]]; then
  JSON_PATH="$REPO/docs/data/geo-weekly/weekly-${DATE}.json"
  REPORT_PATH="$REPO/docs/data/geo-weekly/weekly-${DATE}-report.md"
  LABEL="GEO Weekly Report"
else
  JSON_PATH="$REPO/docs/data/geo-results/${DATE}.json"
  REPORT_PATH=""
  LABEL="GEO Report"
fi

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
  const absent = results.filter(r => r.autoScore === '-' && !r.error).length;
  const errors = results.filter(r => r.error);
  const errSummary = errors.length
    ? errors.map(e => e.provider + ': ' + (e.error || '').slice(0, 80)).filter((v,i,a) => a.indexOf(v) === i).join('; ')
    : '';

  let msg = '**${LABEL} -- ${DATE}**\n';
  msg += '> Timestamp: ' + ts + '\n';
  msg += '> Providers: ' + providers + '\n';
  msg += '> Checked: ' + results.length + ' prompts\n';
  msg += '> Overall score: **' + score + '**\n';
  if (links > 0 || mentions > 0) {
    msg += '> Direct links: ' + links + ' | Mentions: ' + mentions + ' | Absent: ' + absent + '\n';
  }
  if (errSummary) {
    msg += '> Errors: ' + errSummary + '\n';
  }
  msg += '> Report: ${JSON_PATH#$REPO/}';

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
