import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';
// import { EVENTS_QUERY } from '../home';
import slugify from '../../helpers';
import { Container } from './edit.styles.js';
import { Button, Input, Textarea } from '../../styles/common.styles';
import Dates from './dates';
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
      // description: initialValue,
      dates: this.props.event.dates || [],
      places: this.props.event.places || [],
      saving: false
    };
  }

  render() {
    const { event } = this.props;
    const { title, description, dates, places, saving } = this.state;

    return (
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
                      dates: dates,
                      places: places
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
                <h3>Dates and time slots</h3>
                <Dates dates={dates} updateDates={(dates) => this.setState({ dates })} />
                <h3>Restaurants or places</h3>
                <Places places={places} updatePlaces={(places) => this.setState({ places })} />
                <p>
                  <Button type="submit" disabled={saving}>Save</Button>
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
  mutation UpdateEventMutation($id: ID!, $title: String!, $slug: String!, $description: String, $dates: [String], $places: [PlaceInput]) {
    updateEvent(id: $id, title: $title, slug: $slug, description: $description, dates: $dates, places: $places) {
      id
      title
      description
      dates
      places {
        name
        url
      }
    }
  }
`;

export default Edit;
