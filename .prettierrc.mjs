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
  ],
};

export default config;
