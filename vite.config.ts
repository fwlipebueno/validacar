import { defineConfig } from 'vite';
import * as reactPlugin from '@vitejs/plugin-react';

const react = reactPlugin.default ?? reactPlugin;

export default defineConfig({
  plugins: [react()],
});
