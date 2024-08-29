import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow other functions',
    code: `alert("test");`,
    expectedErrors: [],
  },
  {
    name: 'should disallow console.log usage',
    code: `console.log("test");`,
    expectedErrors: [
      {
        message: 'Unexpected console statement.',
      },
    ],
  },
];
testRule(import.meta.filename, testCases);
