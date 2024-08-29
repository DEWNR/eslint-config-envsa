import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow other functions',
    code: `console.log("test");`,
    expectedErrors: [],
  },
  {
    name: 'should disallow alert usage',
    code: `alert("test");`,
    expectedErrors: [
      {
        message: 'Unexpected alert.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
