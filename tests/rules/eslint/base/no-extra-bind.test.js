import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow necessary bind',
    code: `const boundFunc = func.bind(this);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnecessary bind',
    code: `const boundFunc = function() {}.bind(this);`,
    expectedErrors: [
      {
        message: 'The function binding is unnecessary.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
