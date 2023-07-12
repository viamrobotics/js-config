# Shared Prettier Config for Viam

This module contains [Viam][]'s shared [Prettier][] configurations for Prettier v2.

```shell
pnpm add --save-dev prettier @viamrobotics/prettier-config
```

[viam]: https://www.viam.com/
[prettier]: https://prettier.io/

## Base config

Use the [base config](./base.cjs) for vanilla JavaScript / TypeScript projects.

```js
// .prettierrc.cjs
'use strict';

module.exports = '@viamrobotics/prettier-config';
```

You can also extend the configuration:

```js
// .prettierrc.cjs
'use strict';

const baseConfig = require('@viamrobotics/prettier-config');

module.exports = {
  ...baseConfig,
  // other options here
};
```

## Svelte config

Use the [Svelte config](./svelte.cjs) for Svelte projects.

```shell
pnpm add --save-dev \
  prettier \
  @viamrobotics/prettier-config \
  prettier-plugin-svelte \
  prettier-plugin-tailwindcss
```

```js
// .prettierrc.cjs
'use strict';

module.exports = '@viamrobotics/prettier-config/svelte';
```
