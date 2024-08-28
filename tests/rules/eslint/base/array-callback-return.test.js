import { testAll } from '../../../common.js';

/** @type {import('../../../common.js').TestCase[]} */
const testCases = [
  {
    name: 'should allow returning a value in array method',
    code: `const result = [1, 2, 3].map(x => x * 2);`,
    expectedErrors: [],
  },
  {
    name: 'should disallow missing return in array method',
    code: `[1, 2, 3].map(x => { x * 2; });`,
    expectedErrors: [
      {
        message: 'Array.prototype.map() expects a return value from arrow function.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
