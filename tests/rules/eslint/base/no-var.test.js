/* eslint-disable unicorn/prevent-abbreviations */
import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
