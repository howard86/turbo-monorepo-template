import { defineConfig } from "tsup";

// --format esm,cjs --watch --dts --external react
export default defineConfig((options) => ({
  dts: true,
  entry: ["src/index.tsx"],
  external: ["react", "clsx"],
  format: ["esm", "cjs"],
  treeshake: !options.watch,
}));
