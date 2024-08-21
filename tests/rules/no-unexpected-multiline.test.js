import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow properly formatted code',
    code: `const foo = bar;\n(baz).qux();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unexpected multiline expressions',
    code: `const foo = bar\n(baz).qux();`,
    expectedErrors: [
      {
        message: "Unexpected newline between 'bar' and '('.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
