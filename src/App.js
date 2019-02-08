import React, { Component, Fragment } from 'react';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import GlobalStyles from './app.styles';

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello,
          dogPhotoUrl
        }
      `}
    >
      {({ data }) => (
        <div>
          A greeting from the server: {data.hello}<br />
          <img src={data.dogPhotoUrl} alt="dog" />
        </div>
      )}
    </Query>
  </ApolloProvider>
);

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <div className="app">
          <header className="app-header">
            <h1>Itadakimasu</h1>
            <h2>Organise your restaurant meetup</h2>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default App;
