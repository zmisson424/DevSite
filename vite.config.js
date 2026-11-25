import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the old Create React App output folder so the hosting config doesn't change.
    outDir: "build",
  },
});
