import React, { Component, Fragment } from 'react';
import dateFnsFormat from 'date-fns/format';
import { Table, Heading, Cell, UserIcon } from '../styles';

class VoteDates extends Component {
  render() {
    const { dates, participants } = this.props;

    return (
      <Fragment>
        <h3>Vote for the date and time</h3>
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
                    <input type="checkbox" />
                  </Cell>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default VoteDates;
