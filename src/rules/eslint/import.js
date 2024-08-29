/**
 * A reminder of eslint number syntax.
 *
 * 0 - 'off'
 * 1 - 'warn'
 * 2 - 'error'
 */

export default {
  'import-x/exports-last': 2,
  'import-x/first': 2,
  'import-x/extensions': [2, 'ignorePackages'],
  'import-x/newline-after-import': 2,
  'import-x/no-extraneous-dependencies': [
    2,
    {
      devDependencies: [
        './*.{mjs,cjs,js,ts}', // Any root project files
        '**/dev/**/', // Any files in a 'dev/' dir
        '**/dev.{mjs,cjs,js,ts}', // Any file named dev
        '**/*.{spec,test}.{mjs,cjs,js,ts}', // Any test files
        '**/{test,tests,spec,__tests__,__mocks__}/**/', // Any files in common test dirs
      ],
    },
  ],
  'import-x/no-absolute-path': 2,
  'import-x/no-amd': 2,
  'import-x/no-dynamic-require': 2,
  'import-x/no-import-module-exports': 2,
  'import-x/no-mutable-exports': 2,
  'import-x/no-named-default': 2,
  'import-x/no-relative-packages': 2,
  'import-x/no-self-import': 2,
  'import-x/no-useless-path-segments': 2,
  'import-x/no-webpack-loader-syntax': 2,
  // Might conflict with prettier organize imports...
  'import-x/order': [
    2,
    {
      distinctGroup: true,
      groups: [['builtin', 'external', 'internal']],
      warnOnUnassignedImports: false,
    },
  ],
};
