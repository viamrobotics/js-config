# Viam Shared JS/TS Config

Shared configuration for JavaScript and TypeScript tools.

## Libraries

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

## Actions

For usages with GitHub Actions CI

### Setup

Install Node.js, pnpm, and development dependencies

```yaml
- name: Setup Node.js
  uses: viamrobotics/js-config/.github/actions/setup
  with:
    node-version: '20'
```

| Option                 | Description                          | Default |
| ---------------------- | ------------------------------------ | ------- |
| `node-version`         | Which Node.js version to install     | `20`    |
| `registry-url`         | Configure a registry URL for publish | Unset   |
| `install-dependencies` | Run `pnpm install`                   | `true`  |

### Publish

Publish a package to npm and add a tag to the repository.

> [!NOTE]
> Prefer `pnpm publish --recursive` if you are publishing packages from a monorepo.

```yaml
- name: Publish to npm
  uses: viamrobotics/js-config/.github/actions/publish
  with:
    package: 'packages/cool-lib'
    token: ${{ secrets.NPM_TOKEN }}
```

| Option    | Description                                  | Default  |
| --------- | -------------------------------------------- | -------- |
| `package` | Path to package.json or directory to publish | Required |
| `token`   | npm auth token                               | Required |

## Contributing

Node.js v18 or higher is required to develop on this repository. To get started, clone the repository and install the project's development dependencies. .

```shell
git clone https://github.com/viamrobotics/js-config.git
cd js-config
corepack enable
pnpm install
```

Once your development dependencies are installed, you can verify that all checks and tests are passing:

```shell
# run all checks and builds
pnpm all

# lint
pnpm lint

# check types
pnpm check

# auto format
pnpm format

# build all packages
pnpm build
```

### Releasing

Modules in this repository are continuously deployed to npm from the `main` branch. To trigger a release, create a commit that bumps `version` in one or more `package.json` files and create a pull request to merge that commit into `main`.
