const { defaults } = require("jest-config");

module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`
  },
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  unmockedModulePathPatterns: [`node_modules/react/`, `node_modules/enzyme/`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
  globals: {
    __PATH_PREFIX__: ``
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  automock: false,
  setupFiles: ["<rootDir>/src/setupTests.js"]
};
