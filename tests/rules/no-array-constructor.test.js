import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow array literals',
    code: `const arr = [1, 2, 3];`,
    expectedErrors: [],
  },
  {
    name: 'should disallow Array constructor',
    code: `const arr = new Array(1, 2, 3);`,
    expectedErrors: [
      {
        message: 'The array literal notation [] is preferable.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
