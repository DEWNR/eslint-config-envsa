/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  parser: 'vue-eslint-parser',
  extends: 'plugin:vue/vue3-recommended',
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
