import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow loops without labels',
    code: `for (let i = 0; i < 10; i++) { break; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow labels on loops',
    code: `label: for (let i = 0; i < 10; i++) { break label; }`,
    expectedErrors: [
      {
        message: 'Unexpected labeled statement.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
