#!/usr/bin/env bash
# Compila el sitio y publica dist/ en la rama gh-pages (GitHub Pages).
set -euo pipefail
cd "$(dirname "$0")/.."

npx astro check
npm run build

TMP="$(mktemp -d)"
trap 'git worktree remove --force "$TMP" 2>/dev/null || true' EXIT

if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git fetch -q origin gh-pages
  git worktree add -q "$TMP" origin/gh-pages
  git -C "$TMP" checkout -q -B gh-pages
else
  git worktree add -q --detach "$TMP"
  git -C "$TMP" checkout -q --orphan gh-pages
fi

git -C "$TMP" rm -rq . 2>/dev/null || true
cp -R dist/. "$TMP"/
git -C "$TMP" add -A
git -C "$TMP" commit -q -m "deploy: $(git rev-parse --short HEAD)" || { echo "Sin cambios que publicar"; exit 0; }
git -C "$TMP" push -q origin gh-pages
echo "Publicado: https://amashpit.github.io/portafolio/"
