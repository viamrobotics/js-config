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
        /*
         * TODO(mc, 2023-08-28): this rule is crashing with svelte actions.
         * https://github.com/sveltejs/eslint-plugin-svelte/issues/583
         */
        'sonarjs/no-unused-collection': 'off',

        // Allows us to set option props to `undefined` by default
        'no-undef-init': 'off',
      },
    },
  ],
};
