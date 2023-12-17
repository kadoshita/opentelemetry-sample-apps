import { fastify } from 'fastify';
import cors from '@fastify/cors';
import fetch from 'node-fetch';

const server = fastify({ logger: true });

(async () => {
  await server.register(cors);

  server.get('/', async () => {
    const serviceAResponse = await fetch('http://localhost:3001/');
    const serviceAResult = await serviceAResponse.json();

    const serviceBResponse = await fetch('http://localhost:3002/');
    const serviceBResult = await serviceBResponse.json();

    const serviceCResponse = await fetch('http://localhost:3003/');
    const serviceCResult = await serviceCResponse.json();

    return {
      service: 'gateway',
      results: [serviceAResult, serviceBResult, serviceCResult],
    };
  });

  await server.listen({ port: 3000, host: '0.0.0.0' });
  console.info('Server listening on port 3000');
})();
