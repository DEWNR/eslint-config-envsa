/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow template literals or string concatenation',
    code: `const str = "Hello, " + "World!";`,
    expectedErrors: [],
  },
  {
    name: 'should disallow multiline strings using backslashes',
    code: `const str = "Hello, \\\nWorld!";`,
    expectedErrors: [
      {
        message: 'Multiline support is limited to ES6 template strings or concatenation.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
