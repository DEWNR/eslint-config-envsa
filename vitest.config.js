import path from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      tests: path.resolve(dirname, 'tests'),
      src: path.resolve(dirname, 'src'),
    },
  },
});
