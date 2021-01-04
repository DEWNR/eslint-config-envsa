# eslint-config-envsa

## Features

- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/) support

## Installation

Install the package with

```sh
npm i -D eslint-config-envsa
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-envsa@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-envsa
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-envsa"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-envsa"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-envsa'
};
```

### Prettier Config

This is how you use or extend the `eslint-config-envsa` prettier config in your
app:

```js
// prettier.config.js
module.exports = require('eslint-config-envsa/prettier.config');
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- browser and/or node environment
- parser: babel (used babel-eslint parser)

Even though I made some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).
