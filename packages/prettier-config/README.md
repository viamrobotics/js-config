# Shared Prettier Config for Viam

This module contains [Viam][]'s shared [Prettier][] configurations for Prettier v3.

[viam]: https://www.viam.com/
[prettier]: https://prettier.io/

## Base config

Use the [base config](./base.js) for vanilla JavaScript / TypeScript projects.

```shell
pnpm add --save-dev prettier @viamrobotics/prettier-config
```

```js
// .prettierrc.cjs
module.exports = '@viamrobotics/prettier-config';
```

You can also extend the configuration:

```js
// .prettierrc.cjs
const baseConfig = require('@viamrobotics/prettier-config');

export default {
  ...baseConfig,
  // other options here
};
```

## Svelte config

Use the [Svelte config](./svelte.js) for Svelte projects.

```shell
pnpm add --save-dev \
  @viamrobotics/prettier-config \
  prettier \
  prettier-plugin-svelte \
  prettier-plugin-tailwindcss
```

```js
// .prettierrc.cjs
module.exports = '@viamrobotics/prettier-config/svelte';
```
