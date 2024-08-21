import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow exponentiation operator',
    code: `const foo = 2 ** 3;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow Math.pow() for exponentiation',
    code: `const foo = Math.pow(2, 3);`,
    expectedErrors: [
      {
        message: "Use '**' instead of 'Math.pow()'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
