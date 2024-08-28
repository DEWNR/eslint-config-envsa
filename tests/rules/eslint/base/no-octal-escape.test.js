import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-octal escape sequences',
    code: `const str = "\\x41";`,
    expectedErrors: [],
  },
  {
    name: 'should disallow octal escape sequences',
    code: `const str = "\\251";`,
    expectedErrors: [
      {
        message: 'Octal escape sequences are not allowed.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
