import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow other evaluation methods',
    code: `JSON.parse("{}");`,
    expectedErrors: [],
  },
  {
    name: 'should disallow eval usage',
    code: `eval("console.log('test')");`,
    expectedErrors: [
      {
        message: 'eval can be harmful.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
