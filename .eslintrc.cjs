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
    'arrow-body-style': 0,
    camelcase: [
      2,
      {
        properties: 'never',
        ignoreGlobals: true,
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    'comma-dangle': 0,
    'consistent-return': 0,
    'func-names': 0,
    import: 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      2,
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
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': [2, 'except-parens'],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'space-before-function-paren': 0,
  },
};
