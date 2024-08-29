export default {
  'scss/at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
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
  'scss/load-partial-extension': 'never',
};
