import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Table, Heading, Cell, UserIcon } from '../styles';

class VotePlaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };
  }

  render() {
    const { places, participants } = this.props;

    return (
      <Fragment>
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
                    {places && places.map(place => (
                      <Heading key={`${place.id}-heading`}>{place.name}</Heading>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Cell>{participants.length} participants</Cell>
                    {places && places.map(place => (
                      <Cell key={`${place.id}-participant`}>x</Cell>
                    ))}
                  </tr>
                  {participants && participants.map(participant => (
                    <tr key={participant.id}>
                      <Cell style={{ textAlign: 'left' }}><UserIcon className="fas fa-user-circle" />{participant.name}</Cell>
                      {places && places.map(place => (
                        <Cell key={`${place.id}-cell`}>
                          <input
                            type="checkbox"
                            defaultChecked={participant.places.find(item => item === place.id)}
                            onChange={async () => {
                              const newPlaces = participant.places ? participant.places.splice(0) : [];
                              let found = false;
                              for (let i = 0; i < newPlaces.length; i += 1) {
                                if (newPlaces[i] === place.id) {
                                  newPlaces.splice(i, 1);
                                  found = true;
                                }
                              }
                              if (!found) {
                                newPlaces.push(place.id);
                              }
                              await updateParticipant({
                                variables: {
                                  id: participant.id,
                                  places: newPlaces
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
  mutation UpdateParticipantMutation($id: ID!, $places: [ID]) {
    updateParticipant(id: $id, places: $places) {
      id
      places
    }
  }
`;

export default VotePlaces;
