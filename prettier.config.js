module.exports = {
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
  plugins: ['./node_modules/prettier-plugin-twig-melody'],
  twigPrintWidth: 120,
  twigSingleQuote: false,
  twigMultiTags: [
    'nav,endnav',
    'minify,endminify',
    'switch,case,default,endswitch',
    'ifchildren,endifchildren',
    'cache,endcache',
    'js,endjs',
  ],
};
