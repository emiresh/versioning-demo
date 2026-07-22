const appVersion = process.env.APP_VERSION || "0.0.0-local";
const gitTag = process.env.GIT_TAG || "no-tag";

const buildInfo = {
  strategy: "git-tags",
  version: appVersion,
  gitTag,
  builtAtUtc: new Date().toISOString()
};

console.log(JSON.stringify(buildInfo, null, 2));
