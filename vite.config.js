import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const developmentServerOptions = {
    host: true,
    port: 3000,
};

export default defineConfig({
    plugins: [react({ reactRefreshHost: "http://localhost:3000" }), tailwindcss()],
    preview: developmentServerOptions,
    server: developmentServerOptions,
});
