import { fastify } from 'fastify';
import cors from '@fastify/cors';
import fetch from 'node-fetch';

const server = fastify({ logger: true });

(async () => {
  await server.register(cors);

  server.get('/', async () => {
    const serviceAResponse = await fetch('http://127.0.0.1:3001/');
    const serviceAResult = await serviceAResponse.json();

    const serviceBResponse = await fetch('http://127.0.0.1:3002/');
    const serviceBResult = await serviceBResponse.json();

    return {
      service: 'gateway',
      results: [
        serviceAResponse.ok ? serviceAResult : serviceAResponse.statusText,
        serviceBResponse.ok ? serviceBResult : serviceBResponse.statusText,
      ],
    };
  });

  await server.listen({ port: 3000, host: '0.0.0.0' });
  console.info('Server listening on port 3000');
})();
