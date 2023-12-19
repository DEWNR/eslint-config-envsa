import baseConfig from '../.prettierrc.mjs';

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
  plugins: ['prettier-plugin-svelte'],
};

export default config;
