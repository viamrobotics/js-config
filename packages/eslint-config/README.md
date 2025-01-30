# Viam's ESLint Config

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v8.

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/

## Base config

Extend the [config](./eslint-config.mjs) in `.eslintrc.cjs`.

```shell
pnpm add --save-dev \
  eslint@^8.56.0 \
  @viamrobotics/eslint-config \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-config-prettier \
  eslint-plugin-simple-import-sort \
  eslint-plugin-unicorn \
  eslint-plugin-vitest
```

```js
// .eslintrc.cjs
'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    projectService: true,
  },
};
```

## Svelte config

See [@viamrobotics/eslint-config-svelte](../eslint-config-svelte/)
