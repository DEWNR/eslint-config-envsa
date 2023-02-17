const tailwindConfig = require('stylelint-config-tailwindcss');

const tailwindAtRules = tailwindConfig.rules['at-rule-no-unknown'][1].ignoreAtRules;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  ignoreFiles: ['./vendor/**/*'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          ...tailwindAtRules,
          'if',
          'use',
          'each',
          'else',
          'mixin',
          'screen',
          'at-root',
          'include',
          'keyframes',
        ],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested', 'blockless-after-same-name-blockless'],
        ignoreAtRules: ['if', 'else', 'apply'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'string-quotes': ['single', { avoidEscape: true }],
  },
};
