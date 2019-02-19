import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Button, Info, Input } from '../../../../styles/common.styles';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputParticipant: '',
      status: ''
    };
  }

  render() {
    const { eventId } = this.props;
    const { inputParticipant, status } = this.state;

    return (
      <div>
        <h3>Participant registration</h3>
        <Mutation
          mutation={CREATE_MUTATION}
          update={(cache, { data }) => {
            this.setState({ inputParticipant: '', status: `${data.createParticipant.name} is now confirmed for the event.` });
          }}
        >
          {(createParticipant, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createParticipant({
                    variables: { name: inputParticipant, event: eventId },
                  });
                }}
              >
                <Input
                  value={inputParticipant}
                  type="text"
                  onChange={e => this.setState({ inputParticipant: e.target.value })}
                  placeholder="Participant name..."
                />
                <Info>{status}</Info>
                <p>
                  <Button
                    type="submit"
                    disabled={!inputParticipant}
                  >
                    Register
                  </Button>
                </p>
              </form>
            );
          }}
        </Mutation>
      </div>
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
