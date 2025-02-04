import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    // react(),
    dts({
      // rollupTypes: true,
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: true,
    lib: {
      name: "echolive",
      fileName: (format) => `index.${format}.js`,
      entry: path.resolve(__dirname, "index.ts"),
    },
    rollupOptions: {
      external: [],
      // external: ["react", "react-dom"],
      output: {
        exports: "auto",
        compact: true,
        // globals: {
        //   react: "React",
        //   "react-dom": "ReactDom",
        // },
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
