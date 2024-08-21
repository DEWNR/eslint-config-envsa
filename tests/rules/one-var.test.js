/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow one variable declaration per statement',
    code: `let foo = 1;\nlet bar = 2;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow multiple variable declarations in one statement',
    code: `let foo = 1, bar = 2;`,
    expectedErrors: [
      {
        message: "Combine 'foo' and 'bar' into a single declaration.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
