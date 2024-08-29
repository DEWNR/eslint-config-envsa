import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
