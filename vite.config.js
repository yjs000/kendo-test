import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@@': path.resolve(__dirname, './public')
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:13777/api',
                changeOrigin: true, // 무슨뜻??
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
