import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-dangling identifiers',
    code: `const foo = 1;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow dangling underscores in identifiers',
    code: `const _foo = 1;`,
    expectedErrors: [
      {
        message: "Unexpected dangling '_' in '_foo'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
