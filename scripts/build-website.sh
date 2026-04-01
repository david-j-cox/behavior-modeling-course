#!/usr/bin/env bash
#
# build-website.sh
#
# Validates content, then builds the Next.js companion website.
# Run from the repository root: ./scripts/build-website.sh
#

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "=== Validating content ==="
cd "$ROOT"
npx tsx scripts/validate-metadata.ts

echo ""
echo "=== Building website ==="
cd "$ROOT/website"
npm run build

echo ""
echo "=== Build complete ==="
echo "To start the production server: cd website && npm start"
echo "To deploy: push to GitHub and connect to Vercel"
