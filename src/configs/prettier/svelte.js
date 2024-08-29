import baseConfig from './index.js';

/** @type {import('src/prettier').Config} */
export default {
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
