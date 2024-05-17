import baseConfig from '../.prettierrc.js';

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  overrides: [
    ...baseConfig.overrides,
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  plugins: [...baseConfig.plugins, 'prettier-plugin-svelte'],
};

export default config;
