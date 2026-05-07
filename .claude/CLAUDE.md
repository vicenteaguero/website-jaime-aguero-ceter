# Project conventions

## Code language

- File names, variable names, function names, comments → **English**.
- User-facing copy / content / URLs → **Spanish**.

## Commit conventions

Strict rules:

- **Conventional Commits**: `<type>(<scope>): <emoji> <subject>`
- **One commit per file** (one `git add <file>` followed by one `git commit`).
- **One-liner subject only** — no commit body, no description.
- **No co-authors**, no `Co-Authored-By` lines.
- **No `--amend`** unless explicitly requested.
- **No `--no-verify`**.

Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`.

Common scopes: `root`, `site`, `legacy`, `bin`, `docs`, `ci`, `api`, `content`, `pages`, `ui`, `layout`, `seo`, `chat`, `whatsapp`, `hooks`, `lib`, `styles`, `public`, `images`, `etc`, `claude`.

Emoji per type (gitmoji-flavored):

| Type | Emoji |
|---|---|
| feat | ✨ |
| fix | 🐛 |
| chore | 🔧 |
| docs | 📝 |
| style | 💄 |
| refactor | ♻️ |
| perf | ⚡ |
| test | ✅ |
| build | 🏗️ |
| ci | 👷 |

Examples:

- `feat(whatsapp): ✨ add WhatsAppFab component`
- `chore(site): 🔧 add vite config`
- `docs(docs): 📝 add deploy guide`
- `chore(legacy): 📦 archive original index.html`
- `feat(seo): 🗺️ add sitemap`
