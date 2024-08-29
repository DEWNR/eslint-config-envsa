import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow strict mode in functions',
    code: `function foo() { 'use strict'; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow missing strict mode in functions',
    code: `function foo() { }`,
    expectedErrors: [
      {
        message: "Use the 'use strict' directive.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
