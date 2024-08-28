import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow empty line before',
    code: `a {}
    
    @media {}`,
    expectedErrors: [],
  },
  {
    name: 'should allow after a comment',
    code: `/* comment */
    @media {}`,
    expectedErrors: [],
  },
  {
    name: 'should allow if the at rule is first nested',
    code: `a {
    @media {}
    }`,
    expectedErrors: [],
  },
  {
    name: 'should allow if the at rule is blockless following another blockless of the same name',
    code: `@import 'file.scss';
    @import 'package/name';`,
    expectedErrors: [],
  },
  {
    name: 'should allow @else',
    code: `@if {}
    @else {}`,
    expectedErrors: [],
  },
  {
    name: 'should ignore @apply even if not first nested',
    code: `a {
    color: green;
    @apply bg-red-500;
    }`,
    expectedErrors: [],
  },
  {
    name: 'should not allow at rule directly after selector',
    code: `a {} @media {}`,
    expectedErrors: [
      {
        message: 'Expected empty line before at-rule (at-rule-empty-line-before)',
      },
    ],
  },
  {
    name: 'should not allow at rule on next line after selector',
    code: `a {} 
    @media {}`,
    expectedErrors: [
      {
        message: 'Expected empty line before at-rule (at-rule-empty-line-before)',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
