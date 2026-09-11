#!/bin/sh
set -eu
cd "$(dirname "$0")/.."

if command -v node >/dev/null 2>&1; then
  node_bin="$(command -v node)"
else
  node_bin="${HOME}/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
fi

if [ ! -x "$node_bin" ]; then
  echo "Node.js is unavailable. Install Node.js 22.12 or newer, then try again." >&2
  exit 1
fi

"$node_bin" node_modules/astro/bin/astro.mjs build
echo "Build complete. Refresh your localhost browser tab to see the changes."
