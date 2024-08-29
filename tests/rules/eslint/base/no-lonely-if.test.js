import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow else if',
    code: `if (a) {} else if (b) {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow lonely if inside else',
    code: `if (a) {} else { if (b) {} }`,
    expectedErrors: [
      {
        message: 'Unexpected if as the only statement in an else block.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
