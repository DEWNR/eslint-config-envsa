import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow single assignments',
    code: `const a = 1; const b = 2;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow multiple assignments in a single statement',
    code: `const a = b = c = 1;`,
    expectedErrors: [
      {
        message: 'Unexpected chained assignment.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
