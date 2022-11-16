import { startStandaloneServer } from '@apollo/server/standalone';
import { server as accountsServer } from './accounts';
import { server as inventoryServer } from './inventory';
import { server as productsServer } from './products';
import { server as reviewsServer } from './reviews';

export const servers = [
  { name: 'accounts', server: accountsServer },
  { name: 'inventory', server: inventoryServer },
  { name: 'products', server: productsServer },
  { name: 'reviews', server: reviewsServer },
];

export function startServers() {
  return Promise.all(
    servers.map(async ({ server, name }, index) => {
      const { url } = await startStandaloneServer(server, { listen: { port: 4000 + index } });
      console.log(`🚀 ${name} ready at ${url}`);
      return { name, url, server };
    }),
  );
}
