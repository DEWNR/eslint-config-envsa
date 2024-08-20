import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow primitive values',
    code: `const str = String(123);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow using new with wrappers',
    code: `const str = new String(123);`,
    expectedErrors: [
      {
        message: "Do not use 'new' with wrappers (e.g., new String, new Number, new Boolean).",
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
