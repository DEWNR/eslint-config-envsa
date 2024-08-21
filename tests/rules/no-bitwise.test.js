import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-bitwise operations',
    code: `const a = 1 + 2;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow bitwise operations',
    code: `const a = 1 & 2;`,
    expectedErrors: [
      {
        message: "Unexpected use of '&'.",
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
