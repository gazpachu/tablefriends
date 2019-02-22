import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { EVENT_QUERY } from "../..";
import { Button, Info, SelectInline } from "../../../../styles/common.styles";

class UnRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ""
    };
  }

  render() {
    const { event, participants } = this.props;
    const { status } = this.state;

    return (
      <Fragment>
        <h3>Participant unregistration</h3>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            const participantName =
              participants[this.selectParticipants.selectedIndex].name;
            this.setState({
              status: `${participantName} has been unregistered.`
            });

            const cachedEvent = cache.readQuery({
              query: EVENT_QUERY,
              variables: { slug: event.slug }
            });
            cachedEvent.event.participants = cachedEvent.event.participants.filter(
              item => item.id !== data.deleteParticipant.id
            );

            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event }
            });
          }}
        >
          {(deleteParticipant, { data, loading, error }) => {
            return (
              <Fragment>
                <SelectInline
                  ref={select => {
                    this.selectParticipants = select;
                  }}
                >
                  {participants &&
                    participants.map(participant => (
                      <option key={participant.id} value={participant.id}>
                        {participant.name}
                      </option>
                    ))}
                </SelectInline>
                <Button
                  color="red"
                  disabled={participants.length === 0}
                  onClick={async () => {
                    await deleteParticipant({
                      variables: {
                        id:
                          participants[this.selectParticipants.selectedIndex].id
                      }
                    });
                  }}
                >
                  Unregister
                </Button>
                <Info>{status}</Info>
              </Fragment>
            );
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
