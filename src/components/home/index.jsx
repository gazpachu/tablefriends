import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Container, PartyIcon, List, Item } from './styles';
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
    return (
      <Mutation
        mutation={CREATE_EVENT_MUTATION}
        update={(cache, { data }) => {
          const { events } = cache.readQuery({ query: EVENTS_QUERY });
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
              <p>Table.Friends will help you organise your restaurant event by making your guests vote for:</p>
              <List>
                <Item>A day and time</Item>
                <Item>A restaurant</Item>
                <Item>A menu</Item>
              </List>
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  const { title } = this.state;
                  await createEvent({ variables: { title: title, slug: slugify(title) } });
                  this.props.history.push(`$slugify(title)}/edit`);
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
      content
      title
    }
  }
`

export default withRouter(Home);
