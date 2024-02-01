import { resolve } from "path";
import { defineConfig } from "vite";
import banner from 'vite-plugin-banner';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import removeConsole from "vite-plugin-remove-console";
import pkg from './package.json';
/** @type {import('vite').UserConfig} */
export default defineConfig({
   plugins: [
     nodePolyfills(),
     removeConsole(),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    ),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "Emoxy",
      fileName: "emoxy",
    },
   
  },
});
