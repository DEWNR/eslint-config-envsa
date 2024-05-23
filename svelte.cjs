/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  settings: {
    'import/parsers': {
      'svelte-eslint-parser': ['.svelte'],
    },
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
};
