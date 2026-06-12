import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createContactResponse } from './server/contactEmail.js';

function contactApiDevPlugin() {
  return {
    name: 'liftlounge-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response) => {
        const result = await createContactResponse(request);

        Object.entries(result.headers || {}).forEach(([key, value]) => {
          response.setHeader(key, value);
        });

        response.statusCode = result.status;
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.end(JSON.stringify(result.body));
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  Object.entries(env).forEach(([key, value]) => {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  });

  return {
    plugins: [react(), contactApiDevPlugin()],
  };
});
