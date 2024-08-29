import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow capitalized comments',
    code: `// This is a comment`,
    expectedErrors: [],
  },
  {
    name: 'should allow non-capitalized comments if they directly follow a capitalized comment',
    code: `// This is a comment\n// this is another comment that is lowercase`,
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

testRule(import.meta.filename, testCases);
