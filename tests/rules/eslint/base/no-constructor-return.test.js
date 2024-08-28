import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow constructors without returns',
    code: `
      class Foo {
        constructor() {
          this.bar = "baz";
        }
      }
    `,
    expectedErrors: [],
  },
  {
    name: 'should disallow returning values in constructors',
    code: `
      class Foo {
        constructor() {
          return {};
        }
      }
    `,
    expectedErrors: [
      {
        message: 'Constructors of a class should not return a value.',
      },
    ],
  },
];
testAll(import.meta.filename, testCases);
