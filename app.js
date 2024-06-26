import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
import { typeDefs } from './schema/dbSchema.js';
import { resolvers } from './resolvers/resolvers.js';


const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers : resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);