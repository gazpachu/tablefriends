import styled from "@emotion/styled";
import { breakpoints } from "../../styles/common.styles";
import { headerHeight } from "../topNav/styles";

export const Container = styled.section`
  min-height: calc(100vh - ${headerHeight});
  text-align: center;
`;

export const Status = styled.div`
  padding: 30px 0;
`;

export const EventBody = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  min-height: calc(100vh - 260px);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const Footer = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  font-size: 10px;
`;

export const Description = styled.div`
  text-align: justify;
  line-height: 22px;
  margin: 20px 0 40px 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 40px 20px;
  }
`;

export const SummaryList = styled.ul`
  margin: 40px 0;
  line-height: 30px;
`;

export const ShareButtons = styled.div`
  margin-top: 20px;
`;
