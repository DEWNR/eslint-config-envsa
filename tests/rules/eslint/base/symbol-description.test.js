import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow symbols with descriptions',
    code: `const sym = Symbol('description');`,
    expectedErrors: [],
  },
  {
    name: 'should disallow symbols without descriptions',
    code: `const sym = Symbol();`,
    expectedErrors: [
      {
        message: 'Expected symbol to have a description.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
