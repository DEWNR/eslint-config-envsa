/* eslint-disable no-restricted-globals */
import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow template literals',
    code: `const str = \`Hello, ${name}!\`;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow string concatenation',
    code: `const str = 'Hello, ' + name + '!';`,
    expectedErrors: [
      {
        message: 'Use template literals instead of string concatenation.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
