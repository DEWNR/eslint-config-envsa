import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow destructuring assignment',
    code: `const [foo, bar] = arr;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow manual array element access',
    code: `const foo = arr[0]; const bar = arr[1];`,
    expectedErrors: [
      {
        message: 'Use array destructuring.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
