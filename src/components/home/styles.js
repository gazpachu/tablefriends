import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import { ReactComponent as Party } from "../../assets/party.svg";
import { breakpoints, Button, InputInline } from "../../styles/common.styles";
import { headerHeight } from "../topNav/styles";

const createBorder = css`
  border: 1px solid #764bbb;
`;

export const Container = styled.section`
  text-align: center;
  padding: 20px;
  background: linear-gradient(
    to bottom,
    rgba(126, 91, 239, 1) 0%,
    rgba(158, 94, 191, 0.85) 100%
  );
  color: white;
  min-height: calc(100vh - ${headerHeight});
`;

export const PartyIcon = styled(Party)`
  fill: white;
  width: 150px;
  height: 150px;
`;

export const StartTitle = styled.h3`
  font-weight: lighter;
  font-size: 24px;
`;

export const CreateButton = styled(Button)`
  background-color: #3bc392;
  padding: 12px 20px;
  ${createBorder};

  &:hover {
    background-color: #30b182;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const CreateInput = styled(InputInline)`
  ${createBorder};
  font-size: 18px;
  color: black;
  min-width: auto;

  @media (min-width: ${breakpoints.mobile}) {
    max-width: 500px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 5px;
  }
`;

export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  counter-reset: line-number;
  margin: 0 auto 30px auto;

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const Item = styled.li`
  margin: 20px;

  @media (min-width: ${breakpoints.mobile}) {
    text-align: left;
    display: inline-block;
  }
`;

export const ItemIcon = styled.i`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  color: #8777bb;

  @media (min-width: ${breakpoints.mobile}) {
    margin-right: 10px;
  }
`;

export const ItemName = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    display: inline-block;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 5px;
  }
`;

export const HeadingSeparator = styled.h3`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
  font-weight: lighter;
  font-size: 24px;
`;

export const Events = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const Event = styled.li``;

export const EventLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  min-height: 70px;

  &:active,
  &:hover,
  &:visited {
    color: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
