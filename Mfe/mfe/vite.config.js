import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'mfe1',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.jsx',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        fs: {
            strict: false,
        },
        cors: {
            origin: '*', // Allow all origins
            methods: ['GET', 'POST'], // Allow these methods
            allowedHeaders: ['Content-Type'], // Allow these headers
        },
    },

})
