/**
 * A reminder of eslint number syntax.
 *
 * 0 - 'off'
 * 1 - 'warn'
 * 2 - 'error'
 */

/* https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v55.0.0/docs/rules */

export default {
  'unicorn/prefer-top-level-await': 0,
  'unicorn/prevent-abbreviations': [
    2,
    {
      allowList: {
        dev: true,
        useDevServer: true,
        args: true,
      },
    },
  ],
};
