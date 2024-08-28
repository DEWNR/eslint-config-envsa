import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow default at rules',
    code: `@media (max-width: 960px) {}`,
    expectedErrors: [],
  },
  {
    name: 'should disallow unknown rules',
    code: `@unknown {}`,
    expectedErrors: [
      {
        message: 'Unexpected unknown at-rule "@unknown" (at-rule-no-unknown)',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
