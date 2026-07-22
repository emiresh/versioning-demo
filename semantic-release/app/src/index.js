const appVersion = process.env.APP_VERSION || "development";

const buildInfo = {
  strategy: "semantic-release",
  version: appVersion,
  builtAtUtc: new Date().toISOString()
};

console.log(JSON.stringify(buildInfo, null, 2));
