import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: [
      "7669fb374cd0.ngrok-free.app", // add your Ngrok domain here
    ],
  },
});
