# Semantic Versioning (SemVer)

Semantic Versioning uses this format:

```text
MAJOR.MINOR.PATCH
```

Example: `2.5.13`

## Version Meaning

### MAJOR

Increment when you make incompatible API changes.

Example:

- `1.9.0` -> `2.0.0`

### MINOR

Increment when you add backward-compatible functionality.

Example:

- `2.3.4` -> `2.4.0`

### PATCH

Increment when you make backward-compatible bug fixes.

Example:

- `2.4.0` -> `2.4.1`

## Pre-release and Build Metadata

You can extend versions:

- Pre-release: `1.0.0-rc.1`
- Build metadata: `1.0.0+20260722.15`

## Mapping Conventional Commits to SemVer

- `fix:` -> PATCH
- `feat:` -> MINOR
- `BREAKING CHANGE:` or `feat!:` -> MAJOR

## Practical Examples

Current version: `1.4.2`

1. Commit: `fix: correct discount rounding` -> next: `1.4.3`
2. Commit: `feat: add wishlist support` -> next: `1.5.0`
3. Commit: `feat!: remove v1 checkout endpoint` -> next: `2.0.0`

## Why SemVer Matters

- Consumers can estimate upgrade risk.
- Teams can automate release decisions.
- Dependency tools can select compatible versions.
