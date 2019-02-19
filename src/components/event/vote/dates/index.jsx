import React, { Component, Fragment } from 'react';
import dateFnsFormat from 'date-fns/format';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Table, Heading, Cell, UserIcon } from '../styles';

class VoteDates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };
  }

  render() {
    const { dates, participants } = this.props;

    return (
      <Fragment>
        <h3>Vote for the date and time</h3>
        <Mutation
          mutation={UPDATE_PARTICIPANT_MUTATION}
          update={(cache, { data }) => {
            // const { events } = cache.readQuery({ query: EVENTS_QUERY });
            // cache.writeQuery({
            //   query: EVENTS_QUERY,
            //   data: { events: events.concat([data.updateEvent]) },
            // });
          }}
        >
          {(updateParticipant, { data, loading, error }) => {
            return (
              <Table>
                <thead>
                  <tr>
                    <Cell />
                    {dates && dates.map(date => (
                      <Heading key={`${date.id}-heading`}>{dateFnsFormat(new Date(date.timestamp), 'MMM D ddd hh:mma')}</Heading>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Cell>{participants.length} participants</Cell>
                    {dates && dates.map(date => (
                      <Cell key={`${date.id}-participant`}>x</Cell>
                    ))}
                  </tr>
                  {participants && participants.map(participant => (
                    <tr key={participant.id}>
                      <Cell style={{ textAlign: 'left' }}><UserIcon className="fas fa-user-circle" />{participant.name}</Cell>
                      {dates && dates.map(date => (
                        <Cell key={`${date.id}-cell`}>
                          <input
                            type="checkbox"
                            defaultChecked={participant.dates.find(item => item === date.id)}
                            onChange={async () => {
                              const newDates = participant.dates ? participant.dates.splice(0) : [];
                              let found = false;
                              for (let i = 0; i < newDates.length; i += 1) {
                                if (newDates[i] === date.id) {
                                  newDates.splice(i, 1);
                                  found = true;
                                }
                              }
                              if (!found) {
                                newDates.push(date.id);
                              }
                              await updateParticipant({
                                variables: {
                                  id: participant.id,
                                  dates: newDates
                                }
                              });
                            }}
                          />
                        </Cell>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
          }}
        </Mutation>
      </Fragment>
    );
  }
}

const UPDATE_PARTICIPANT_MUTATION = gql`
  mutation UpdateParticipantMutation($id: ID!, $dates: [String]) {
    updateParticipant(id: $id, dates: $dates) {
      id
      dates
    }
  }
`;

export default VoteDates;
