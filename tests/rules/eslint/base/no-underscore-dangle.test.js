import { testRule } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow non-dangling identifiers',
    code: `const foo = 1;`,
    expectedErrors: [],
  },
  {
    name: 'should allow __filename',
    code: `const __filename = fileURLToPath(import.meta.url);;`,
    expectedErrors: [],
  },
  {
    name: 'should allow __dirname',
    code: `const __dirname = path.dirname(__filename);`,
    expectedErrors: [],
  },
  {
    name: 'should allowed dangling underscores in identifiers',
    code: `const _foo = 1;`,
    expectedErrors: [],
  },
];

testRule(import.meta.filename, testCases);
