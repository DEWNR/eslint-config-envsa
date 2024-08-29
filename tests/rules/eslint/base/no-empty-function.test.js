import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow functions with content',
    code: `function foo() { return true; };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow empty functions',
    code: `function foo() {};`,
    expectedErrors: [
      {
        message: 'Unexpected empty function.',
      },
    ],
  },
];
testRule(import.meta.filename, testCases);
