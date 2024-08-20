import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
