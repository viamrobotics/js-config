# Viam's Tailwind Config

> [!IMPORTANT]
> **Source has moved.** `@viamrobotics/tailwind-config` is still actively maintained on npm, but its source now lives in the [viamrobotics/prime](https://github.com/viamrobotics/prime) monorepo (see [prime#640](https://github.com/viamrobotics/prime/pull/640)). The copy in this archived repository is frozen — file issues and PRs against `prime`.

This module contains [Viam][]'s shared [Tailwind CSS][] v4 configuration.

[viam]: https://www.viam.com/
[tailwind css]: https://tailwindcss.com/

## Installation

```shell
pnpm add --save-dev tailwindcss @viamrobotics/tailwind-config
```

This package requires a Tailwind CSS v4 bundler integration (`@tailwindcss/vite` or `@tailwindcss/postcss`). See the [Tailwind installation guides](https://tailwindcss.com/docs/installation) for setup instructions.

## Usage

Add this package in your main CSS file:

```css
/* app.css */
@import '@viamrobotics/tailwind-config';
```

## Fonts

The config references the following font families.

- **Space Grotesk** — `font-space-grotesk`
- **Roboto Mono** — `font-roboto-mono`
- **Public Sans** — `font-public-sans`

Add them to your project with the following Typescript import:

```js
import '@viamrobotics/tailwind-config/fonts';
```
