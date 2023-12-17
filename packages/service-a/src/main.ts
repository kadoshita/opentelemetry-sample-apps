import { fastify } from 'fastify';
import cors from '@fastify/cors';

const server = fastify({ logger: true });

(async () => {
  await server.register(cors);

  server.get('/', async () => {
    return { service: 'service-a', result: 'success' };
  });

  await server.listen({ port: 3001, host: '0.0.0.0' });
  console.info('Server listening on port 3001');
})();
