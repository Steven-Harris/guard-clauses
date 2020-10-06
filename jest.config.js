module.exports = {
  moduleNameMapper: {
    '@ngneat/(.*)': '<rootDir>/projects/ngneat/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
