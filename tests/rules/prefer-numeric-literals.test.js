import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow binary numeric literals',
    code: `const foo = 0b1010;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow parseInt for binary literals',
    code: `const foo = parseInt('1010', 2);`,
    expectedErrors: [
      {
        message: "Use binary numeric literal instead of 'parseInt()'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);