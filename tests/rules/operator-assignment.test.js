import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
