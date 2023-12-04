import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: "server",
});
