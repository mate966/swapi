/// <reference types="node" />

import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import graphqlLoader from 'vite-plugin-graphql-loader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), graphqlLoader()],

    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@store': resolve(__dirname, './src/store'),
            '@services': resolve(__dirname, './src/services'),
            '@types': resolve(__dirname, './src/types'),
            '@utils': resolve(__dirname, './src/utils'),
            '@assets': resolve(__dirname, './src/assets'),
            '@styles': resolve(__dirname, './src/styles'),
            '@routes': resolve(__dirname, './src/routes'),
            '@layouts': resolve(__dirname, './src/layouts'),
            '@graphQL': resolve(__dirname, './src/graphQL'),
        },
    },
    server: {
        port: 5173,
        open: true,
        cors: true,
        // host: '192.168.55.108',
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
    },
    preview: {
        port: 5173,
        open: true,
    },
});
