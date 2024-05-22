require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    jest: true,
  },
  plugins: ['html', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreGlobals: true,
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './*.{mjs,cjs,js,ts}', // any root project files
          './.*.{mjs,cjs,js,ts}', // any dot files
          './*.config.{mjs,cjs,js,ts}', // any config files
          '**/dev/*.{mjs,cjs,js,ts}', // any files in a 'dev/' dir
          '**/dev.{mjs,cjs,js,ts}', // any file named dev
          '**/*.spec.{mjs,cjs,js,ts}', // any test files
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': ['error', 'except-parens'],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'space-before-function-paren': 'off',
  },
};
