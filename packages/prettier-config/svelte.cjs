'use strict';

const baseConfig = require('./base.cjs');

/** @satisfies {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  svelteIndentScriptAndStyle: false,
  tailwindAttributes: ['cx'],
  tailwindFunctions: ['classnames', 'cx'],
};

module.exports = config;
