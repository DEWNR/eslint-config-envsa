/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  parserOptions: {
    sourceType: 'module',
    extraFileExtensions: ['.svelte'],
  },
};
