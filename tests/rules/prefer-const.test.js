import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow const for variables that are not reassigned',
    code: `const foo = 1;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow let for variables that are not reassigned',
    code: `let foo = 1;`,
    expectedErrors: [
      {
        message: "'foo' is never reassigned. Use 'const' instead.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
