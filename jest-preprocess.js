// module.exports = {
//   setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
// };
const babelOptions = {
    presets: ['babel-preset-react-app'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
