import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
