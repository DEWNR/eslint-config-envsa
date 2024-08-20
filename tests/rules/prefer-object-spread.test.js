import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow object spread syntax',
    code: `const obj = { ...foo };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow Object.assign() for shallow copies',
    code: `const obj = Object.assign({}, foo);`,
    expectedErrors: [
      {
        message: "Use object spread instead of 'Object.assign()'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
