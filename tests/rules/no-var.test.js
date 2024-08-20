/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow let or const declarations',
    code: `const foo = 1;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow var declarations',
    code: `var foo = 1;`,
    expectedErrors: [
      {
        message: "'var' is not allowed. Use 'let' or 'const' instead.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
