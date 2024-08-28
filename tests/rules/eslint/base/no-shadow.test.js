import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow distinct variable names',
    code: `let a = 1; function foo() { let b = 2; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow shadowing of variables',
    code: `let a = 1; function foo() { let a = 2; }`,
    expectedErrors: [
      {
        message: "Variable 'a' is already declared in the upper scope.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
