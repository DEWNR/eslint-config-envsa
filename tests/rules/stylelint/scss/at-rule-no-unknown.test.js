import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow empty line before',
    code: `a {}
    
    @media {}`,
    expectedErrors: [],
  },
];

testRule(import.meta.filename, testCases);
