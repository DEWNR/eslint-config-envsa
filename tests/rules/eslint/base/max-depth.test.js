import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
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
testRule(import.meta.filename, testCases);
