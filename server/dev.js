const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./src/generated/prisma-client');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.start().then(() => {
  console.log('Server started on http://localhost:4000');
});