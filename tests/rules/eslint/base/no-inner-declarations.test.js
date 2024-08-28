import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow function declarations in the top-level scope',
    code: `function foo() {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow function declarations in nested blocks',
    code: `if (true) { function foo() {} }`,
    expectedErrors: [
      {
        message:
          'Function declarations should not be placed in blocks. Use a function expression or move the function to the top-level scope.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
