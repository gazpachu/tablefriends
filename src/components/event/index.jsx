import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import  { gql } from 'apollo-boost';
import EventHeader from './header';
import Edit from './edit';
import Vote from './vote';
import { Container } from './styles';

class Event extends Component {
  render() {
    return (
      <Query query={EVENT_QUERY} variables={{ slug: this.props.match.params.slug }}>
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

          const active = this.props.location.pathname.includes('/edit') ? 'edit' : 'vote';

          return (
            <Container>
              {data.event ?
                <Fragment>
                  <EventHeader
                    title={data.event.title}
                    slug={this.props.match.params.slug}
                    active={active}
                  />
                  {active === 'edit'
                    ? <Edit event={data.event} />
                    : <Vote event={data.event} />
                  }
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
  query EventQuery($slug: String!) {
    event(slug: $slug) {
      id
      slug
      description
      title
      dates
      places {
        name
        url
      }
      menus
    }
  }
`
