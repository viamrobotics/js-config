'use strict';

const baseConfig = require('./base.cjs');

module.exports = {
  ...baseConfig,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  svelteIndentScriptAndStyle: false,
  tailwindAttributes: ['cx'],
  tailwindFunctions: ['classnames', 'cx'],
};
