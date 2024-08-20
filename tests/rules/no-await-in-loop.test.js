import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
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
testAll(import.meta.filename, testCases);