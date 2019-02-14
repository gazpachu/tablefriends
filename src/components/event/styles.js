import styled from '@emotion/styled';
import { breakpoints } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #DDD;
`;

export const Title = styled.h1`

`;

export const Description = styled.div`
  text-align: justify;
  line-height: 22px;
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
