import rulesBase from './src/stylelint/rules/base.js';

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
    },
  ],
};
