import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow instantiation of objects with new',
    code: `const foo = new Foo();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow usage of new without assignment',
    code: `new Foo();`,
    expectedErrors: [
      {
        message: "Do not use 'new' for side effects.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
