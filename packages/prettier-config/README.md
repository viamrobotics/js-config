# Viam's Prettier Config

This module contains [Viam][]'s shared [Prettier][] configuration for Prettier v3.

[viam]: https://www.viam.com/
[prettier]: https://prettier.io/

## Usage

Use the [base config](./prettier-config.js) for vanilla JavaScript / TypeScript projects.

```shell
pnpm add --save-dev prettier @viamrobotics/prettier-config
```

```js
// prettier.config.js
export default '@viamrobotics/prettier-config';
```

You can also extend the configuration:

```js
// prettier.config.js
import baseConfig from '@viamrobotics/prettier-config';

export default {
  ...baseConfig,
  // other options here
};
```

## Svelte config

See [@viamrobotics/prettier-config-svelte](../prettier-config-svelte/)
