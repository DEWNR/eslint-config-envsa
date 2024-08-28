import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow regular expressions',
    code: `const foo = bar();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow void operator',
    code: `const foo = void bar();`,
    expectedErrors: [
      {
        message: "Avoid using 'void'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);