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
 Event: {
   places: (parent, { id }, context) => {
     return context.prisma.event({ id: parent.id }).places();
   }
 },
 Mutation: {
   createEvent(parent, { title, slug }, context) {
     return context.prisma.createEvent({ title, slug });
   },
   updateEvent(parent, { id, title, slug, description, photo, dates, menus }, context) {
     return context.prisma.updateEvent({
       where: { id },
       data: { title, slug, description, photo, dates: { set: dates }, menus: { set: menus } }
     });
   },
   deleteEvent(parent, { id }, context) {
     return context.prisma.deleteEvent({ id });
   },
   createPlace(parent, { name, url, event }, context) {
     return context.prisma.createPlace({
       name,
       url,
       event: { connect: { id: event } },
     });
   },
   deletePlace(parent, { id }, context) {
     return context.prisma.deletePlace({ id });
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
