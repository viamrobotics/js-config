import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export const EXTENDS = [
  'eslint:recommended',
  'plugin:@typescript-eslint/strict-type-checked',
  'plugin:@typescript-eslint/stylistic-type-checked',
  'plugin:unicorn/recommended',
  'prettier',
];

export const CJS = {
  files: ['**/*.cjs'],

  languageOptions: {
    globals: {
      ...globals.commonjs,
    },

    ecmaVersion: 5,
    sourceType: 'script',
  },

  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};

export const TESTS = {
  files: ['**/__tests__/**', '**/*.test.ts', '**/*.spec.ts'],

  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'unicorn/consistent-function-scoping': 'off',

    'vitest/consistent-test-filename': [
      'error',
      {
        pattern: '.*\\.spec\\.(ts|svelte)$',
      },
    ],

    'vitest/consistent-test-it': [
      'error',
      {
        fn: 'it',
      },
    ],

    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-conditional-tests': 'error',

    'vitest/no-restricted-matchers': [
      'error',
      {
        toBeFalsey: 'Prefer `toBe` or `toEqual`',
        toBeTruthy: 'Prefer `toBe` or `toEqual`',
      },
    ],

    'vitest/no-restricted-vi-methods': [
      'error',
      {
        spyOn: 'Do not partially mock objects',
      },
    ],

    'vitest/prefer-each': 'error',
    'vitest/require-top-level-describe': 'error',

    'vitest/valid-expect': [
      'error',
      {
        maxArgs: 2,
      },
    ],
  },
};

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...compat.extends(...EXTENDS),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'accessor-pairs': ['error'],

      'array-callback-return': [
        'error',
        {
          checkForEach: true,
        },
      ],

      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreImports: true,
        },
      ],

      'class-methods-use-this': ['error'],
      curly: ['error', 'all'],
      'default-case-last': ['error'],
      'default-param-last': ['error'],

      eqeqeq: [
        'error',
        'always',
        {
          null: 'always',
        },
      ],

      'func-names': 'error',
      'func-style': 'error',
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',

      'id-length': [
        'error',
        {
          exceptions: [
            '_',
            'x',
            'y',
            'z',
            'w',
            'r',
            'i',
            'j',
            'k',
            'l',
            'h',
            'a',
            'b',
          ],
        },
      ],

      'line-comment-position': 'error',

      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      'logical-assignment-operators': 'error',
      'max-depth': 'error',
      'max-nested-callbacks': 'error',
      'max-statements-per-line': 'error',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'warn',
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-debugger': 'warn',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty-static-block': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',

      'no-underscore-dangle': [
        'error',
        {
          allow: ['__VERSION__', '_errors'],
        },
      ],

      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-unused-private-class-members': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',

      'no-void': [
        'error',
        {
          allowAsStatement: true,
        },
      ],

      'object-shorthand': ['error', 'properties'],
      'one-var': ['error', 'never'],
      'operator-assignment': 'error',
      'padding-line-between-statements': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-unicode-regexp': 'error',
      'require-atomic-updates': 'error',

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      strict: 'error',
      'symbol-description': 'error',
      'vars-on-top': 'error',
      yoda: 'error',
      '@typescript-eslint/return-await': 'error',

      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreArrowShorthand: true,
        },
      ],

      '@typescript-eslint/no-import-type-side-effects': ['error'],
      '@typescript-eslint/no-shadow': ['error'],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-use-before-define': [
        'warn',
        {
          functions: false,
          classes: false,
          variables: false,
          allowNamedExports: true,
          ignoreTypeReferences: true,
        },
      ],

      '@typescript-eslint/promise-function-async': 'error',

      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: false,
          allowBoolean: true,
          allowNever: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:'],
            ['^vitest', '^svelte', '^@sveltejs', '^@?\\w'],
            ['^@viamrobotics'],
            ['^'],
            ['^\\.'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/no-null': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  ,
  {
    files: ['**/*.d.ts'],

    rules: {
      '@typescript-eslint/no-empty-interface': 'off',
    },
  },
];

export default config;
