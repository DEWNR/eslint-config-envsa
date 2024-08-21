import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow dot notation',
    code: `const value = obj.property;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow bracket notation when not necessary',
    code: `const value = obj["property"];`,
    expectedErrors: [
      {
        message: '["property"] is better written in dot notation.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
