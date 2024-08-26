/** @type {import('prettier').Config} */
export default {
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
      files: '*.json5',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
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
    {
      files: '*.{yml,yaml}',
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
  ],
  plugins: [
    'prettier-plugin-organize-imports',
    '@prettier/plugin-php',
    // 'prettier-plugin-tailwindcss',
  ],
  organizeImportsSkipDestructiveCodeActions: true,
};
