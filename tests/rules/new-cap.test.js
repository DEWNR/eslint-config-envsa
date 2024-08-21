import { testAll } from '../common.js';

/** @type {import('../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow constructor function names with capital letters',
    code: `const foo = new Foo();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow constructor function names with lowercase letters',
    code: `const foo = new foo();`,
    expectedErrors: [
      {
        message: 'A constructor name should start with an uppercase letter.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
