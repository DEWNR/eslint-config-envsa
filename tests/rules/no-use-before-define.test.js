import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow variable usage after definition',
    code: `function foo() {return 1;} console.log(foo);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow variable usage before definition',
    code: `console.log(foo); function foo() {return 1;}`,
    expectedErrors: [
      {
        message: "'foo' was used before it was defined.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
