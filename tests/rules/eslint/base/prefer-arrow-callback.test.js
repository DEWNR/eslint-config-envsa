import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow arrow function callbacks',
    code: `arr.map(item => item * 2);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow non-arrow function callbacks',
    code: `arr.map(function(item) { return item * 2; });`,
    expectedErrors: [
      {
        message: 'Prefer arrow functions as callbacks.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
