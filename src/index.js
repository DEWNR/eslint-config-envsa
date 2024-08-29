import baseConfig from './configs/eslint/base.js';
import svelteConfig from './configs/eslint/svelte.js';
import vueConfig from './configs/eslint/vue.js';

export default {
  configs: {
    base: baseConfig,
    svelte: svelteConfig,
    vue: vueConfig,
  },
};
