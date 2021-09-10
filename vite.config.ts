import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      '/s_api': {
        target: 'https://www.ybx.one',
        changeOrigin: true,
      }
    }
  }
})
