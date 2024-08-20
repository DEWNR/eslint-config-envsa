import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow parseInt with radix',
    code: `const num = parseInt('10', 10);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow parseInt without radix',
    code: `const num = parseInt('10');`,
    expectedErrors: [
      {
        message: "Always specify a radix when using 'parseInt'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
