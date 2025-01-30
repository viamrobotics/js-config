import parser from 'svelte-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

import { EXTENDS, CJS, TESTS } from '@viamrobotics/eslint-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    ...EXTENDS,
    'plugin:tailwindcss/recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier'
  ),
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        extraFileExtensions: ['.svelte'],
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
  },
  CJS,
  TESTS,
  {
    files: ['**/*.svelte'],

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    rules: {
      'svelte/valid-compile': 'off',
      'no-undef-init': 'off',
    },
  },
  ...compat
    .extends('plugin:jest-dom/recommended', 'plugin:testing-library/dom')
    .map((config) => ({
      ...config,
      files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],
    })),
  {
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],

    rules: {
      'testing-library/await-async-events': [
        'error',
        {
          eventModule: ['fireEvent', 'userEvent'],
        },
      ],

      'testing-library/no-await-sync-events': 'off',

      'testing-library/no-node-access': [
        'error',
        {
          allowContainerFirstChild: true,
        },
      ],

      'testing-library/prefer-explicit-assert': [
        'error',
        {
          assertion: 'toBeInTheDocument',
        },
      ],

      'testing-library/prefer-user-event': 'error',
    },
  },
];
