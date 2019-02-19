import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Button, Info } from '../../../../styles/common.styles';

class UnRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputParticipant: '',
      status: ''
    };
  }

  render() {
    const { inputParticipant, status } = this.state;

    return (
      <div>
        <h3>Participant registration</h3>
      </div>
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
