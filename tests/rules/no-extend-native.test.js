import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow custom methods not on native objects',
    code: `const foo = { bar() {} };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow extending native objects',
    code: `Object.prototype.foo = function() {};`,
    expectedErrors: [
      {
        message: 'Do not extend native objects.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);