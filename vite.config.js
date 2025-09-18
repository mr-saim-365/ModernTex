import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: [
      "348abcdc27ea.ngrok-free.app", // add your Ngrok domain here
    ],
  },
});
