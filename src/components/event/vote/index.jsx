import React, { Component } from 'react';
import dateFnsFormat from 'date-fns/format';
import { Table, Heading, Cell, UserIcon, UserInput } from './styles';

class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUser: ''
    };
  }

  render() {
    const { dates } = this.props.event;
    const { inputUser } = this.state;

    return (
      <div>
        <h3>Vote for the date and time</h3>
        <Table>
          <thead>
            <tr>
              <Cell />
              {dates && dates.map(date => (
                <Heading key={`${date}-heading`}>{dateFnsFormat(new Date(date), 'MMM D ddd hh:mma')}</Heading>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xx participants</td>
              {dates && dates.map(date => (
                <Cell key={`${date}-participant`}>x</Cell>
              ))}
            </tr>
            <tr>
              <td>
                <UserInput
                  value={inputUser}
                  type="text"
                  onChange={e => this.setState({ inputUser: e.target.value })}
                  placeholder="Enter your name..."
                />
              </td>
              {dates && dates.map(date => (
                <Cell key={`${date}-input-cell`}>
                  <input type="checkbox" />
                </Cell>
              ))}
            </tr>
            <tr>
              <td><UserIcon className="fas fa-user-circle" />John Smith</td>
              {dates && dates.map(date => (
                <Cell key={`${date}-cell`}>check</Cell>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Vote;
