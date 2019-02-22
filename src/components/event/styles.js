import styled from '@emotion/styled';
import { breakpoints } from '../../styles/common.styles';

export const Container = styled.section`
  background-color: rgba(255,255,255,.95);
  min-height: calc(100vh - 60px);
  text-align: center;
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

export const Footer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .1);
  margin-top: 30px;
  padding: 20px 0;
  font-size: 10px;
`;