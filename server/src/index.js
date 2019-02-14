const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
 Query: {
   events: (parent, args, context) => {
     return context.prisma.events();
   },
   event: (parent, { slug }, context) => {
     return context.prisma.event({ slug });
   },
   dates: (parent, { slug }, context) => {
     return context.prisma.dates();
   },
 },
 Mutation: {
   createEvent(parent, { title, slug }, context) {
     return context.prisma.createEvent({ title, slug });
   },
   deleteEvent(parent, { id }, context) {
     return context.prisma.deleteEvent({ where: { id } });
   }
 },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
