const { GraphQLServerLambda } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});

exports.handler = lambda.handler;