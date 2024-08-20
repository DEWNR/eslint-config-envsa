import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
