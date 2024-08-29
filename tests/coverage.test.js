import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import rulesEslintBase from '../src/rules/eslint/base.js';
import rulesEslintImport from '../src/rules/eslint/import.js';
import rulesEslintUnicorn from '../src/rules/eslint/unicorn.js';
import rulesStylelintBase from '../src/rules/stylelint/base.js';
import rulesStylelintScss from '../src/rules/stylelint/scss.js';

describe('Do we have tests for all the rules that we specify', () => {
  test('one test file per eslint base rule', () => {
    const tests = fs.readdirSync('tests/rules/eslint/base/');
    const ruleNames = Object.keys(rulesEslintBase);
    const testNames = tests.map((filename) => path.basename(filename, '.test.js'));

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });

  test('one test file per eslint import rule', () => {
    const tests = fs.readdirSync('./tests/rules/eslint/import');
    const ruleNames = Object.keys(rulesEslintImport);
    const testNames = tests.map((filename) => `import-x/${path.basename(filename, '.test.js')}`);

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });

  test('one test file per eslint unicorn rule', () => {
    const tests = fs.readdirSync('./tests/rules/eslint/unicorn');
    const ruleNames = Object.keys(rulesEslintUnicorn);
    const testNames = tests.map((filename) => `unicorn/${path.basename(filename, '.test.js')}`);

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });

  test('one test file per stylelint base rule', () => {
    const tests = fs.readdirSync('./tests/rules/stylelint/base');
    const ruleNames = Object.keys(rulesStylelintBase);
    const testNames = tests.map((filename) => path.basename(filename, '.test.js'));

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });

  test('one test file per stylelint scss rule', () => {
    const tests = fs.readdirSync('./tests/rules/stylelint/scss');
    const ruleNames = Object.keys(rulesStylelintScss);
    const testNames = tests.map((filename) => `scss/${path.basename(filename, '.test.js')}`);

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });
});
