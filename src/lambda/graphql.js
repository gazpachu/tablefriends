const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    title: String,
    date: String,
    restaurant: String,
    menu: String
  }
`;

const resolvers = {
  Query: {
    title: (root, args, context) => {
      return "Hello, world!";
    },
    date: (root, args, context) => {
      return "https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg";
    }
  }
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler();
