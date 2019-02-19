import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';
// import { EVENTS_QUERY } from '../home';
import slugify from '../../../helpers';
import { Container } from './styles.js';
import { Button, Input, Textarea } from '../../../styles/common.styles';
import Dates from './dates';
import Menus from './menus';
import Places from './places';

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

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.event.title,
      description: this.props.event.description || '',
      photo: this.props.event.photo || '',
      // description: initialValue,
      menus: this.props.event.menus || [],
      saving: false
    };
  }

  render() {
    const { event } = this.props;
    const { title, description, photo, menus, saving } = this.state;

    return (
      <Fragment>
        <Mutation
          mutation={UPDATE_EVENT_MUTATION}
          update={(cache, { data }) => {
            // const { events } = cache.readQuery({ query: EVENTS_QUERY });
            // cache.writeQuery({
            //   query: EVENTS_QUERY,
            //   data: { events: events.concat([data.updateEvent]) },
            // });
          }}
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
                        photo: photo,
                        menus: menus
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
                  <h3>Menus</h3>
                  <Menus menus={menus} updateMenus={(menus) => this.setState({ menus })} />
                  <p>
                    <Button type="submit" disabled={saving}>Save</Button>
                  </p>
                </form>
                <h3>Dates and time slots</h3>
                <Dates dates={event.dates} eventId={event.id} />
                <h3>Restaurants or places</h3>
                <Places places={event.places} eventId={event.id} />
              </Container>
            );
          }}
        </Mutation>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
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
  mutation UpdateEventMutation($id: ID!, $title: String!, $slug: String!, $description: String, $menus: [String]) {
    updateEvent(id: $id, title: $title, slug: $slug, description: $description, menus: $menus) {
      id
      title
      description
      menus
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

export default Edit;
