import React, { Component, Fragment } from 'react';
import dateFnsFormat from 'date-fns/format';
import { Table, Heading, Cell, UserIcon } from '../styles';

class VoteDates extends Component {
  render() {
    const { dates } = this.props;

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
              <td>xx participants</td>
              {dates && dates.map(date => (
                <Cell key={`${date.id}-participant`}>x</Cell>
              ))}
            </tr>
            <tr>
              <td />
              {dates && dates.map(date => (
                <Cell key={`${date.id}-input-cell`}>
                  <input type="checkbox" />
                </Cell>
              ))}
            </tr>
            <tr>
              <td><UserIcon className="fas fa-user-circle" />John Smith</td>
              {dates && dates.map(date => (
                <Cell key={`${date.id}-cell`}>check</Cell>
              ))}
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default VoteDates;
