import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { EVENTS_QUERY } from '../home';
import slugify from '../../helpers';
import { Container } from './edit.styles.js';
import { Button, Input, Textarea, Select } from '../../styles/common.styles';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.event.title,
      description: this.props.event.description || ''
    };
  }

  render() {
    return (
      <Mutation
        mutation={UPDATE_EVENT_MUTATION}
        update={(cache, { data }) => {
          const { events } = cache.readQuery({ query: EVENTS_QUERY });
          cache.writeQuery({
            query: EVENTS_QUERY,
            data: { events: events.concat([data.updateEvent]) },
          });
        }}
      >
        {(updateEvent, { data, loading, error }) => {
          return (
            <Container>
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  const { title, description } = this.state;
                  await updateEvent({
                    variables: {
                      id: this.props.event.id,
                      title: title,
                      slug: slugify(title),
                      description: description
                    }
                  });
                  this.props.history.push(`${slugify(title)}/edit`);
                }}
              >
                <h3>Event details</h3>
                <Input
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                  placeholder="Event name..."
                />
                <Textarea
                  value={this.state.description}
                  onChange={e => this.setState({ description: e.target.value })}
                  placeholder="Event description..."
                />
                <h3>Suggested dates and time slots</h3>
                <Select>
                  <option>1st April 2019 from 5pm to 8pm</option>
                  <option>15th April 2019 from 5pm to 8pm</option>
                </Select>
                <p>
                  <Button type="submit">Save</Button>
                </p>
              </form>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}

const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: ID!, $title: String!, $slug: String!, $description: String) {
    updateEvent(id: $id, title: $title, slug: $slug, description: $description) {
      id
      title
      description
    }
  }
`;

export default Edit;
