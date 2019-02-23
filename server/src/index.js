const {
  GraphQLServerLambda
} = require('graphql-yoga');
const {
  prisma
} = require('./generated/prisma-client');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const lambda = new GraphQLServerLambda({
  typeDefs, // This is useless. Path hardcoded in lib. FFS...
  resolvers,
  context: {
    prisma,
  },
});

exports.handler = lambda.handler;