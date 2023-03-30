# Shared ESLint Config for Viam

This module contains [Viam][]'s shared [ESLint][] configurations for ESLint v8.

```shell
npm install --save-dev eslint @viamrobotics/eslint-config
```

[viam]: https://www.viam.com/
[eslint]: https://eslint.org/

### Base config

Use the [base config](./base.cjs) for vanilla JavaScript / TypeScript projects. Be sure to add your `tsconfig.json` files to `parserOptions.project` and `settings['import/resolver'].typescript.project`.

```js
// .eslintrc.cjs
'use strict';

module.exports = {
  root: true,
  extends: ['@viamrobotics/eslint-config'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
};
```
