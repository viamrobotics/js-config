# Viam's ESLint Config for Svelte

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v8 in [Svelte][] projects.

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/
[svelte]: https://svelte.dev/

## Base config

Extend the [config](./eslint-config-svelte.mjs) in `.eslintrc.cjs`.

```shell
pnpm add --save-dev \
  eslint@^8.56.0 \
  @viamrobotics/eslint-config-svelte \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-config-prettier \
  eslint-plugin-jest-dom \
  eslint-plugin-simple-import-sort \
  eslint-plugin-svelte \
  eslint-plugin-tailwindcss \
  eslint-plugin-testing-library \
  eslint-plugin-unicorn \
  eslint-plugin-vitest
```

```js
// .eslintrc.cjs
'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config-svelte'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    projectService: true,
  },
};
```

## Non-Svelte projects

See [@viamrobotics/eslint-config](../eslint-config/)
