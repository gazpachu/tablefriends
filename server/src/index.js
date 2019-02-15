const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
 Query: {
   events: (parent, args, context) => {
     return context.prisma.events();
   },
   event: (parent, { slug }, context) => {
     return context.prisma.event({ slug });
   }
 },
 Mutation: {
   createEvent(parent, { title, slug }, context) {
     return context.prisma.createEvent({ title, slug });
   },
   updateEvent(parent, { id, title, slug, description, dates }, context) {
     return context.prisma.updateEvent({
       where: { id },
       data: { title, slug, description, dates: { set: dates } },
     });
   },
   deleteEvent(parent, { id }, context) {
     return context.prisma.deleteEvent({ where: { id } });
   },
   createPlace(parent, { name, url }, context) {
     return context.prisma.createPlace({ name, url });
   },
   deletePlace(parent, { id }, context) {
     return context.prisma.deletePlace({ where: { id } });
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
