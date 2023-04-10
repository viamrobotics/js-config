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

Node.js v18 or higher is required to develop on this repository. To get started, clone the repository and install the project's development dependencies. .

```shell
git clone https://github.com/viamrobotics/js-config.git
cd js-config
npm install
```

Once your development dependencies are installed, you can verify that all checks and tests are passing:

```shell
# run all checks and builds
npm run all

# check lints
npm run check-lint

# check types
npm run check-types

# check formatting
npm run check-format

# build all packages
npm run build

# auto-format (modifies files)
npm run format
```

### Releasing

Modules in this repository are continuously deployed to npm from the `main` branch. To trigger a release, create a commit that bumps `version` in one or more `package.json` files and create a pull request to merge that commit into `main`.
