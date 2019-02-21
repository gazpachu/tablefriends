import React, { Component } from 'react';
import Register from './participants/register';
import UnRegister from './participants/unregister';
import VoteDates from './dates';
import VotePlaces from './places';
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
        {activeSection === 'dates' && <VoteDates dates={event.dates} participants={event.participants} />}
        {activeSection === 'places' && <VotePlaces places={event.places} participants={event.participants} />}
        <UnRegister participants={event.participants} />
      </div>
    );
  }
}

export default Vote;
