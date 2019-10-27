module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"]
};
const babelOptions = {
  presets: ["babel-preset-react-app"]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
