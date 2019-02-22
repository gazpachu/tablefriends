import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';
// import { EVENTS_QUERY } from '../home';
import slugify from '../../../../helpers';
import { EVENTS_QUERY } from '../../../home';
import { PageContainer, Button, Label, Input, Textarea, Info } from '../../../../styles/common.styles';

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
      // description: initialValue,
      photo: this.props.event.photo || '',
      dateDeadline: this.props.event.dateDeadline || '',
      placeDeadline: this.props.event.placeDeadline || '',
      menuDeadline: this.props.event.menuDeadline || '',
      saving: false,
      status: ''
    };
  }

  render() {
    const { event } = this.props;
    const {
      title,
      description,
      photo,
      dateDeadline,
      placeDeadline,
      menuDeadline,
      saving,
      status
    } = this.state;

    return (
      <PageContainer>
        <Mutation
          mutation={UPDATE_EVENT_MUTATION}
          update={(cache, { data }) => {
            this.setState({ saving: false, status: 'Details updated correctly' });
          }}
        >
          {(updateEvent, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  this.setState({ saving: true });
                  await updateEvent({
                    variables: {
                      id: event.id,
                      title,
                      slug: slugify(title),
                      description,
                      photo,
                      dateDeadline,
                      placeDeadline,
                      menuDeadline
                    }
                  });
                  this.props.history.push(`/${slugify(title)}/edit`);
                }}
              >
                <h3>Event details</h3>
                <p>
                  <Label>Event title</Label>
                  <Input
                    type="text"
                    value={title}
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder="Enter the event title..."
                  />
                </p>
                {/*<Editor
                  value={this.state.description}
                  onChange={({description}) => this.setState({ description })}
                />*/}
                <p>
                  <Label>Event description</Label>
                  <Textarea
                    value={description}
                    onChange={e => this.setState({ description: e.target.value })}
                    placeholder="Enter the event description..."
                  />
                </p>
                <h3>Event deadlines</h3>
                <p>
                  <Label>Voting for dates</Label>
                  <Input
                    type="datetime-local"
                    value={dateDeadline}
                    onChange={e => this.setState({ dateDeadline: e.target.value })}
                  />
                </p>
                <p>
                  <Label>Voting for places or restaurants</Label>
                  <Input
                    type="datetime-local"
                    value={placeDeadline}
                    onChange={e => this.setState({ placeDeadline: e.target.value })}
                  />
                </p>
                <p>
                  <Label>Voting for menus</Label>
                  <Input
                    type="datetime-local"
                    value={menuDeadline}
                    onChange={e => this.setState({ menuDeadline: e.target.value })}
                  />
                </p>
                <p>
                  <Button type="submit" disabled={saving}>Save details</Button>
                </p>
                <Info>{status}</Info>
              </form>
            );
          }}
        </Mutation>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            this.setState({ saving: false });
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
              <Fragment>
                <h3>Remove event</h3>
                <Button
                  color="red"
                  onClick={async () => {
                    this.setState({ saving: true });
                    await deleteEvent({
                      variables: { id: event.id },
                    });
                  }}
                >
                  Danger! completly remove event
                </Button>
              </Fragment>
            )
          }}
        </Mutation>
      </PageContainer>
    );
  }
}

const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: ID!, $title: String!, $slug: String!, $description: String, $photo: String, $dateDeadline: String, $placeDeadline: String, $menuDeadline: String) {
    updateEvent(id: $id, title: $title, slug: $slug, description: $description, photo: $photo, dateDeadline: $dateDeadline, placeDeadline: $placeDeadline, menuDeadline: $menuDeadline) {
      id
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
