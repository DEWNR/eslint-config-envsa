/** @type import('stylelint').Config */
const config = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['./vendor/**/*'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'if',
          'use',
          'each',
          'else',
          'mixin',
          'screen',
          'at-root',
          'include',
          'keyframes',
          /* tailwind */
          'tailwind',
          'apply',
          'layer',
          'config',
          'variants',
          'responsive',
          'screen',
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
    'no-descending-specificity': null,
    'import-notation': 'string',
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};

export default config;
