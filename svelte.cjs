/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser' }],
};
