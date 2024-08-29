import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow files without BOM',
    code: `// No BOM in this file`,
    expectedErrors: [],
  },
  {
    name: 'should disallow files with BOM',
    code: `\uFEFF// BOM is present`,
    expectedErrors: [
      {
        message: 'Unexpected byte order mark (BOM).',
      },
    ],
  },
];

testRule(import.meta.filename, testCases);
