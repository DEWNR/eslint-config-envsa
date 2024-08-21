import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
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
        message: 'Expected non-Yoda condition.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
