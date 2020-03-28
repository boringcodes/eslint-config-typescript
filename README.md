<div align="center">
  <h1>eslint-config-typescript</h1>
  <p>Boring ESLint Config for TypeScript</p>

  <div>
    <a href="https://github.com/boringcodes/eslint-config-typescript/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/eslint-config-typescript" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/eslint-config-typescript/actions" aria-label="Lint Status">
      <img src="https://img.shields.io/github/workflow/status/boringcodes/eslint-config-typescript/lint-source?style=flat-square&label=lint">
    </a>
    <a href="https://david-dm.org/boringcodes/eslint-config-typescript" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/boringcodes/eslint-config-typescript?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/eslint-config-typescript" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/@boringcodes/eslint-config-typescript?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/eslint-config-typescript" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/@boringcodes/eslint-config-typescript?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/eslint-config-typescript/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/boringcodes/eslint-config-typescript?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
      <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
    </a>
  </div>
</div>

## Features

- [x] Standard config
- [x] TypeScript config
- [x] Prettier config
- [x] Prettier - Standard conflicts removed
- [x] Prettier - TypeScript conflicts removed

## Installation

Use the package manager to install

```bash
yarn add @boringcodes/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint typescript --dev
```

## Usage

Create `.eslintrc`/`.eslintrc.json` and add the content

```json
{
  "extends": ["@boringcodes/eslint-config-typescript"]
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/eslint-config-typescript/blob/master/LICENSE)
