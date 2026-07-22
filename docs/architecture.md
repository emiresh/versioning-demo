# Repository Architecture

This repository is intentionally split into three isolated demos so you can learn one versioning strategy at a time.

## Top Level Layout

```text
versioning-demo/
├── git-tags/
├── build-number/
├── semantic-release/
└── docs/
```

## Isolation Strategy

Each demo contains its own:

- App code (`app/`)
- Versioning logic
- GitHub Actions workflow (`.github/workflows/`)
- Demo-specific README

This avoids coupling and keeps every approach easy to understand.

## Execution Model

### Git Tags Demo

- Trigger: tag push (`v*.*.*`)
- Version source: tag name
- Best for: release-driven teams

### Build Number Demo

- Trigger: every pipeline run
- Version source: base app version + run metadata
- Best for: continuous deployment and traceability

### semantic-release Demo

- Trigger: merge/push to main
- Version source: commit history
- Best for: automated release management

## Why This Architecture Works for Learning

- No hidden shared scripts.
- You can run or modify one demo without breaking others.
- Side-by-side comparison is straightforward.
