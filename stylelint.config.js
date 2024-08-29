import rulesBase from './src/rules/stylelint/base.js';
import rulesScss from './src/rules/stylelint/scss.js';

/** @type import('stylelint').Config */
export default {
  extends: 'stylelint-config-standard-scss',
  ignoreFiles: ['./vendor/**/*'],
  rules: {
    ...rulesBase,
    ...rulesScss,
  },
};
