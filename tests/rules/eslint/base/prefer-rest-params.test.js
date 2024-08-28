/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow rest parameters',
    code: `function foo(...args) { console.log(args); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow arguments object',
    code: `function foo() { console.log(arguments); }`,
    expectedErrors: [
      {
        message: "Use rest parameters instead of 'arguments'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
