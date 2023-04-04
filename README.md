# Viam Shared JS/TS Config

Shared configuration for JavaScript and TypeScript tools:

| Tool                          | NPM Module                        | Version                                   |
| ----------------------------- | --------------------------------- | ----------------------------------------- |
| [ESLint][eslint docs]         | `@viamrobotics/eslint-config`     | [![eslint version][]][eslint npm]         |
| [Prettier][prettier docs]     | `@viamrobotics/prettier-config`   | [![prettier version][]][prettier npm]     |
| [TypeScript][typescript docs] | `@viamrobotics/typescript-config` | [![typescript version][]][typescript npm] |

[eslint docs]: ./packages/eslint-config
[eslint npm]: https://www.npmjs.com/package/@viamrobotics/eslint-config
[eslint version]: https://img.shields.io/npm/v/@viamrobotics/eslint-config?style=flat-square
[prettier docs]: ./packages/prettier-config
[prettier npm]: https://www.npmjs.com/package/@viamrobotics/prettier-config
[prettier version]: https://img.shields.io/npm/v/@viamrobotics/prettier-config?style=flat-square
[typescript docs]: ./packages/typescript-config
[typescript npm]: https://www.npmjs.com/package/@viamrobotics/typescript-config
[typescript version]: https://img.shields.io/npm/v/@viamrobotics/typescript-config?style=flat-square

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
# run all checks and builds
pnpm all

# check lints
pnpm check-lint

# check types
pnpm check-types

# check formatting
pnpm check-format

# build all packages
pnpm build

# auto-format (modifies files)
pnpm format
```

[corepack]: https://nodejs.org/docs/latest-v18.x/api/corepack.html
[pnpm]: https://pnpm.io/

### Releasing

Modules in this repository are continuously deployed to npm from the `main` branch. To trigger a release, create a commit that bumps `version` in one or more `package.json` files and create a pull request to merge that commit into `main`.
