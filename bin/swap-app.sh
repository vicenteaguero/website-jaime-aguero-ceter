#!/usr/bin/env bash
# Swap the active app: rename apps/site → apps/site_<suffix> and create new apps/<new-name>.
# Usage: bin/swap-app.sh <new-app-name> [archive-suffix]
# Example: bin/swap-app.sh ceter-v2 v1
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NEW_NAME="${1:-}"
SUFFIX="${2:-archived-$(date +%Y%m%d)}"

if [ -z "$NEW_NAME" ]; then
  echo "Usage: $0 <new-app-name> [archive-suffix]"
  exit 1
fi

cd "$ROOT_DIR/apps"

if [ ! -d site ]; then
  echo "apps/site does not exist; nothing to swap"
  exit 1
fi

ARCHIVE_NAME="site_${SUFFIX}"
mv site "$ARCHIVE_NAME"
mkdir "$NEW_NAME"

echo "Archived previous active app → apps/${ARCHIVE_NAME}"
echo "Created empty apps/${NEW_NAME}"
echo
echo "Next steps:"
echo "  1. Scaffold the new app inside apps/${NEW_NAME}"
echo "  2. In Vercel project settings update Root Directory → apps/${NEW_NAME}"
echo "  3. (Optional) symlink apps/site → apps/${NEW_NAME} if you want to keep that name:"
echo "       ln -s ${NEW_NAME} site"
