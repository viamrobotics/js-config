import baseConfig from './base.js';

export default {
  ...baseConfig,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  svelteIndentScriptAndStyle: false,
};
