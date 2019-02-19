import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { EVENT_QUERY } from '../..';
import { Button, Info, Select } from '../../../../styles/common.styles';

class UnRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: this.props.participants || [],
      status: ''
    };
  }

  render() {
    const { participants, status } = this.state;

    return (
      <Fragment>
        <h3>Participant unregistration</h3>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            const participantName = this.state.participants[this.selectParticipants.selectedIndex].name;
            const participants = this.state.participants.filter(item => item.id !== data.deleteParticipant.id);
            this.setState({ participants, status: `${participantName} has been unregistered.` });

            cache.writeQuery({
              query: EVENT_QUERY,
              data: { participants }
            });
          }}
        >
          {(deleteParticipant, { data, loading, error }) => {
            return (
              <Fragment>
                <Select ref={(select) => { this.selectParticipants = select; }}>
                  {participants && participants.map(participant => (
                    <option key={participant.id} value={participant.id}>{participant.name}</option>
                  ))}
                </Select>
                <Button
                  disabled={participants.length === 0}
                  onClick={async () => {
                    await deleteParticipant({
                      variables: { id: participants[this.selectParticipants.selectedIndex].id },
                    });
                  }}
                >
                  Remove selected
                </Button>
                <Info>{status}</Info>
              </Fragment>
            )
          }}
        </Mutation>
      </Fragment>
    );
  }
}

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: ID!) {
    deleteParticipant(id: $id) {
      id
    }
  }
`;

export default UnRegister;
