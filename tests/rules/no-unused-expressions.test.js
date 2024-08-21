import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow valid expressions',
    code: `foo();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unused expressions',
    code: `foo;`,
    expectedErrors: [
      {
        message: 'Expected an assignment or function call and instead saw an expression.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
