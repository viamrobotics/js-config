# Viam's ESLint Config

> [!WARNING]
> **This package is deprecated and no longer maintained.** The [viamrobotics/js-config](https://github.com/viamrobotics/js-config) repository has been archived. Please set up your own ESLint configuration in your own repository going forward.

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v9.

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/

## Base config

Extend the [config](./eslint-config.js) in `eslint.config.js`.

> [!TIP]
> See the typescript-eslint docs on [type-aware linting](https://typescript-eslint.io/getting-started/typed-linting) to learn about how to configure `languageOptions`. Using `projectService: true` is recommended for new projects, but older projects may continue to use `project: './tsconfig.json'` for performance or compatibility reasons.

```shell
pnpm add --save-dev eslint @viamrobotics/eslint-config
```

```js
// eslint.config.js
import { baseConfig, createConfig } from '@viamrobotics/eslint-config';

export default createConfig(baseConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## Svelte config

See [@viamrobotics/eslint-config-svelte](../eslint-config-svelte/)
