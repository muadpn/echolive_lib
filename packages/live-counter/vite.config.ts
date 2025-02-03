import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    lib: {
      name: "uploader",
      fileName: (format) => `index.${format}.js`,
      entry: path.resolve(__dirname, "index.ts"),
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
