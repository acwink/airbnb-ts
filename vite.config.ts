import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = (pathname: string) => path.resolve(__dirname, pathname);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
});
