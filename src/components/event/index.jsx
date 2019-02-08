import React from 'react';
import { Container, List, Item } from './styles';
import { Button } from '../../styles/common.styles';

const Event = props => (
  <Container>
    <p>Itadakimasu will help you organise your restaurant event by making your guests vote for:</p>
    <List>
      <Item>A day and time</Item>
      <Item>A restaurant</Item>
      <Item>A menu</Item>
    </List>
    <Button>Start organising the event!</Button>
  </Container>
);

export default Event;
