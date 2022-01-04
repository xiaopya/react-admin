import { defineConfig } from 'umi';
import routes from './router';
import defaultSettings from './defaultSettings';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    ...defaultSettings,
  },
  dva: {
    hmr: true,
  },
  routes,
  fastRefresh: {},
  proxy: {
    '/api/': {
      // 要代理的地址
      target: 'http://127.0.0.1:4004',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
  },
});
