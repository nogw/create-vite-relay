require('@testing-library/jest-dom');

jest.mock('../src/relay/RelayEnvironment', () => {
  const { createMockEnvironment } = require('relay-test-utils');
  return createMockEnvironment();
});

afterEach(() => global.window.localStorage.clear());
