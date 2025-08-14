// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static', // Esencial para sitios estáticos
  adapter: vercel({
    // Configuraciones adicionales si son necesarias
  }),
  // Otras configuraciones opcionales:
  //site: 'https://tudominio.com', // Si tienes dominio personalizado
  //integrations: [
    // Aquí tus integraciones si usas alguna
  //]
});