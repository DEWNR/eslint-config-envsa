/* eslint-disable unicorn/prevent-abbreviations */

import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
