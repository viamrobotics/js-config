# Shared TypeScript Config for Viam

This module contains [Viam][]'s shared [TypeScript][] configurations for TypeScript v5. The main difference between the different configurations is their module resolution strategy.

```shell
npm install --save-dev typescript @viamrobotics/typescript-config
```

[viam]: https://www.viam.com/
[typescript]: https://www.typescriptlang.org/

### Base config

Use the [base config](./base.json) for generic TypeScript projects, including code that runs natively in Node.js or isomorphicaly, in both Node.js and the browser.

```json
// tsconfig.json
{
  "extends": "@viamrobotics/typescript-config"
}
```
