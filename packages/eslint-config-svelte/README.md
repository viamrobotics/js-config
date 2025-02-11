# Viam's ESLint Config for Svelte

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v9 in [Svelte][] projects.

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/
[svelte]: https://svelte.dev/

## Base config

Extend the [config](./eslint-config-svelte.js) in `eslint.config.js`.

> [!TIP]
> See the typescript-eslint docs on [type-aware linting](https://typescript-eslint.io/getting-started/typed-linting) to learn about how to configure `languageOptions`. Using `projectService: true` is recommended for new projects, but older projects may continue to use `project: './tsconfig.json'` for performance or compatibility reasons.

```shell
pnpm add --save-dev eslint @viamrobotics/eslint-config-svelte
```

```js
// eslint.config.js
import path from 'node:path';

import {
  baseSvelteConfig,
  createConfig,
} from '@viamrobotics/eslint-config-svelte';

export default createConfig(
  baseSvelteConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      tailwindcss: {
        config: path.join(import.meta.dirname, 'tailwind.config.ts'),
      },
    },
  },
```

## Non-Svelte projects

See [@viamrobotics/eslint-config](../eslint-config/)
