import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';
// import { EVENTS_QUERY } from '../home';
import slugify from '../../../../helpers';
import { EVENTS_QUERY } from '../../../home';
import { Container } from '../styles.js';
import { Button, Input, Textarea } from '../../../../styles/common.styles';

// const initialValue = Value.fromJSON({
//   document: {
//     nodes: [
//       {
//         object: 'block',
//         type: 'paragraph',
//         nodes: [
//           {
//             object: 'text',
//             leaves: [
//               {
//                 text: 'A line of text in a paragraph.',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// })

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.event.title,
      description: this.props.event.description || '',
      photo: this.props.event.photo || '',
      // description: initialValue,
      saving: false
    };
  }

  render() {
    const { event } = this.props;
    const { title, description, photo, saving } = this.state;

    return (
      <Fragment>
        <Mutation
          mutation={UPDATE_EVENT_MUTATION}
        >
          {(updateEvent, { data, loading, error }) => {
            return (
              <Container>
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    this.setState({ saving: true });
                    await updateEvent({
                      variables: {
                        id: event.id,
                        title: title,
                        slug: slugify(title),
                        description: description,
                        photo: photo
                      }
                    });
                    this.setState({ saving: false });
                    this.props.history.push(`/${slugify(title)}/edit`);
                  }}
                >
                  <h3>Event details</h3>
                  <Input
                    type="text"
                    value={title}
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder="Event name..."
                  />
                  {/*<Editor
                    value={this.state.description}
                    onChange={({description}) => this.setState({ description })}
                  />*/}
                  <Textarea
                    value={description}
                    onChange={e => this.setState({ description: e.target.value })}
                    placeholder="Event description..."
                  />
                  <p>
                    <Button type="submit" disabled={saving}>Save</Button>
                  </p>
                </form>
              </Container>
            );
          }}
        </Mutation>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            let { events } = cache.readQuery({ query: EVENTS_QUERY });
            events = events.filter(event => event.id !== data.deleteEvent.id);
            cache.writeQuery({
              query: EVENTS_QUERY,
              data: { events: events },
            });

            this.props.history.push('/');
          }}
        >
          {(deleteEvent, { data, loading, error }) => {
            return (
              <Container>
                <h3>Remove event</h3>
                <Button
                  color="red"
                  onClick={async () => {
                    await deleteEvent({
                      variables: { id: event.id },
                    });
                  }}
                >
                  Danger! this completly removes the event
                </Button>
              </Container>
            )
          }}
        </Mutation>
      </Fragment>
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

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: ID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

export default Details;
