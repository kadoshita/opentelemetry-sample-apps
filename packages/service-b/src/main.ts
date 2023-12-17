import { fastify } from 'fastify';
import cors from '@fastify/cors';
import fetch from 'node-fetch';

const server = fastify({ logger: true });

(async () => {
  await server.register(cors);

  server.get('/', async () => {
    const serviceCResponse = await fetch('http://localhost:3003/');
    const serviceCResult = await serviceCResponse.json();

    return {
      service: 'service-b',
      result: serviceCResponse.ok
        ? serviceCResult
        : serviceCResponse.statusText,
    };
  });

  await server.listen({ port: 3002, host: '0.0.0.0' });
  console.info('Server listening on port 3002');
})();
