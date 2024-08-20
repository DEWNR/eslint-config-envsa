/* eslint-disable unicorn/prevent-abbreviations */

import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow regular function expressions',
    code: `const foo = function() {};`,
    expectedErrors: [],
  },
  {
    name: 'should disallow using new Function',
    code: `const foo = new Function('a', 'b', 'return a + b');`,
    expectedErrors: [
      {
        message: "The 'Function' constructor is not allowed.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
