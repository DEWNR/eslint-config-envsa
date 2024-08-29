/* eslint-disable unicorn/prevent-abbreviations */
import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
