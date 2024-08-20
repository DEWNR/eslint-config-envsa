import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow necessary blocks',
    code: `if (true) { console.log('test'); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnecessary blocks',
    code: `{ { console.log('Unnecessary block'); } }`,
    expectedErrors: [
      {
        message: 'Block is redundant.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
