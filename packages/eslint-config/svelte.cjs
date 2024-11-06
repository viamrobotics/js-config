'use strict';

const baseConfig = require('./base.cjs');

module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:tailwindcss/recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
  ],
  settings: {
    tailwindcss: {
      callees: ['classnames', 'cx'],
      classRegex: '^(?:class|cx)$',
    },
  },
  parserOptions: {
    ...baseConfig.parserOptions,
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    ...baseConfig.overrides,
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // Allows us to set option props to `undefined` by default
        'no-undef-init': 'off',
      },
    },
    // Rules for tests
    {
      files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/dom'],
      rules: {
        'testing-library/await-async-events': [
          'error',
          { eventModule: ['fireEvent', 'userEvent'] },
        ],
        'testing-library/no-await-sync-events': 'off',
        'testing-library/no-node-access': [
          'error',
          { allowContainerFirstChild: true },
        ],
        'testing-library/prefer-explicit-assert': [
          'error',
          { assertion: 'toBeInTheDocument' },
        ],
        'testing-library/prefer-user-event': 'error',
      },
    },
  ],
};
