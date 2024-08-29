import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: '',
    code: ``,
    expectedErrors: [
      {
        message: '',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
