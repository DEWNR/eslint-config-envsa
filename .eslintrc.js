module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': 0,
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': [2, 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
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
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['./*.js', '**/dev/*.js', '**/dev.js'],
      },
    ],
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
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
    camelcase: [
      2,
      {
        properties: 'never',
        ignoreGlobals: true,
        ignoreDestructuring: true,
        ignoreImports: true,
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
  },
  plugins: ['html', 'prettier'],
};
