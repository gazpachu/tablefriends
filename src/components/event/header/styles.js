import styled from "@emotion/styled";
import { colors, breakpoints } from "../../../styles/common.styles";

export const Header = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  background-color: ${colors.primary};
  padding: 20px 40px 40px;
  margin: 0 auto 30px;
  color: white;
`;

export const Description = styled.div`
  text-align: justify;
  line-height: 22px;
  margin: 40px 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 40px 20px;
  }
`;

export const ShareButtons = styled.div`
  margin: 20px 0 60px;
`;
