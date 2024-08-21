import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow for-in with hasOwnProperty check',
    code: `for (let key in obj) { if (obj.hasOwnProperty(key)) { console.log(key); } };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow for-in without hasOwnProperty check',
    code: `for (let key in obj) { console.log(key); };`,
    expectedErrors: [
      {
        message:
          'The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
