import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import dateFnsFormat from 'date-fns/format';
import { Button, Input, Select } from '../../../../styles/common.styles';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: this.props.dates || [],
      inputDate: ''
    };
  }

  render() {
    const { eventId } = this.props;
    const { dates, inputDate } = this.state;

    return (
      <Fragment>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            const dates = this.state.dates.filter(item => item.id !== data.deleteDate.id);
            this.setState({ dates });
          }}
        >
          {(deleteDate, { data, loading, error }) => {
            return (
              <Fragment>
                <Select ref={(select) => { this.selectDates = select; }}>
                  {dates && dates.map(date => (
                    <option key={date.id} value={date.id}>{dateFnsFormat(new Date(date.timestamp), 'Do MMMM YYYY, hh:mma')}</option>
                  ))}
                </Select>
                <Button
                  disabled={dates.length === 0}
                  onClick={async () => {
                    await deleteDate({
                      variables: { id: dates[this.selectDates.selectedIndex].id },
                    });
                  }}
                >
                  Remove selected
                </Button>
              </Fragment>
            )
          }}
        </Mutation>
        <Mutation
          mutation={CREATE_MUTATION}
          update={(cache, { data }) => {
            const dates = this.state.dates.splice(0);
            dates.push(data.createDate);
            this.setState({ dates });
          }}
        >
          {(createDate, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createDate({
                    variables: { timestamp: inputDate, event: eventId },
                  });
                  this.setState({ inputDate: '' });
                }}
              >
                <Input
                  value={inputDate}
                  type="datetime-local"
                  onChange={e => this.setState({ inputDate: e.target.value })}
                />
                <p>
                  <Button
                    type="submit"
                    disabled={!inputDate}
                  >
                    Add date and time
                  </Button>
                </p>
              </form>
            );
          }}
        </Mutation>
      </Fragment>
    );
  }
}

const CREATE_MUTATION = gql`
  mutation CreateMutation($timestamp: String!, $event: ID!) {
    createDate(timestamp: $timestamp, event: $event) {
      id
      timestamp
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: ID!) {
    deleteDate(id: $id) {
      id
    }
  }
`;

export default Dates;
