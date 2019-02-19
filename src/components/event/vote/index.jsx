import React, { Component } from 'react';
import Register from './participants/register';
import UnRegister from './participants/unregister';
import VoteDates from './dates';

class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUser: ''
    };
  }

  render() {
    const { event } = this.props;

    return (
      <div>
        <Register eventId={event.id} />
        <VoteDates dates={event.dates} participants={event.participants} />
        <UnRegister participants={event.participants} />
      </div>
    );
  }
}

export default Vote;
