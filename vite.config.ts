import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cvPlugin } from "./scripts/cv-plugin";

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
      watch: {
        // Avoid Linux inotify limits when other projects exhaust file watchers.
        usePolling: true,
        interval: 1000,
      },
    },
    plugins: [react(), cvPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
