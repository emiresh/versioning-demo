# Build Number Versioning Demo

This project shows how CI pipelines generate unique versions for every build.

## Goal

Learn a common DevOps pattern:

```text
Commit -> Pipeline -> Build number generated -> Artifact/Image tagged
```

Example versions:

- `1.0.0-456`
- `1.0.0+20260722.15`
- `1.0.0-456+abc1234`

## Project Structure

```text
build-number/
├── app/
│   ├── package.json
│   └── src/index.js
└── .github/workflows/build-number.yml
```

## Skills You Practice

- CI build number usage (`github.run_number`)
- Git short SHA usage
- Artifact version stamping
- Docker/image tag conventions

## Version Formula Used In Demo

```text
<baseVersion>-<runNumber>+<shortSha>
```

Example:

```text
1.0.0-23+9af41b2
```

## Local Demo Commands

```bash
cd build-number

# Simulate what CI does
BASE_VERSION=$(node -p "require('./app/package.json').version")
RUN_NUMBER=456
SHORT_SHA=$(git rev-parse --short HEAD)
BUILD_VERSION="${BASE_VERSION}-${RUN_NUMBER}+${SHORT_SHA}"

echo "$BUILD_VERSION"
APP_VERSION="$BUILD_VERSION" node app/src/index.js
```

## How Workflow Works

1. Trigger on push/PR/manual.
2. Read base app version from `package.json`.
3. Append CI run number and commit SHA.
4. Build artifact with the computed version.
5. Upload artifact for traceable deployments.

## Why Teams Use It

- Every build is unique.
- Easy to trace artifact to exact CI run and commit.
- Works even when release tags are not created.
