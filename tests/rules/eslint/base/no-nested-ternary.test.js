import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow single ternary expressions',
    code: `const result = a ? b : c;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow nested ternary expressions',
    code: `const result = a ? (b ? c : d) : e;`,
    expectedErrors: [
      {
        message: 'Do not nest ternary expressions.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
