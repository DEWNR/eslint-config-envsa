import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow necessary renaming',
    code: `const { foo: bar } = obj;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow useless renaming',
    code: `const { foo: foo } = obj;`,
    expectedErrors: [
      {
        message: 'Unnecessarily renamed variable.',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
