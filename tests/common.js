import { loadESLint } from 'eslint';
import path from 'node:path';
import { beforeAll, describe, expect, test } from 'vitest';

const defaultIgnoredRules = [
  'unicorn/filename-case',
  'unicorn/no-empty-file',
  'no-empty',
  'no-undef',
  'no-unused-vars',
  'no-unused-expressions',
  'prettier/prettier',
];

/**
 * @typedef ExpectedError
 * @property {string} message - Error message.
 */
/**
 * @typedef TestCase
 * @property {string} name - Name of test.
 * @property {string} code - Code to test.
 * @property {ExpectedError[]} [expectedErrors] - If the test is expected to error put those errors here.
 */

/**
 * Test all of the test cases together.
 *
 * @param {string} filepath - Pass `import.meta.filename`.
 * @param {TestCase[]} testCases - Test cases for a given rule.
 * @param {string[]} [ignoredTestRules] - List of rule ids to ignore.
 */
export async function testAll(filepath, testCases, ignoredTestRules = []) {
  const ignoredRules = new Set([...defaultIgnoredRules, ...ignoredTestRules]);
  const filename = path.basename(filepath, '.test.js');

  if (ignoredRules.has(filename)) {
    ignoredRules.delete(filename);
  }

  describe(filename, () => {
    let eslint;

    beforeAll(async () => {
      const FlatESLint = await loadESLint({ useFlatConfig: true });
      eslint = new FlatESLint();
    });

    for (const { name, code, expectedErrors } of testCases) {
      // eslint-disable-next-line no-loop-func
      test(name, async () => {
        const results = await eslint.lintText(code);
        const errors = results[0].messages.filter((message) => !ignoredRules.has(message.ruleId));

        expect(errors).toHaveLength(expectedErrors.length);

        for (const [index, expectedError] of expectedErrors.entries()) {
          expect(errors[index].ruleId).toBe(filename);
          expect(errors[index].message).toBe(expectedError.message);
        }
      });
    }
  });
}
