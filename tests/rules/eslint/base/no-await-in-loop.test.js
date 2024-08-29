import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow await outside loops',
    code: `const result = await fetchData();`,
    expectedErrors: [],
  },
  {
    name: 'should allow await inside loops in a test file',
    codeFilename: 'valid.test.js',
    code: `for (const item of list) { const data = await item.getData(); };`,
    expectedErrors: [],
  },
  {
    name: 'should disallow await inside loops',
    code: `for (const item of list) { const data = await item.getData(); };`,
    expectedErrors: [
      {
        message: 'Unexpected `await` inside a loop.',
      },
    ],
  },
];
testRule(import.meta.filename, testCases);
