const baseConfig = require('../../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/projects/ngneat/guard-clauses/tsconfig.spec.json',
    },
  },
};
