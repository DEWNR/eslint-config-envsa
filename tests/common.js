import { loadESLint } from 'eslint';
import path from 'node:path';
import stylelint from 'stylelint';
import { describe, expect, test } from 'vitest';

const FlatESLint = await loadESLint({ useFlatConfig: true });
const eslint = new FlatESLint();

const defaultIgnoredRules = {
  eslint: [
    'unicorn/filename-case',
    'unicorn/no-empty-file',
    'unicorn/prefer-module',
    'no-empty',
    'no-undef',
    'no-unused-vars',
    'no-unused-expressions',
    'prettier/prettier',
  ],
  stylelint: ['media-feature-range-notation', 'block-no-empty'],
};

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
 *
 * @param {'eslint'|'stylelint'} lintFlavour - Which linter do are you using, `eslint` or `stylelint`.
 * @param {string} code - String of code that you want to lint
 * @param {Record<string, any>} [rules] - Rules for this configuration
 */
async function lintCode(lintFlavour, code, codeFilename) {
  if (lintFlavour === 'eslint') {
    return await eslint.lintText(code, {
      ...(codeFilename.length > 0 && { filePath: codeFilename }),
    });
  }

  if (lintFlavour === 'stylelint') {
    const { results } = await stylelint.lint({
      code,
      ...(codeFilename.length > 0 && { codeFilename }),
    });
    return results;
  }

  throw new Error(`Invalid lintFlavour <${lintFlavour}>`);
}

/**
 *
 * @param {'eslint'|'stylelint'} lintFlavour - Which linter do are you using, `eslint` or `stylelint`.
 * @param {import('stylelint').LintResult|import('eslint').ESLint.LintResult} result - Result from linting function
 * @returns array
 */
function normalizeResult(lintFlavour, result) {
  if (lintFlavour === 'eslint') {
    return result.messages;
  }

  if (lintFlavour === 'stylelint') {
    return result.warnings.map((warning) => {
      return { ruleId: warning.rule, message: warning.text };
    });
  }

  throw new Error(`Invalid lintFlavour <${lintFlavour}>`);
}

/**
 * Test all of the test cases together.
 *
 * @param {string} filepath - Pass `import.meta.filename`.
 * @param {TestCase[]} testCases - Test cases for a given rule.
 * @param {string[]} [ignoredTestRules] - List of rule ids to ignore.
 */
export async function testRule(filepath, testCases, ignoredTestRules = []) {
  const lintFlavour = filepath.split('/tests/rules/')[1]?.split('/')[0];
  const ignoredRules = new Set([...defaultIgnoredRules[lintFlavour], ...ignoredTestRules]);
  const filename = path.basename(filepath, '.test.js');

  if (ignoredRules.has(filename)) {
    ignoredRules.delete(filename);
  }

  describe(filename, () => {
    for (const { name, code, codeFilename = '', expectedErrors } of testCases) {
      // eslint-disable-next-line no-loop-func
      test(name, async () => {
        const [result] = await lintCode(lintFlavour, code, codeFilename);
        const errors = normalizeResult(lintFlavour, result).filter(
          (message) => !ignoredRules.has(message.ruleId)
        );

        expect(errors).toHaveLength(expectedErrors.length);

        for (const [index, expectedError] of expectedErrors.entries()) {
          expect(errors[index].ruleId).toBe(filename);
          expect(errors[index].message).toBe(expectedError.message);
        }
      });
    }
  });
}
