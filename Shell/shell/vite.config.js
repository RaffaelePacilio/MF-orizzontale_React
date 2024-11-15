import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        mfe1: 'http://localhost:5173/dist/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    fs: {
      strict: false,
    },
    cors: {
      origin: '*', // Allow all origins
      methods: ['GET', 'POST'], // Allow these methods
      allowedHeaders: ['Content-Type'], // Allow these headers
    }
  },
})
