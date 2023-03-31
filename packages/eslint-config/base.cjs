'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    // Extra built-in rules
    'array-callback-return': ['error', { checkForEach: true }],
    camelcase: 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'always' }],
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
    'no-caller': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-implicit-coercion': 'error',
    'no-param-reassign': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { object: false, array: false },
        VariableDeclarator: { object: true, array: true },
      },
    ],
    'prefer-object-has-own': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    strict: 'error',
    yoda: 'error',

    // Extra TypeScript rules
    '@typescript-eslint/return-await': 'error',

    // Extra import rules
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',

    // Extra Unicorn rules
    'unicorn/consistent-destructuring': 'off',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    // CommonJS files are scripts that are allowed to use `require`
    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
