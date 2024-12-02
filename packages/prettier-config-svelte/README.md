# Viam's Prettier Config for Svelte

This module contains [Viam][]'s shared [Prettier][] configurations for Prettier v3 in [Svelte][] projects.

[viam]: https://www.viam.com/
[prettier]: https://prettier.io/
[svelte]: https://svelte.dev/

## Usage

Use the [Svelte config](./prettier-config-svelte.js) for Svelte projects.

```shell
pnpm add --save-dev prettier @viamrobotics/prettier-config-svelte
```

```js
// prettier.config.js
export default '@viamrobotics/prettier-config-svelte';
```

You can also extend the configuration:

```js
// prettier.config.js
import baseConfig from '@viamrobotics/prettier-config-svelte';

export default {
  ...baseConfig,
  // other options here
};
```
