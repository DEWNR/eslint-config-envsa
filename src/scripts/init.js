#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { format } from 'prettier';
import { satisfies } from 'semver';
import prettierConfig from '../prettier/index.js';

/** @type {string} */
const CWD = process.cwd();

/** @return {import('type-fest').PackageJson} */
function getPackageJson() {
  const packageJsonPath = path.join(CWD, 'package.json');

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

const PACKAGE_JSON = getPackageJson();

/** @return {string} */
function determinePackageManager() {
  const type = {
    pnpm: 'pnpm-lock.yaml',
    yarn: 'yarn.lock',
    npm: 'package-lock.json',
  };
  const packageManager =
    // Try getting the package manager direct from package.json
    PACKAGE_JSON.packageManager ||
    // Check if there is a lockfile and base package manager on that
    Object.keys(type).find((key) => fs.existsSync(path.join(CWD, type[key]))) ||
    // Fallback to npm
    'npm';

  return packageManager;
}

const PACKAGE_MANAGER = determinePackageManager();
const LOOKUP = {
  eslint: {
    old: ['.eslintrc.js', '.eslintrc.cjs', '.eslintrc.yaml', '.eslintrc.yml', '.eslintrc.json'],
    new: 'eslint.config.js',
    content:
      'import envsa from "@envsa/eslint-config";/** @type {import(\'eslint\').Linter.Config[]} */export default [eslint.configs.base];',
  },
  prettier: {
    old: [
      '.prettierrc.js',
      '.prettierrc.cjs',
      '.prettierrc.mjs',
      '.prettierrc.yaml',
      '.prettierrc.yml',
      '.prettierrc.json',
    ],
    new: 'prettier.config.js',
    content:
      'import envsa from "@envsa/eslint-config/prettier";/** @type {import(\'prettier\').Config} */export default {...envsa}',
  },
  stylelint: {
    old: [
      '.stylelintrc.js',
      '.stylelintrc.cjs',
      '.stylelintrc.mjs',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.json',
    ],
    new: 'stylelint.config.js',
    content:
      'import envsa from "@envsa/eslint-config/stylelint";/** @type {import(\'stylelint\').Config} */export default {...envsa}',
  },
};

function convertCommand(command) {
  let convertedCommand = command;
  if (PACKAGE_MANAGER === 'yarn')
    convertedCommand = command.replace('npm', 'yarn').replace('npx', 'yarn');
  if (PACKAGE_MANAGER === 'pnpm')
    convertedCommand = command.replace('npm', 'pnpm').replace('npx', 'pnpx');
  try {
    execSync(convertedCommand, { stdio: 'inherit' });
  } catch (error) {
    throw new Error(`Error executing convertedCommand "${convertedCommand}": ${error.message}`);
  }
}

async function handleConfigFiles(name) {
  const config = LOOKUP[name];
  // If old config file exists, rename it to _old
  for (const file of config.old) {
    const oldPath = path.join(CWD, file);
    try {
      fs.renameSync(oldPath, `${oldPath}_old`);
    } catch {
      // Ignore if file doesn't exist
    }
  }

  // Create new config file
  const newPath = path.join(CWD, config.new);
  const content = await format(config.content, prettierConfig);
  fs.writeFileSync(newPath, content);
}

function installPeerDependencies() {
  /** @type {import('type-fest').PackageJson} */
  const localPackage = JSON.parse(
    fs.readFileSync(path.resolve(CWD, './node_modules/@envsa/eslint-config/package.json'), 'utf8')
  );
  const { peerDependencies } = localPackage;
  const loadedDependencies = {
    ...PACKAGE_JSON.dependencies,
    ...PACKAGE_JSON.devDependencies,
  };

  // Find each peer dependency in loaded dependencies
  for (const dep of Object.keys(peerDependencies)) {
    if (loadedDependencies[dep] && satisfies(loadedDependencies[dep], peerDependencies[dep])) {
      delete peerDependencies[dep];
    }
  }

  const dependenciesToInstall = Object.keys(peerDependencies)
    .map((dep) => `${dep}@${peerDependencies[dep]}`)
    .join(' ');

  convertCommand(`npm install ${dependenciesToInstall}`);
}

function init() {
  // eslint-disable-next-line no-console
  console.log('Initializing ESLint configuration...');

  installPeerDependencies();
  handleConfigFiles('eslint');
  handleConfigFiles('prettier');
  handleConfigFiles('stylelint');
}

init();