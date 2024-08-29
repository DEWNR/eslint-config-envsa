import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow shorthand object properties',
    code: `const foo = { bar };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow longhand object properties',
    code: `const foo = { bar: bar };`,
    expectedErrors: [
      {
        message: "Expected shorthand for 'bar'.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
