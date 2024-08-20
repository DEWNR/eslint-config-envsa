import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow capitalized comments',
    code: `// This is a comment`,
    expectedErrors: [],
  },
  {
    name: 'should disallow lowercase comments',
    code: `// this is a comment`,
    expectedErrors: [
      {
        message: 'Comments should not begin with a lowercase character.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
