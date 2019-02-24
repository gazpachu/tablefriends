import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { EVENT_QUERY } from "..";
import {
  PageContainer,
  Label,
  Button,
  Info,
  InputInline
} from "../../../styles/common.styles";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputParticipant: "",
      status: ""
    };
  }

  render() {
    const { event } = this.props;
    const { inputParticipant, status } = this.state;

    return (
      <PageContainer>
        <h3>Add yourself or someone else to the event</h3>
        <Mutation
          mutation={CREATE_MUTATION}
          update={(cache, { data }) => {
            this.setState({
              inputParticipant: "",
              status: `${
                data.createParticipant.name
              } is now confirmed for the event.`
            });
            const cachedEvent = cache.readQuery({
              query: EVENT_QUERY,
              variables: { slug: event.slug }
            });
            data.createParticipant.dates = [];
            data.createParticipant.places = [];
            data.createParticipant.menus = [];
            cachedEvent.event.participants = cachedEvent.event.participants.concat(
              data.createParticipant
            );
            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event }
            });
          }}
        >
          {(createParticipant, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createParticipant({
                    variables: { name: inputParticipant, event: event.id }
                  });
                }}
              >
                <p>
                  <Label>Participant name</Label>
                  <InputInline
                    value={inputParticipant}
                    type="text"
                    onChange={e =>
                      this.setState({ inputParticipant: e.target.value })
                    }
                    placeholder="Participant name..."
                  />
                </p>
                <Button type="submit" disabled={!inputParticipant}>
                  Register
                </Button>
                <Info>{status}</Info>
              </form>
            );
          }}
        </Mutation>
      </PageContainer>
    );
  }
}

const CREATE_MUTATION = gql`
  mutation CreateMutation($name: String!, $event: ID!) {
    createParticipant(name: $name, event: $event) {
      id
      name
    }
  }
`;

export default Register;
