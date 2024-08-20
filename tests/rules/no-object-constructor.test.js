/* eslint-disable unicorn/prevent-abbreviations */
import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should disallow object constructor',
    code: `const people = new Object();`,
    expectedErrors: [
      {
        message: 'The object literal notation {} is preferable.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
