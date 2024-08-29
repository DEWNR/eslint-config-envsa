import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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

testRule(import.meta.filename, testCases);
