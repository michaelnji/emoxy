import { resolve } from "path";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "Emoxy",
      fileName: "emoxy",
    },
   
  },
});
