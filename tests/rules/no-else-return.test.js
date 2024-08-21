import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow return without else',
    code: `
      function foo() {
        if (a) {
          return true;
        }
        return false;
      }
    `,
    expectedErrors: [],
  },
  {
    name: 'should disallow return with else',
    code: `
      function foo() {
        if (a) {
          return true;
        } else {
          return false;
        }
      }
    `,
    expectedErrors: [
      {
        message: "Unnecessary 'else' after 'return'.",
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
