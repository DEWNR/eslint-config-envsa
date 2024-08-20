import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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
testAll(import.meta.filename, testCases);
