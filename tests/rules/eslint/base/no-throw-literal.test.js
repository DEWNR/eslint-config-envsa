import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow throwing Error objects',
    code: `throw new Error('An error occurred');`,
    expectedErrors: [],
  },
  {
    name: 'should disallow throwing literals',
    code: `throw 'An error occurred';`,
    expectedErrors: [
      {
        message: 'Expected an object to be thrown.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
