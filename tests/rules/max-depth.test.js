import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow nesting within max depth',
    code: `
      if (a) {
        if (b) {
          if (c) {}
        }
      }
    `,
    expectedErrors: [],
  },
  {
    name: 'should disallow nesting beyond max depth',
    code: `
      if (a) {
        if (b) {
          if (c) {
            if (d) {}
          }
        }
      }
    `,
    expectedErrors: [
      {
        message: 'Blocks are nested too deeply (4).',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
