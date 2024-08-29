import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow direct return statements',
    code: `function foo() { return; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnecessary return statements',
    code: `function foo() { return undefined; }`,
    expectedErrors: [
      {
        message: 'Redundant return statement.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
