import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import dateFnsFormat from 'date-fns/format';
// import { Editor } from 'slate-react';
// import { Value } from 'slate';
// import { EVENTS_QUERY } from '../home';
import slugify from '../../helpers';
import { Container } from './edit.styles.js';
import { Button, Input, Textarea, Select } from '../../styles/common.styles';

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
      inputDate: null,
      dates: this.props.event.dates || [],
      saving: false
    };
  }

  render() {
    const { event } = this.props;
    const { title, description, dates, inputDate, saving } = this.state;

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
                      dates: dates
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
                <h3>Suggested dates and time slots</h3>
                <Select ref={(select) => { this.selectDates = select; }}>
                  {dates && dates.map(date => (
                    <option key={date} value={date}>{dateFnsFormat(new Date(date), 'Do MMMM YYYY, hh:mma')}</option>
                  ))}
                </Select>
                <Button
                  disabled={dates.length === 0}
                  onClick={() => {
                    const newDates = dates.splice(0);
                    newDates.splice(this.selectDates.selectedIndex, 1);
                    this.setState({ dates: newDates });
                  }}
                >
                  Remove selected
                </Button>
                <Input
                  defaultValue={inputDate}
                  type="datetime-local"
                  onChange={e => this.setState({ inputDate: e.target.value })}
                  placeholder="Add new date..."
                />
                <Button
                  disabled={!inputDate}
                  onClick={() => {
                    const newDates = dates.splice(0);
                    newDates.push(inputDate);
                    this.setState({ dates: newDates, inputDate: null });
                  }}
                >
                  Add date and time
                </Button>
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
  mutation UpdateEventMutation($id: ID!, $title: String!, $slug: String!, $description: String, $dates: [String]) {
    updateEvent(id: $id, title: $title, slug: $slug, description: $description, dates: $dates) {
      id
      title
      description
      dates
    }
  }
`;

export default Edit;
