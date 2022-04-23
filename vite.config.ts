import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
  },
  mode: "development",
  build: {
    sourcemap: "inline",
    lib: {
      entry: "src/extra/mount/index.ts",
      name: "Mount",
      formats: ["iife"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        // manualChunks: undefined,
        inlineDynamicImports: true,
      },
    },
  },
});
