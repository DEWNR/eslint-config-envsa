# @envsa/eslint-config

## Features

- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/) support

## Installation

Install the package with

```sh
npm i -D @envsa/eslint-config
```

Then install the peerDependency packages.
```
npm i -D eslint@^7.16.0 prettier@^2.1.2 stylelint@^13.8.0
```

The correct versions of each peerDependency package are listed by the command:

```sh
npm info "@envsa/eslint-config@latest" peerDependencies
```
Or, if using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev @envsa/eslint-config
```

## Usage

This package will create the following 3 initial config files during installation:

* eslint.config.js
* prettier.config.js
* stylelint.config.js

If the config file exists already, it won't create/replace the file.

If you want to config manually, please add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@envsa"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@envsa"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@envsa'
};
```

### Prettier Config

This is how you use or extend the `@envsa/eslint-config` prettier config in your
app:

```js
// prettier.config.js
module.exports = require('@envsa/eslint-config/prettier.config');
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- browser and/or node environment
- parser: babel (used babel-eslint parser)

Even though I made some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).
