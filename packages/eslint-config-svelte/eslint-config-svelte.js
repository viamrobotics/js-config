import jestDOM from 'eslint-plugin-jest-dom';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import ts from 'typescript-eslint';

import { baseConfig, createConfig } from '@viamrobotics/eslint-config';

/**
 * @typedef {import('@viamrobotics/eslint-config').ConfigArray} ConfigArray
 */

/** @type {ConfigArray} */
const baseSvelteConfig = createConfig(
  baseConfig,
  tailwind.configs['flat/recommended'],
  svelte.configs['flat/recommended'],
  svelte.configs['flat/prettier'],

  // Base options and settings
  {
    name: 'viam/svelte/base',
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
        svelteFeatures: {
          experimentalGenerics: true,
        },
      },
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
    rules: {
      // Allows us to set option props to `undefined` by default
      'no-undef-init': 'off',
    },
  },

  {
    name: 'viam/svelte/component-testing',
    extends: [
      jestDOM.configs['flat/recommended'],
      testingLibrary.configs['flat/dom'],
    ],
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

export { baseSvelteConfig };
export { createConfig } from '@viamrobotics/eslint-config';
