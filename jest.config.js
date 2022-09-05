module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['./node_modules/'],
  moduleNameMapper: {
    "^@components/(.*)": "<rootDir>/src/components/$1",
    "^@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "^@pages/(.*)": "<rootDir>/src/pages/$1",
    "^@service/(.*)": "<rootDir>/src/service/$1",
    "^@assets/(.*)": "<rootDir>/src/assets/$1",
    "^@utils/(.*)": "<rootDir>/src/utils/$1",
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.ts"
  ]
};