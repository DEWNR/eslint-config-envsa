import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import eslintBaseRules from '../src/rules/base.js';
import stylelintBaseRules from '../src/stylelint/rules/base.js';

describe('Do we have tests for all the rules that we specify', () => {
  test('one test file per eslint base rule', () => {
    const tests = fs.readdirSync('./tests/rules/eslint/base/');
    const ruleNames = Object.keys(eslintBaseRules);
    const testNames = tests.map((filename) => path.basename(filename, '.test.js'));

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });

  test('one test file per stylelint base rule', () => {
    const tests = fs.readdirSync('./tests/rules/stylelint/base/');
    const ruleNames = Object.keys(stylelintBaseRules);
    const testNames = tests.map((filename) => path.basename(filename, '.test.js'));

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });
});
