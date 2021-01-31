module.exports = {
  trailingComma: 'none',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: ['./node_modules/prettier-plugin-twig-melody'],
  twigMultiTags: [
    'nav,endnav',
    'switch, case,default,endswitch',
    'ifchildren,endifchildren',
    'cache,endcache'
  ],
  twigPrintWidth: 100
};
