import { startStandaloneServer } from '@apollo/server/standalone';
import { createGateway } from './gateway';
import { startServers } from './servers';

startServers()
  .then(async (configs) => {
    const server = createGateway(configs);

    const { url } = await startStandaloneServer(server,{listen: {port: 3900}});

    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    throw error;
  });
