import rulesBase from './src/stylelint/rules/base.js';
import rulesScss from './src/stylelint/rules/scss.js';

/** @type import('stylelint').Config */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['./vendor/**/*'],
  rules: {
    ...rulesBase,
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      plugins: ['stylelint-scss'],
      customSyntax: 'postcss-scss',
      rules: {
        ...rulesScss,
      },
    },
  ],
};
