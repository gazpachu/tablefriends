import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Title, Description, EventNav, EventNavItem } from './styles';

function EventHeader(props) {
  return (
    <Header>
      <Title>{props.event.title}</Title>
      <Description>{props.event.description}</Description>
      <EventNav>
        <EventNavItem active={props.active === 'vote'}><Link to={`/${props.event.slug}`}>Vote</Link></EventNavItem>
        <EventNavItem active={props.active === 'edit'}><Link to={`/${props.event.slug}/edit`}>Edit event</Link></EventNavItem>
      </EventNav>
    </Header>
  );
}

export default EventHeader;
