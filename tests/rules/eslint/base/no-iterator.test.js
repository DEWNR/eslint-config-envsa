import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow standard for loops',
    code: `for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow usage of __iterator__',
    code: `Array.prototype.__iterator__ = function() {};`,
    expectedErrors: [
      {
        message: "Do not use '__iterator__'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
