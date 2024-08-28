import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-Yoda conditions',
    code: `if (foo === 42) {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow Yoda conditions',
    code: `if (42 === foo) {}`,
    expectedErrors: [
      {
        message: 'Expected literal to be on the right side of ===.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
