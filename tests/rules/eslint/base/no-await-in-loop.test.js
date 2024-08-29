import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow await outside loops',
    code: `const result = await fetchData();`,
    expectedErrors: [],
  },
  {
    name: 'should disallow await inside loops',
    code: `for (let i = 0; i < 10; i++) { const result = await fetchData(); };`,
    expectedErrors: [
      {
        message: 'Unexpected await inside a loop.',
      },
    ],
  },
];
testRule(import.meta.filename, testCases);
