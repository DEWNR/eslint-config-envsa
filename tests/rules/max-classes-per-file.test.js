import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow one class per file',
    code: `class Foo {};`,
    expectedErrors: [],
  },
  {
    name: 'should disallow more than one class per file',
    code: `
      class Foo {};
      class Bar {};
    `,
    expectedErrors: [
      {
        message: 'Only one class per file is allowed.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);