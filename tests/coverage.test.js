import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import rules from '../src/rules/base';

describe('Do we have tests for all the rules that we specify', () => {
  test('one test file per rule', () => {
    const tests = fs.readdirSync('./tests/rules');
    const ruleNames = Object.keys(rules);
    const testNames = tests.map((filename) => path.basename(filename, '.test.js'));

    expect(testNames.sort()).toEqual(ruleNames.sort());
  });
});
