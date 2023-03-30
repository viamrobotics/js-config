# Viam Shared Web Project Config

Shared configuration for web tooling:

- [ESLint](./packages/eslint-config)
- [Pretter](./packages/prettier-config)
- [TypeScript](./packages/typescript-config)

## Contributing

We use [corepack][] and [pnpm][] to manage development dependencies and tasks for this repository. To get started, enable corepack (if you haven't already), clone the repository, and install the project's development dependencies. Node.js v18 or higher is required.

```shell
corepack enable
git clone https://github.com/viamrobotics/js-config.git
cd js-config
pnpm install
```

Once your development dependencies are installed, you can verify that all checks and tests are passing:

```shell
# run all checks
pnpm all

# check lints
pnpm check-lint

# check types
pnpm check-types

# check formatting
pnpm check-format

# auto-format (modifies files)
pnpm format
```

[corepack]: https://nodejs.org/docs/latest-v18.x/api/corepack.html
[pnpm]: https://pnpm.io/

### Releasing

TK
