import { defineConfig } from "vite";

// import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    dts({
      rollupTypes: true,
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

      output: {
        exports: "auto",
        compact: true,
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
