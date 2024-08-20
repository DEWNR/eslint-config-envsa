import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow usage of non-restricted properties',
    code: `Math.max(1, 2);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow usage of restricted properties',
    code: `object['__proto__'] = {};`,
    expectedErrors: [
      {
        message: "The property '__proto__' is restricted.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);