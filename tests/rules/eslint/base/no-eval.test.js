import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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
testRule(import.meta.filename, testCases);
