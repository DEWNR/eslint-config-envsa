import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow usage of non-restricted syntax',
    code: `for (let i = 0; i < 10; i++) {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow usage of restricted syntax',
    code: `for (let i of arr) {}`,
    expectedErrors: [
      {
        message: "The syntax 'for..of' is restricted.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
