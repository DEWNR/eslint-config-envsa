/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      settings: {
        'import/parsers': {
          'svelte-eslint-parser': ['.svelte'],
          '@babel/eslint-parser': ['.js'],
        },
      },
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
};
