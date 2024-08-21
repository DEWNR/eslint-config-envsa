import parserBabel from '@babel/eslint-parser';
import pluginCspell from '@cspell/eslint-plugin';
import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginHtml from 'eslint-plugin-html';
import pluginImportX from 'eslint-plugin-import-x';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import path from 'node:path';
import prettierConfig from './prettier.config.js';
import rulesBase from './src/rules/base.js';
import rulesImport from './src/rules/import.js';

const gitignorePath = path.join(process.cwd(), '.gitignore');

/**
 * A reminder of eslint number syntax.
 *
 * 0 - 'off'
 * 1 - 'warn'
 * 2 - 'error'
 */

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: includeIgnoreFile(gitignorePath)?.ignores,
  },
  eslint.configs.recommended,
  pluginUnicorn.configs['flat/recommended'],
  {
    plugins: { '@cspell': pluginCspell },
    rules: {
      '@cspell/spellchecker': 1,
    },
  },
  {
    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        requireConfigFile: false,
      },
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...rulesBase,
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    plugins: {
      'import-x': pluginImportX,
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.ts'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...pluginImportX.configs.recommended.rules,
      ...rulesImport,
    },
  },
  {
    files: ['**/*.{html,twig}'],
    plugins: {
      html: pluginHtml,
    },
  },
  configPrettier,
  pluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        2,
        {
          ...prettierConfig,
        },
      ],
    },
  },
];
export default config;
