import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

/**
 * A reminder of eslint number syntax.
 *
 * 0 - 'off'
 * 1 - 'warn'
 * 2 - 'error'
 */

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
    },
    rules: {
      'vue/max-attributes-per-line': [
        2,
        {
          singleline: {
            max: 20,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
];
