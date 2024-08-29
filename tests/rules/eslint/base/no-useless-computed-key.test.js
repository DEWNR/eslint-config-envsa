import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow useful computed keys',
    code: `const obj = { [foo]: 'bar' };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow useless computed keys',
    code: `const obj = { ['foo']: 'bar' };`,
    expectedErrors: [
      {
        message: "Unnecessarily computed property ['foo'] found.",
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
