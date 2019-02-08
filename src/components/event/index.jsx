import React from 'react';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { Container } from './styles';

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const Event = props => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          title,
          date
        }
      `}
    >
      {({ data }) => (
        <Container>
          <p>Event summary: {data.title}</p>
          <p>Title: not set</p>
          <p>Day and time: not set</p>
          <p>Restaurant: not set</p>
          <p>Menu: not set</p>
        </Container>
      )}
    </Query>
  </ApolloProvider>
);

export default Event;
