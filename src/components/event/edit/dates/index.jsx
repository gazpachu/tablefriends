import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import dateFnsFormat from 'date-fns/format';
import { EVENT_QUERY } from '../..';
import { Button, Input, Select, Info } from '../../../../styles/common.styles';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputDate: '',
      status: ''
    };
  }

  render() {
    const { event, dates } = this.props;
    const { inputDate, status } = this.state;

    return (
      <Fragment>
        <Mutation
          mutation={DELETE_MUTATION}
          update={(cache, { data }) => {
            this.setState({ inputDate: '', status: `${dateFnsFormat(new Date(data.deleteDate.timestamp), 'Do MMMM YYYY, hh:mma')} was removed from the dates.` });
            const cachedEvent = cache.readQuery({ query: EVENT_QUERY, variables: { slug: event.slug } });
            cachedEvent.event.dates = cachedEvent.event.dates.filter(item => item.id !== data.deleteDate.id);
            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event },
            });
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
            this.setState({ inputDate: '', status: `${dateFnsFormat(new Date(data.createDate.timestamp), 'Do MMMM YYYY, hh:mma')} was added to the dates.` });
            const cachedEvent = cache.readQuery({ query: EVENT_QUERY, variables: { slug: event.slug } });
            cachedEvent.event.dates = cachedEvent.event.dates.concat(data.createDate);
            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event },
            });
          }}
        >
          {(createDate, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createDate({
                    variables: { timestamp: inputDate, event: event.id },
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
        <Info>{status}</Info>
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
      timestamp
    }
  }
`;

export default Dates;
