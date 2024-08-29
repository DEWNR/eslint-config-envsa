import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-eval methods',
    code: `setTimeout(function() { console.log('test'); }, 1000);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow implied eval via setTimeout',
    code: `setTimeout("console.log('test')", 1000);`,
    expectedErrors: [
      {
        message: 'Implied eval. Consider passing a function instead of a string.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
