/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: false,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': '<rootDir>/test/__mocks__/styleMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@vue/test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  testMatch: ['**/test/**/*.spec.ts', '**/test/**/*.test.ts'],

  // ── Coverage ──────────────────────────────────────────────────────
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts',
    '!src/styles/**',
    '!src/stories/**',
    '!src/**/style.{scss,sass,css}',
    '!src/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 25,
      functions: 30,
      lines: 40,
    },
  },
};
