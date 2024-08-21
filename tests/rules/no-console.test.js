import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
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
testAll(import.meta.filename, testCases);
