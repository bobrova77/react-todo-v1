import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // Это помогает избежать ошибок при загрузке .env
  },
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// // Загружаем `.env`
// export default defineConfig(({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   return {
//     plugins: [react()],
//   };
// });
