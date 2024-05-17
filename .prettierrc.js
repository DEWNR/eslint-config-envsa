/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 100,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 240,
      },
    },
    {
      files: '*.php',
      options: {
        phpVersion: process.env.DDEV_PHP_VERSION?.toString() ?? '8.2',
        printWidth: 80,
        parser: 'php',
        tabWidth: 4,
        trailingCommaPHP: true,
      },
    },
  ],
  pluginSearchDirs: ['.'],
  plugins: ['@prettier/plugin-php'],
};

export default config;
