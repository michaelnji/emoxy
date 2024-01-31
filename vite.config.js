import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "Emoxy",
      fileName: "emoxy",
    },
   
  },
});