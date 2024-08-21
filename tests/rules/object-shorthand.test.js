import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
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

testAll(import.meta.filename, testCases);
