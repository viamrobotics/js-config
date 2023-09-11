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
        /*
         * TODO(mc, 2023-08-28): this rule is crashing with svelte actions.
         * Investigate and fix once lint dependencies are updated.
         * https://github.com/sveltejs/eslint-plugin-svelte/issues/583
         */
        'sonarjs/no-unused-collection': 'off',
      },
    },
  ],
};
