import { testAll } from '../../../common.js';

const ignoredRules = ['unicorn/prefer-ternary', 'no-constant-condition', 'no-else-return'];

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow consistent return with values',
    code: `
      function doSomething() {
        if (true) {
          return 1;
        } else {
          return 2;
        }
      }
    `,
    expectedErrors: [],
  },
  {
    name: 'should disallow inconsistent return',
    code: `
      function doSomething() {
        if (true) {
          return;
        }
        return 14;
      }
    `,
    expectedErrors: [
      {
        message: "Function 'doSomething' expected no return value.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases, ignoredRules);
