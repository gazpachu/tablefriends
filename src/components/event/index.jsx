import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import  { gql } from 'apollo-boost';
import EventHeader from './header';
import Edit from './edit';
import Vote from './vote';
import { Container, Status, EventBody } from './styles';

class Event extends Component {
  render() {
    return (
      <Query query={EVENT_QUERY} variables={{ slug: this.props.match.params.slug }}>
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <Container>
                <Status>Loading ...</Status>
              </Container>
            )
          }

          if (error) {
            return (
              <Container>
                <Status>An unexpected error occured.</Status>
              </Container>
            )
          }

          const active = this.props.location.pathname.includes('/edit') ? 'edit' : 'vote';

          return (
            <Container>
              {data.event ?
                <Fragment>
                  <EventHeader
                    event={data.event}
                    active={active}
                  />
                  <EventBody>
                    {active === 'edit'
                      ? <Edit event={data.event} location={this.props.location} history={this.props.history} />
                      : <Vote event={data.event} />
                    }
                  </EventBody>
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
      dates {
        id
        timestamp
      }
      places {
        id
        name
        url
      }
      menus {
        id
        name
        url
      }
      participants {
        id
        name
        dates
        places
        menus
      }
    }
  }
`;
