'use strict';

/** @satisfies {import('prettier').Config} */
const config = {
  // overrides
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  trailingComma: 'es5',

  // default values
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
};

module.exports = config;
