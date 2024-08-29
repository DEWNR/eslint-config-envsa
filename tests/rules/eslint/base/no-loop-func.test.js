/* eslint-disable unicorn/prevent-abbreviations */
import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow functions outside loops',
    code: `function foo() {} for (let i = 0; i < 10; i++) { foo(); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow functions inside loops',
    code: `for (let i = 0; i < 10; i++) { function foo() {} }`,
    expectedErrors: [
      {
        message: 'Functions should not be declared inside loops.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
