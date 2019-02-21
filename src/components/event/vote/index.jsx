import React, { Component } from 'react';
import  { gql } from 'apollo-boost';
import Register from './participants/register';
import UnRegister from './participants/unregister';
import VoteTable from './table';
import { Nav, NavItem, TabButton } from '../../../styles/common.styles';

class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUser: '',
      activeSection: 'dates'
    };
  }

  render() {
    const { event } = this.props;
    const { activeSection } = this.state;

    return (
      <div>
        <Register eventId={event.id} />
        <Nav>
          <NavItem>
            <TabButton
              active={activeSection === 'dates' ? 1 : 0}
              onClick={() => this.setState({ activeSection: 'dates' })}
            >
              Dates &amp; time
            </TabButton>
          </NavItem>
          <NavItem>
            <TabButton
              active={activeSection === 'places' ? 1 : 0}
              onClick={() => this.setState({ activeSection: 'places' })}
            >
              Places &amp; restaurants
            </TabButton>
          </NavItem>
        </Nav>
        {activeSection === 'dates' &&
          <VoteTable
            type="dates"
            items={event.dates}
            participants={event.participants}
            mutation={UPDATE_PARTICIPANT_DATES}
          />
        }
        {activeSection === 'places' &&
          <VoteTable
            type="places"
            items={event.places}
            participants={event.participants}
            mutation={UPDATE_PARTICIPANT_PLACES}
          />
        }
        <UnRegister participants={event.participants} />
      </div>
    );
  }
}

const UPDATE_PARTICIPANT_DATES = gql`
  mutation UpdateParticipantDates($id: ID!, $dates: [ID]) {
    updateParticipant(id: $id, dates: $dates) {
      id
      dates
    }
  }
`;

const UPDATE_PARTICIPANT_PLACES = gql`
  mutation UpdateParticipantPlaces($id: ID!, $places: [ID]) {
    updateParticipant(id: $id, places: $places) {
      id
      places
    }
  }
`;

export default Vote;
