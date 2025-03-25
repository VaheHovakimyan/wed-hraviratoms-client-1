import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ["@mui/material", "@mui/icons-material"],
  },
  resolve: {
    alias: {
      "@mui/material/utils": "@mui/material/node/utils/index.js",
    },
  },
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";