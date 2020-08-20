import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  ignoreMomentLocale: true,
  title: `PANO`,
  history: { type: 'hash' },
  base: '/',
  publicPath: '/public/home/',
  outputPath: 'home',
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 3000,
  },
  routes: [
    {
      path: '/',
      component: '@/pages/Layout',
      routes: [
        {
          path: '/',
          component: '@/pages/Home'
        },
        {
          path: '/workList',
          component: '@/pages/WorkList'
        }
      ],
    },
  ],
});
