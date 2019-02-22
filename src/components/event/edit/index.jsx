import React, { Component, Fragment } from 'react';
import Details from './details';
import Dates from './dates';
import Other from './other';
import { Nav, NavItem, TabButton } from '../../../styles/common.styles';

class Edit extends Component {
  constructor(props) {
    super(props);

    const search = this.props.location.search; // could be '?section=dates'
    const params = new URLSearchParams(search);

    this.state = {
      activeSection: this.props.location.search ? params.get('section') : 'details'
    };
  }

  render() {
    const { event } = this.props;
    const { activeSection } = this.state;

    return (
      <Fragment>
        <Nav>
        <NavItem>
            <TabButton
              active={activeSection === 'details' ? 1 : 0}
              onClick={() => this.setState({ activeSection: 'details' })}
            >
              Details
            </TabButton>
          </NavItem>
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
          <NavItem>
            <TabButton
              active={activeSection === 'menus' ? 1 : 0}
              onClick={() => this.setState({ activeSection: 'menus' })}
            >
              Menus
            </TabButton>
          </NavItem>
        </Nav>
        {activeSection === 'details' && <Details event={event} history={this.props.history} />}
        {activeSection === 'dates' && <Dates dates={event.dates} event={event} />}
        {activeSection === 'places' && <Other type="places" items={event.places} event={event} />}
        {activeSection === 'menus' && <Other type="menus" items={event.menus} event={event} />}
      </Fragment>
    );
  }
}

export default Edit;
