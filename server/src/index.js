const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    event: (parent, { id }, context) => {
      return context.prisma.event({ id })
    },
  },
  Mutation: {
    createEvent(parent, { title, content }, context) {
      return context.prisma.createEvent({
        title,
        content,
      })
    },
    deleteEvent(parent, { id }, context) {
      return context.prisma.deleteEvent({ id })
    },
    publish(parent, { id }, context) {
      return context.prisma.updateEvent({
        where: { id },
        data: { published: true },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
