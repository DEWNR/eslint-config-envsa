/* eslint-disable unicorn/prevent-abbreviations */

import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow creating new variables from parameters',
    code: `function foo(bar) { const baz = bar; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow parameter reassignment',
    code: `function foo(bar) { bar = 10; }`,
    expectedErrors: [
      {
        message: "Assignment to function parameter 'bar' is not allowed.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
