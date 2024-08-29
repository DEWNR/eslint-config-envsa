import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow array spread syntax',
    code: `const arr = [...foo];`,
    expectedErrors: [],
  },
  {
    name: 'should disallow Function.prototype.apply() for spreading arrays',
    code: `const arr = Array.prototype.slice.apply(foo);`,
    expectedErrors: [
      {
        message: "Use array spread instead of 'Function.prototype.apply()'.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
