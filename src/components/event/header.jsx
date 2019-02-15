import React from 'react';
import { Header, Title, Description, EventNav, EventNavItem } from './styles';
import { TabLink } from '../../styles/common.styles';

function EventHeader(props) {
  return (
    <Header>
      <Title>{props.event.title}</Title>
      <Description>{props.event.description}</Description>
      <EventNav>
        <EventNavItem>
          <TabLink active={props.active === 'vote'} to={`/${props.event.slug}`}>Vote</TabLink>
        </EventNavItem>
        <EventNavItem>
          <TabLink active={props.active === 'edit'} to={`/${props.event.slug}/edit`}>Edit event</TabLink>
        </EventNavItem>
      </EventNav>
    </Header>
  );
}

export default EventHeader;
