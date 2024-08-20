import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow simple string literals',
    code: `const str = 'Hello, world!';`,
    expectedErrors: [],
  },
  {
    name: 'should disallow useless string concatenation',
    code: `const str = 'Hello, ' + 'world!';`,
    expectedErrors: [
      {
        message: 'Unnecessary concatenation of literals.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);