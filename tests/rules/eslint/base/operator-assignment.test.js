import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow simplified operator assignments',
    code: `let foo = 1; foo += 2;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow non-simplified operator assignments',
    code: `let foo = 1; foo = foo + 2;`,
    expectedErrors: [
      {
        message: "Use 'foo += 2' instead.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
