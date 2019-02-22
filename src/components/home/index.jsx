import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Container, PartyIcon, List, Item, Events, Event } from './styles';
import slugify from '../../helpers';
import { Button, Input } from '../../styles/common.styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    const { title } = this.state;

    return (
      <Fragment>
        <Mutation
          mutation={CREATE_EVENT_MUTATION}
          update={(cache, { data }) => {
            const { events } = cache.readQuery({ query: EVENTS_QUERY });
            data.createEvent.slug = slugify(title);
            cache.writeQuery({
              query: EVENTS_QUERY,
              data: { events: events.concat([data.createEvent]) },
            });
          }}
        >
          {(createEvent, { data, loading, error }) => {
            return (
              <Container>
                <PartyIcon />
                <p>Are you in charge of organising the next big dinner or restaurant meetup?</p>
                <p>TableFriends will organise your restaurant event for you by making your guests vote for:</p>
                <List>
                  <Item>A day and time</Item>
                  <Item>A restaurant</Item>
                  <Item>A menu</Item>
                </List>
                <h3>Start organising your event now!</h3>
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    await createEvent({ variables: { title: title, slug: slugify(title) } });
                    this.props.history.push(`${slugify(title)}/edit`);
                  }}
                >
                  <Input
                    type="text"
                    style={{ minWidth: '60%', marginRight: '5px' }}
                    value={this.state.title}
                    ref={(input) => { this.titleInput = input; }}
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder="Event name..."
                  />
                  <Button type="submit">Create event</Button>
                </form>
              </Container>
            )
          }}
        </Mutation>
        <Query query={EVENTS_QUERY}>
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
                {data.events ?
                  <Fragment>
                    <h3>Recent events</h3>
                    <Events>
                      {data.events.map(event => (
                        <Event key={event.id}>
                          <Link to={event.slug}>{event.title}</Link>
                        </Event>
                      ))}
                    </Events>
                  </Fragment>
                : null}
              </Container>
            )
          }}
        </Query>
      </Fragment>
    );
  }
}

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($title: String!, $slug: String!) {
    createEvent(title: $title, slug: $slug) {
      id
      title
    }
  }
`;

export const EVENTS_QUERY = gql`
  query EventsQuery {
    events {
      id
      title
      slug
    }
  }
`;

export default withRouter(Home);
