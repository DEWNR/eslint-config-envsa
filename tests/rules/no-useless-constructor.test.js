import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow meaningful constructors',
    code: `class Foo { constructor(a) { this.a = a; } }`,
    expectedErrors: [],
  },
  {
    name: 'should disallow useless constructors',
    code: `class Foo { constructor() {} }`,
    expectedErrors: [
      {
        message: 'Useless constructor.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
