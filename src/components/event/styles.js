import styled from '@emotion/styled';
import { breakpoints } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding: 10px 40px;
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

export const ShareButtons = styled.div`
  margin: 20px 0;
`;

export const EventNav = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EventNavItem = styled.li`
  display: inline-block;
`;
