import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow named capture groups in regular expressions',
    code: `const match = /(?<year>\\d{4})-(?<month>\\d{2})/.exec(date);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnamed capture groups in regular expressions',
    code: `const match = /(\\d{4})-(\\d{2})/.exec(date);`,
    expectedErrors: [
      {
        message: 'Use named capture group instead.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
