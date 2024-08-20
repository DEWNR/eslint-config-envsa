import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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

testAll(import.meta.filename, testCases);
