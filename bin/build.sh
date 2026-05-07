#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="${APP_DIR:-apps/site}"
cd "$ROOT_DIR/$APP_DIR"
npm run build "$@"
