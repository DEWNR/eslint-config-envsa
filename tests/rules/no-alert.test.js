import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
