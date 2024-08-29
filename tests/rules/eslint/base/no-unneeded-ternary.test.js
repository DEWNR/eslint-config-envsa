import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow simplified expressions',
    code: `const isTrue = foo || false;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnecessary ternary expressions',
    code: `const isTrue = foo ? true : false;`,
    expectedErrors: [
      {
        message: 'Unnecessary use of boolean literals in conditional expression.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
