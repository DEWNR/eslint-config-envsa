/* eslint-disable capitalized-comments */
import { testAll } from '../common';

// Allow for these options...
// {
//   ignoreDestructuring: true,
//   ignoreGlobals: true,
//   ignoreImports: true,
//   properties: 'never',
// },

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow camelCase',
    code: `const fooBar = 3;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow snake_case',
    code: `const foo_bar = 3;`,
    expectedErrors: [
      {
        message: "Identifier 'foo_bar' is not in camel case.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
