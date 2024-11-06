# Shared ESLint Config for Viam

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v8.

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/

## Base config

Use the [base config](./base.cjs) for vanilla JavaScript / TypeScript projects. Be sure to add your `tsconfig.json` files to `parserOptions.project` and `settings['import/resolver'].typescript.project`.

```shell
pnpm add --save-dev \
  @viamrobotics/eslint-config \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint \
  eslint-config-prettier \
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
    project: ['./tsconfig.json'],
  },
};
```

## Svelte config

Use the [Svelte config](./svelte.cjs) for Svelte projects.

```shell
pnpm add --save-dev \
  @viamrobotics/eslint-config \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint \
  eslint-config-prettier \
  eslint-plugin-jest-dom \
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
  extends: ['@viamrobotics/eslint-config/svelte'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
```
