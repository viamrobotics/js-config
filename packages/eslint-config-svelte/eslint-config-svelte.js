import * as svelteParser from 'svelte-eslint-parser';
import jestDOM from 'eslint-plugin-jest-dom';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import ts from 'typescript-eslint';

import baseConfig from '@viamrobotics/eslint-config';

const extraFileExtensions = ['.svelte'];

/**
 * @typedef {import('@viamrobotics/eslint-config').ConfigArray} ConfigArray
 */

/** @satisfies {ConfigArray} */
const config = ts.config(
  baseConfig,
  tailwind.configs['flat/recommended'],
  svelte.configs['flat/recommended'],
  svelte.configs['flat/prettier'],

  // Base options and settings
  {
    name: 'viam/svelte/base',
    languageOptions: {
      parserOptions: { extraFileExtensions },
      globals: {
        ...globals.browser,
      },
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
    rules: {
      // Too many false positives
      'svelte/require-stores-init': 'off',
    },
  },

  {
    name: 'viam/svelte/svelte-base',
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions,
        svelteFeatures: {
          experimentalGenerics: true,
        },
      },
    },
    rules: {
      // Allows us to set option props to `undefined` by default
      'no-undef-init': 'off',
    },
  },

  {
    name: 'viam/svelte/modules',
    files: ['**/*.svelte.ts', '*.svelte.ts'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },

  {
    ...jestDOM.configs['flat/recommended'],
    name: 'viam/svelte/jest-dom',
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
  },

  {
    ...testingLibrary.configs['flat/dom'],
    name: 'viam/svelte/testing-library',
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
