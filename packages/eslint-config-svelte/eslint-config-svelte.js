import * as svelteParser from 'svelte-eslint-parser';
import jestDOM from 'eslint-plugin-jest-dom';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import ts from 'typescript-eslint';

import baseConfig from '@viamrobotics/eslint-config';

const extraFileExtensions = ['.svelte'];

/**
 * @typedef {import('@viamrobotics/eslint-config').ConfigArray} ConfigArray
 */

/** @type {ConfigArray} */
const config = ts.config(
  baseConfig,
  tailwind.configs['flat/recommended'],
  svelte.configs['flat/recommended'],
  svelte.configs['flat/prettier'],

  // Base options and settings
  {
    languageOptions: {
      parserOptions: { extraFileExtensions },
    },
    settings: {
      svelte: {
        ignoreWarnings: [
          '@typescript-eslint/no-unsafe-assignment',
          '@typescript-eslint/no-unsafe-member-access',
        ],
      },
      tailwindcss: {
        callees: ['classnames', 'cx'],
        classRegex: '^(?:class|cx)$',
      },
    },
  },

  // Svelte
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: { parser: ts.parser, extraFileExtensions },
    },
    rules: {
      // Redundant with `svelte-check` and build
      'svelte/valid-compile': 'off',
      // Allows us to set option props to `undefined` by default
      'no-undef-init': 'off',
    },
  },

  // Testing Library DOM assertions
  {
    ...jestDOM.configs['flat/recommended'],
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
  },

  // Testing Library usage
  {
    ...testingLibrary.configs['flat/dom'],
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
    rules: {
      ...testingLibrary.configs['flat/dom'].rules,
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
  }
);

export default config;
