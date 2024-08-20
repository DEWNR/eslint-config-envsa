import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
