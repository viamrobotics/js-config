import jestDOM from 'eslint-plugin-jest-dom';
import svelte from 'eslint-plugin-svelte';
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
    },
    rules: {
      // TODO(mc, 2024-02-14): Too many false positives
      // https://github.com/sveltejs/eslint-plugin-svelte/issues/1073
      'svelte/require-stores-init': 'off',
    },
  },

  {
    name: 'viam/svelte/svelte-base',
    files: ['**/*.svelte', '**/*.svelte.ts'],
    rules: {
      // Allows us to set option props to `undefined` by default
      'no-undef-init': 'off',

      // TODO(mc, 2024-11-06): False positive with props
      // https://github.com/sveltejs/eslint-plugin-svelte/issues/476
      '@typescript-eslint/no-unnecessary-condition': 'off',

      // Svelte ESLint parser does not type snippets correctly
      // https://github.com/sveltejs/svelte-eslint-parser/issues/657
      '@typescript-eslint/no-confusing-void-expression': 'off',

      // Svelte ESLint parser can lose function prop types
      // https://github.com/sveltejs/svelte-eslint-parser/issues/608
      '@typescript-eslint/no-unsafe-call': 'off',

      // Svelte ESLint parser can lose types with $props.id() and other runes
      '@typescript-eslint/no-unsafe-assignment': 'off',
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
