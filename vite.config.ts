/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssrBuildDir: '/dist/apps/my-app/ssr',
      static: true,
      prerender: {
        routes: async () => {
          return [
            '/',
            '/blog',
            '/about',
            '/blog/my-first-post',
            '/blog/my-second-post',
            '/blog/2023-09-30-tailwind.md',
          ];
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
