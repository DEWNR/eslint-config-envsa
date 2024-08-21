/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow variable declarations at the top of a function',
    code: `function foo() { var bar; console.log(bar); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow variable declarations after statements',
    code: `function foo() { console.log(bar); var bar; }`,
    expectedErrors: [
      {
        message: "All 'var' declarations must be at the top of the function.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
