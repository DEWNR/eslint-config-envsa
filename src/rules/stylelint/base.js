export default {
  'at-rule-empty-line-before': [
    'always',
    {
      ignore: ['after-comment', 'first-nested', 'blockless-after-same-name-blockless'],
      ignoreAtRules: ['else', 'apply'],
    },
  ],
  'declaration-empty-line-before': 'never',
  'import-notation': 'string',
  'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }],
  'no-invalid-position-at-import-rule': [true, { ignoreAtRules: ['tailwind'] }],
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
};
