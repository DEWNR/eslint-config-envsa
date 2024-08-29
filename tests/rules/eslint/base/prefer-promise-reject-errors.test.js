import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow rejecting with an Error object',
    code: `Promise.reject(new Error('Something went wrong'));`,
    expectedErrors: [],
  },
  {
    name: 'should disallow rejecting with non-error values',
    code: `Promise.reject('Something went wrong');`,
    expectedErrors: [
      {
        message: 'Expected an Error object to be rejected.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
