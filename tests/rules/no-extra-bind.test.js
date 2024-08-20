import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow necessary bind',
    code: `const boundFunc = func.bind(this);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unnecessary bind',
    code: `const boundFunc = function() {}.bind(this);`,
    expectedErrors: [
      {
        message: 'The function binding is unnecessary.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
