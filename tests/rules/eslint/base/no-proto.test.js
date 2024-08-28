import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow object prototypes with Object.getPrototypeOf()',
    code: `const proto = Object.getPrototypeOf(obj);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow using __proto__',
    code: `const proto = obj.__proto__;`,
    expectedErrors: [
      {
        message: "Do not use '__proto__'.",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
