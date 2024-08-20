/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow used variables',
    code: `const foo = 1; console.log(foo);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unused variables',
    code: `const foo = 1;`,
    expectedErrors: [
      {
        message: "'foo' is defined but never used.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
