import React from 'react';
import { Container, List, Item } from './styles';
import { StyledLink } from '../../styles/common.styles';

const Home = props => (
  <Container>
    <p>Itadakimasu will help you organise your restaurant event by making your guests vote for:</p>
    <List>
      <Item>A day and time</Item>
      <Item>A restaurant</Item>
      <Item>A menu</Item>
    </List>
    <StyledLink to={`/${Math.random().toString(36).substr(2, 9)}`}>Start organising the event!</StyledLink>
  </Container>
);

export default Home;
