// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000", // Адрес вашего сервера Node.js
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/airtable": {
        target: "https://api.airtable.com/v0/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/airtable/, ""),
      },
    },
  },
});
