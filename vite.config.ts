import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync } from "fs";

const routes = [
  "canopies",
  "fencing",
  "warehouses",
  "palace-canopies",
  "pool-canopies",
  "structural-canopies",
  "pergolas",
  "majalis",
  "roofing-tiles",
  "fabric-houses",
  "sandwich-warehouses",
  "building-fencing",
  "railings",
  "aluminum",
  "colored-wood",
  "painting",
  "waterproofing",
  "thermal-insulation",
  "landscaping",
  "school-canopies",
  "laser-cut-canopies",
  "arch-canopies",
  "garage-canopies",
  "roof-insulation",
  "water-thermal-insulation",
  "cladding-canopies",
  "pyramidal-canopies",
];

export default defineConfig(({ mode }) => ({
  base: "/al-benaa-alameg/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),

    mode === "development" && componentTagger(),

    {
      name: "generate-route-pages",

      closeBundle() {
        if (mode !== "production") return;

        try {
          const indexFile = path.resolve("dist/index.html");

          for (const route of routes) {
            const routeDir = path.resolve("dist", route);

            mkdirSync(routeDir, { recursive: true });

            copyFileSync(
              indexFile,
              path.join(routeDir, "index.html")
            );
          }

          console.log(
            `Generated ${routes.length} static route pages for GitHub Pages.`
          );

          // Keep GitHub Pages SPA fallback
          copyFileSync(
            path.resolve("public/404.html"),
            path.resolve("dist/404.html")
          );

          // Keep optional server configuration files if they exist
          try {
            copyFileSync(
              path.resolve("public/.htaccess"),
              path.resolve("dist/.htaccess")
            );
          } catch {}

          try {
            copyFileSync(
              path.resolve("public/web.config"),
              path.resolve("dist/web.config")
            );
          } catch {}
        } catch (error) {
          console.error(
            "Failed to generate static route pages:",
            error
          );
          throw error;
        }
      },
    },
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    cssCodeSplit: true,

    minify: mode === "production" ? "esbuild" : false,

    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": [
            "react",
            "react-dom",
            "react-router-dom",
          ],

          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-accordion",
          ],

          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },
}));
