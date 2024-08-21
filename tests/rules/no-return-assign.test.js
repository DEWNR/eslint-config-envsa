import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow returning a value',
    code: `function foo() { return bar; }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow returning assignment',
    code: `function foo() { return bar = 1; }`,
    expectedErrors: [
      {
        message: 'Return statement should not contain assignment.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
