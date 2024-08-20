import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
