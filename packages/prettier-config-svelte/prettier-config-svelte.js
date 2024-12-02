import url from 'node:url';

import baseConfig from '@viamrobotics/prettier-config';

const sveltePlugin = url.fileURLToPath(
  import.meta.resolve('prettier-plugin-svelte')
);
const tailwindPlugin = url.fileURLToPath(
  import.meta.resolve('prettier-plugin-tailwindcss')
);

/** @satisfies {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [sveltePlugin, tailwindPlugin],
  svelteIndentScriptAndStyle: false,
  tailwindAttributes: ['cx'],
  tailwindFunctions: ['classnames', 'cx'],
  // TODO(mc, 2024-12-01): https://github.com/tailwindlabs/prettier-plugin-tailwindcss/pull/332
  tailwindPreserveWhitespace: true,
};

export default config;
