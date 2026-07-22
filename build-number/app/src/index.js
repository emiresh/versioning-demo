const appVersion = process.env.APP_VERSION || "1.0.0-local";
const runNumber = process.env.RUN_NUMBER || "0";
const gitSha = process.env.GIT_SHA || "unknown";
const buildVersion = process.env.BUILD_VERSION || `${appVersion}-${runNumber}+${gitSha}`;

const buildInfo = {
  strategy: "build-number",
  appVersion,
  runNumber,
  gitSha,
  buildVersion,
  builtAtUtc: new Date().toISOString()
};

console.log(JSON.stringify(buildInfo, null, 2));
