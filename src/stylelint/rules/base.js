export default {
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
        /* Tailwind */
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
      ignoreAtRules: ['else', 'apply'],
    },
  ],
  'no-descending-specificity': 'null',
  'import-notation': 'string',
  'no-invalid-position-at-import-rule': [
    true,
    {
      ignoreAtRules: ['tailwind'],
    },
  ],
};
