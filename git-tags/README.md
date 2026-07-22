# Git Tags Versioning Demo

This project shows how to create releases by pushing Git tags.

## Goal

Learn the classic release flow:

```text
Commit -> Merge to main -> Create tag v1.0.0 -> Pipeline -> Build -> Deploy
```

## Project Structure

```text
git-tags/
├── app/
│   ├── package.json
│   └── src/index.js
└── .github/workflows/release-on-tag.yml
```

## Skills You Practice

- `git tag`
- `git tag -a`
- `git describe --tags`
- GitHub Actions trigger on tags
- Release artifact creation

## Annotated vs Lightweight Tags

- Lightweight tag: points directly to a commit, no metadata
	- Example: `git tag v1.0.0`
- Annotated tag: stored as full object with message/author/date
	- Example: `git tag -a v1.0.0 -m "Release 1.0.0"`

Use annotated tags for real releases.

## Local Demo Commands

```bash
cd git-tags

# Create some code changes and commit
git add .
git commit -m "feat: add release metadata endpoint"

# Create an annotated release tag
git tag -a v1.0.0 -m "Release 1.0.0"

# Show tags and latest tag
git tag --list
git describe --tags --abbrev=0

# Push commit and tag
git push origin main
git push origin v1.0.0
```

## How Workflow Works

When a tag like `v1.0.0` is pushed:

1. Workflow starts because of tag trigger.
2. App version is derived from tag name.
3. Build metadata file is generated.
4. Build artifact is uploaded.

## Deploy Strategy (Typical)

Most teams map tags to environments:

- `v1.x.x` -> staging
- `v2.x.x` -> production

You can add deployment steps in the same workflow after build.
