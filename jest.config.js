module.exports = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false
};