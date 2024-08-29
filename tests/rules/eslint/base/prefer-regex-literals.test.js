import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow regular expressions',
    code: `const regex = /foo/;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow RegExp constructor for literals',
    code: `const regex = new RegExp('foo');`,
    expectedErrors: [
      {
        message: "Use regex literal instead of 'RegExp' constructor.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
