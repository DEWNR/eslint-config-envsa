import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow usage of non-restricted globals',
    code: `const num = Number.isInteger(10);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow usage of restricted globals',
    code: `alert('Restricted global');`,
    expectedErrors: [
      {
        message: "Use of restricted global 'alert' is not allowed.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
