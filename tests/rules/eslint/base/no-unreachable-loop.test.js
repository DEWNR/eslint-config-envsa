import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow reachable loops',
    code: `for (let i = 0; i < 10; i++) { console.log(i); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unreachable loops',
    code: `return; for (let i = 0; i < 10; i++) { console.log(i); }`,
    expectedErrors: [
      {
        message: 'Unreachable loop.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
