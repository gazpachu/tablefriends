import styled from '@emotion/styled';
import { breakpoints } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  margin-bottom: 30px;
`;

export const Status = styled.div`
  margin: 30px 0;
`;

export const EventBody = styled.div`
  margin: 0 40px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 20px;
  }
`;
