// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
    '!<rootDir>/src/index.js'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '<rootDir>/src/App.js',
    '<rootDir>/src/index.js',
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text',
    'html'
  ],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    'global': {
      'statements': 89.15,
      'branches': 80.81,
      'functions': 83,
      'lines': 89.10
    }
  },

  
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'mjs'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    'wpe-lightning$': '@lightningjs/core',
    '^src(.*)': '<rootDir>/src$1',
    '^test(.*)': '<rootDir>/test$1',
    '^assets(.*)': '<rootDir>/assets$1'
  },

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['jest-webgl-canvas-mock'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: 'https://jestjs.io/',
    userAgent: 'Agent/007',
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/utils/",
    "cypress/"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[m|t]?js$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(wpe-lightning(-sdk)|@lightning\/ui)?)'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

};
