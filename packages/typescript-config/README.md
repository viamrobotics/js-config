# Shared TypeScript Config for Viam

This module contains [Viam][]'s shared [TypeScript][] configurations for TypeScript v5.

```shell
pnpm add --save-dev typescript @viamrobotics/typescript-config
```

[viam]: https://www.viam.com/
[typescript]: https://www.typescriptlang.org/

### Base config

Use the [base config](./tsconfig.base.json) for generic TypeScript projects, including code that runs natively in Node.js or isomorphically, in both Node.js and the browser.

```json
// tsconfig.json
{
  "extends": "@viamrobotics/typescript-config/base.json"
}
```
