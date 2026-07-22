# semantic-release Demo

This project demonstrates automated releases using `semantic-release` and Conventional Commits.

## Goal

Learn a modern automation flow:

```text
Merge PR -> semantic-release -> Analyze commits -> Compute next version
-> Create tag -> Create GitHub release -> Update changelog
```

## Project Structure

```text
semantic-release/
├── app/
│   ├── package.json
│   ├── .releaserc.json
│   ├── CHANGELOG.md
│   └── src/index.js
└── .github/workflows/semantic-release.yml
```

## Skills You Practice

- Conventional Commits
- Semantic Versioning automation
- Release notes generation
- Tag and changelog automation

## Commit Message Rules

Common commit types:

- `fix:` -> patch release
- `feat:` -> minor release
- `feat!:` or `BREAKING CHANGE:` -> major release

Examples:

- `fix: correct tax total rounding`
- `feat: add order tracking endpoint`
- `feat!: remove legacy checkout API`

## Local Dry-Run (No Release)

```bash
cd semantic-release/app
npm install
npx semantic-release --dry-run
```

## How Workflow Works

1. PR validation job runs semantic-release in dry-run mode.
2. Push to `main` runs real release.
3. semantic-release computes next version from commits.
4. It creates tag and GitHub release notes.
5. It updates changelog and commits it back.

## Notes

- Repository must allow workflow write permissions for changelog commit.
- `GITHUB_TOKEN` is used automatically by GitHub Actions.
