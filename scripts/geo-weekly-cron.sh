#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$REPO/runtime/logs"
LOCK_DIR="$REPO/runtime/locks/geo-weekly.lock"
STAMP=$(date '+%Y-%m-%d %H:%M:%S %Z')
export PATH="/Users/whatever/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"

mkdir -p "$LOG_DIR" "$(dirname "$LOCK_DIR")"
exec >> "$LOG_DIR/geo-weekly-cron.log" 2>&1

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  echo "[$STAMP] Weekly GEO run skipped because another run is already active"
  exit 0
fi
trap 'rmdir "$LOCK_DIR"' EXIT

echo "[$STAMP] Starting weekly GEO run"

cd "$REPO"

# Keep local main in sync before generating new data
/usr/bin/git checkout main
/usr/bin/git pull --rebase origin main

# Run the full weekly GEO baseline
npm run geo

# Commit only if result files changed
/usr/bin/git add docs/data/geo-results/
if ! /usr/bin/git diff --cached --quiet; then
  /usr/bin/git commit -m "data: geo run $(date +%Y-%m-%d)"
  /usr/bin/git push origin main
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] GEO run committed and pushed"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] No GEO result changes to commit"
fi

# Send Discord summary (best-effort; don't fail the cron on notification error)
"$SCRIPT_DIR/geo-discord-summary.sh" "$(date +%Y-%m-%d)" || \
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Discord summary failed (non-fatal)"

echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Weekly GEO run finished"
