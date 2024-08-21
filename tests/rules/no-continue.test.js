import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow standard loop flow',
    code: `
      for (let i = 0; i < 10; i++) {
        if (i === 5) {
          break;
        }
      }
    `,
    expectedErrors: [],
  },
  {
    name: 'should disallow continue statement',
    code: `
      for (let i = 0; i < 10; i++) {
        if (i === 5) {
          continue;
        }
      }
    `,
    expectedErrors: [
      {
        message: "Unexpected use of 'continue' statement.",
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
