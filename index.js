module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  plugins: [],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    semi: ['error', 'always'],
    'no-var': 2
  }
};
