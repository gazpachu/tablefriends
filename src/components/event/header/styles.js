import styled from "@emotion/styled";
import { colors, Nav, TabLink } from "../../../styles/common.styles";

export const Header = styled.div`
  background-color: rgba(126, 91, 239, 0.9);
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  padding: 40px;
  margin: 0 auto;
  color: white;
`;

export const MainNav = styled(Nav)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 45px;
`;

export const MainTabLink = styled(TabLink)`
  opacity: ${props => (props.active ? "1" : "0.6")};
  background-color: ${props =>
    props.active ? "rgba(0,0,0,0.1);" : "transparent"};

  &:active,
  &:hover,
  &:visited {
    color: white;
  }
`;
