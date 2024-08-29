export default {
  'at-rule-empty-line-before': [
    'always',
    {
      ignore: ['after-comment', 'first-nested', 'blockless-after-same-name-blockless'],
      ignoreAtRules: ['else', 'apply'],
    },
  ],
  'no-descending-specificity': [
    true,
    {
      ignore: ['selectors-within-list'],
    },
  ],
  'import-notation': 'string',
  'no-invalid-position-at-import-rule': [
    true,
    {
      ignoreAtRules: ['tailwind'],
    },
  ],
};
