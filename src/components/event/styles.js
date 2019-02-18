import styled from '@emotion/styled';
import { breakpoints } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

export const EventBody = styled.div`
  margin: 0 40px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 20px;
  }
`;
