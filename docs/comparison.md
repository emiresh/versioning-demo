# Comparison

This document compares the three versioning approaches implemented in this repository.

## Quick Comparison Table

| Approach | Version Source | Release Trigger | Automation Level | Best Use Case |
| --- | --- | --- | --- | --- |
| Git Tags | Manual tag (`v1.2.3`) | Tag push | Medium | Controlled manual releases |
| Build Number | CI run number + SHA | Every build | High | Frequent deployments with traceability |
| semantic-release | Conventional commits | Push to main | Very high | Fully automated release pipelines |

## Pros and Cons

### Git Tags

Pros:

- Very explicit and easy to reason about.
- Works in any language/stack.

Cons:

- Requires manual release discipline.
- Version bumps are not automatic.

### Build Number

Pros:

- Every artifact is unique.
- Excellent CI/CD traceability.

Cons:

- Versions can be less human-friendly.
- Does not communicate API compatibility by itself.

### semantic-release

Pros:

- Eliminates manual release steps.
- Auto-generates tags and release notes.

Cons:

- Requires strict commit message conventions.
- Setup is more advanced than other approaches.

## Recommendation by Team Maturity

1. Beginner teams: start with Git tags.
2. Growing CI/CD teams: move to build numbers.
3. Advanced teams with commit discipline: adopt semantic-release.
