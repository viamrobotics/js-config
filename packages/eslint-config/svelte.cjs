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
    },
  ],
};
