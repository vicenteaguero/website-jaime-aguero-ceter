#!/usr/bin/env bash
# Manual deploy via Vercel CLI (push to main = auto-deploy is preferred).
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="${APP_DIR:-apps/site}"
cd "$ROOT_DIR/$APP_DIR"

if ! command -v vercel >/dev/null 2>&1; then
  echo "vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

vercel deploy --prod "$@"
