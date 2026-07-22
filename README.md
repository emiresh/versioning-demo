# Versioning Demo

This repository demonstrates three practical application versioning strategies using GitHub Actions.

## What You Will Learn

1. Git tags for release-based deployments
2. Build-number versioning for unique CI artifacts
3. semantic-release for automated releases from commit messages

## Repository Structure

```text
versioning-demo/
├── git-tags/
│   ├── app/
│   └── .github/workflows/
├── build-number/
│   ├── app/
│   └── .github/workflows/
├── semantic-release/
│   ├── app/
│   └── .github/workflows/
└── docs/
```

## Demos

### 1. Git Tags

- Path: `git-tags/`
- Trigger: push tag `v*.*.*`
- Version source: Git tag name (example: `v1.2.0`)
- Learn more: `git-tags/README.md`

### 2. Build Number

- Path: `build-number/`
- Trigger: every push/PR
- Version source: base version + pipeline run number + short SHA
- Example output: `1.0.0-456+abc1234`
- Learn more: `build-number/README.md`

### 3. semantic-release

- Path: `semantic-release/`
- Trigger: merge/push to `main`
- Version source: Conventional Commit messages
- Outputs: tag, GitHub Release, changelog update
- Learn more: `semantic-release/README.md`

## Quick Start

1. Open each project folder and read its README.
2. Push to a test repository with GitHub Actions enabled.
3. Trigger each workflow using the steps documented in each project.

## Suggested Learning Order

1. `git-tags` (fundamentals)
2. `build-number` (common CI pattern)
3. `semantic-release` (advanced automation)
