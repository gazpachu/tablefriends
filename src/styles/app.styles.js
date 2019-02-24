import styled from "@emotion/styled";
import { colors, breakpoints } from "./common.styles";
import { Link } from "react-router-dom";

export const App = styled.div`
  box-shadow: 0 0 10px 0;
  width: 100%;
  color: ${colors.secondary};
  overflow: hidden;
  max-width: 1080px;

  @media (min-width: ${breakpoints.mobile}) {
    margin: 30px;
    border-radius: 10px;
  }
`;

export const AppHeader = styled.div`
  text-align: center;
  background-color: ${colors.primary};
  color: white;
  height: 80px;
`;

export const AppHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:active,
  &:hover,
  &:visited {
    color: white;
  }
`;

export const Title = styled.h1`
  font-weight: lighter;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
  padding-top: 10px;

  &:after {
    content: "beta";
    position: absolute;
    font-size: 11px;
  }
`;

export const Subtitle = styled.h1`
  font-weight: lighter;
  font-size: 10px;
  margin-top: 5px;
  text-transform: uppercase;
`;
