import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow strict equality',
    code: `if (a === b) {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow loose equality',
    code: `if (a == b) {}`,
    expectedErrors: [
      {
        message: "Expected '===' and instead saw '=='.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
