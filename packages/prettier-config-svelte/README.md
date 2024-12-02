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

If the project is inside a monorepo, you'll need to specify the path to your Tailwind config.

```js
// prettier.config.js
import path from 'node:path';

import baseConfig from '@viamrobotics/prettier-config-svelte';

/** @satisfies {import('prettier').Config} */
const config = {
  ...baseConfig,
  tailwindConfig: path.join(import.meta.dirname, 'tailwind.config.ts'),
};

export default config;
```
