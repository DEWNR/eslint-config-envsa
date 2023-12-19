/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
};
