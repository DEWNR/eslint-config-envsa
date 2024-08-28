/* eslint-disable no-restricted-globals */
import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow template literals',
    code: `const str = \`Hello, \${name}!\`;`,
    expectedErrors: [],
  },
  {
    name: 'should disallow template curly braces in regular strings',
    code: `const str = "Hello, ${name}!";`,
    expectedErrors: [
      {
        message: 'Unexpected template string expression.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
