/// <reference types="node" />

import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import graphqlLoader from 'vite-plugin-graphql-loader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
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
            host: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/test/setup.ts'],
            css: true,
            coverage: {
                provider: 'v8',
                reporter: ['text', 'json', 'html'],
                exclude: [
                    'node_modules/',
                    'src/test/',
                    '**/*.d.ts',
                    '**/*.config.*',
                    '**/coverage/**',
                ],
            },
        },
        build: {
            outDir: 'dist',
            sourcemap: !isProduction,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: isProduction,
                    drop_debugger: isProduction,
                },
            },
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['react', 'react-dom', 'react-router-dom'],
                        graphql: ['@apollo/client', 'graphql'],
                    },
                },
            },
        },
        preview: {
            port: 5173,
            open: true,
        },
    };
});
