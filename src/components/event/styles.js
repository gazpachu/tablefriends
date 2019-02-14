import styled from '@emotion/styled';

export const Container = styled.section`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Description = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: normal;
`;

export const EventNav = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EventNavItem = styled.li`
  display: inline-block;
  font-weight: ${props => props.active ? 'bold' : 'normal'};

  &:after {
    content: '';
    border-right: 1px solid;
    height: 12px;
    display: inline-block;
    margin: 0 10px;
  }

  &:last-child::after {
    display: none;
  }
`;
