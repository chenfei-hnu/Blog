module.exports = {
  setupFiles: [
    './test/setup.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testRegex: '\\.test\\.[jt]sx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\hooks/useEnums$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\utils/request$': '<rootDir>/test/__mocks__/requestMoke.tsx',
    '\\hooks/useTranslate$': '<rootDir>/test/__mocks__/translateMoke.tsx',
    '\\useColumnParser$': '<rootDir>/test/__mocks__/columnParserMoke.tsx',
    '\\uuid$': '<rootDir>/test/__mocks__/uuid.tsx',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        comments: false,
        plugins: [
          // using "lib" not "es" here to avoid antd files transformation
          // which saves lots of time and does import as needed
          ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
          ['transform-define', { 'window.__CID__': 'sg' }],
        ],
      },
    },
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.tsx'],
};
