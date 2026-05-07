import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false
  },
  ssr: {
    noExternal: ["react-helmet-async"]
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      preload: "swap",
      pruneSource: false
    }
  }
});
