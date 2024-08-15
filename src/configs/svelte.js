import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

/**
 * A reminder of eslint number syntax.
 *
 * 0 - 'off'
 * 1 - 'warn'
 * 2 - 'error'
 */

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    files: ['*.svelte'],
    languageOptions: {
      parser: svelteParser,
    },
    plugins: {},
    settings: {
      'import/parsers': {
        'svelte-eslint-parser': ['.svelte'],
      },
    },
    rules: {
      'import/no-mutable-exports': 0,
    },
  },
];
