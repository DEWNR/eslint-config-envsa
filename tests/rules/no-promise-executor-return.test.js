import { testAll } from '../common';

/** @type {import('../common').TestCase[]} */
const testCases = [
  {
    name: 'should allow proper promise executor functions',
    code: `new Promise((resolve, reject) => { resolve(); });`,
    expectedErrors: [],
  },
  {
    name: 'should disallow returning from promise executor functions',
    code: `new Promise((resolve, reject) => { return resolve(); });`,
    expectedErrors: [
      {
        message: 'Do not return from a promise executor function.',
      },
    ],
  },
];

testAll(import.meta.filename, testCases);
