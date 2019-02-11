import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { Container } from './styles';

class Event extends Component {
  render() {
    return (
      <Query query={EVENT_QUERY} variables={{ id: this.props.match.params.id }}>
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <Container>Loading ...</Container>
            )
          }

          if (error) {
            return (
              <Container>An unexpected error occured.</Container>
            )
          }

          return (
            <Container>
              {data.event ?
                <Fragment>
                  <h1>{data.event.title}</h1>
                </Fragment>
              : null}
            </Container>
          )
        }}
      </Query>
    );
  }
}

export default Event;

export const EVENT_QUERY = gql`
  query EventQuery($id: ID!) {
    event(id: $id) {
      id
      content
      title
      published
      date
      place
      menu
    }
  }
`
