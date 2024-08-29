import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
