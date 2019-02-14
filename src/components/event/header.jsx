import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { EventNav, EventNavItem } from './styles';

function EventHeader(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <EventNav>
        <EventNavItem active={props.active === 'vote'}><Link to={`/${props.slug}`}>Vote</Link></EventNavItem>
        <EventNavItem active={props.active === 'edit'}><Link to={`/${props.slug}/edit`}>Edit event</Link></EventNavItem>
      </EventNav>
    </Fragment>
  );
}

export default EventHeader;
