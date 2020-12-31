module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    semi: ['error', 'always'],
    'no-var': 2,
    'react/prop-types': 'off'
  }
};
