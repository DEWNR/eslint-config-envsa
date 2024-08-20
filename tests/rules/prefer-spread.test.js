import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
