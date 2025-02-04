import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm", "iife"],
  minify:true,
  dts: true,
  external: ["react", "react-dom"], // Exclude from the bundle
  sourcemap: true,
  splitting: false,
  clean: true,
});
