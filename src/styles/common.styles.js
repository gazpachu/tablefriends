import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#7e5bef",
  secondary: "#888",
  red: "#c74343"
};

export const breakpoints = {
  mobile: "768px"
};

export const PageContainer = styled.section`
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
`;

const button = props => css`
  outline: none;
  background: ${props.color ? colors[props.color] : colors.primary};
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: ${props.size === "small" ? "11px" : "14px"};
  padding: ${props.size === "small" ? "5px" : "10px 20px"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${props.color
      ? darken(0.2, colors[props.color])
      : darken(0.2, colors.primary)};
  }

  opacity: ${props.disabled && ".5"};
  pointer-events: ${props.disabled && "none"};
`;

export const Button = styled.button`
  ${button};
`;

export const ButtonLink = styled(Link)`
  ${button};
  text-decoration: none;
`;

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
`;

const tabItem = props => css`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: ${props.active ? colors.primary : colors.secondary};
  border-bottom: 2px solid ${props.active ? colors.primary : colors.secondary};

  &:active,
  &:hover,
  &:visited {
    ${props.active ? colors.primary : colors.secondary};
  }
`;

export const TabButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${tabItem};
`;

export const TabLink = styled(Link)`
  ${tabItem};
  text-decoration: none;
`;

export const TabIcon = styled.i`
  margin-right: 5px;
`;

const formElement = css`
  background: white;
  border: 1px solid ${colors.secondary};
  color: #333;
  border-radius: 5px;
  font-size: 14px;
  padding: 9px 8px;
  outline: none;
  width: 100%;
`;

export const Input = styled.input`
  ${formElement};
`;

export const InputInline = styled.input`
  ${formElement};
  margin-right: 5px;
`;

export const Label = styled.label`
  margin-right: 5px;
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;

export const Textarea = styled.textarea`
  ${formElement};
  min-height: 100px;
`;

export const Select = styled.select`
  ${formElement};
  height: 36px;
`;

export const SelectInline = styled.select`
  ${formElement};
  height: 36px;
  margin-right: 5px;
`;

export const Info = styled.span`
  display: block;
  font-size: 10px;
  margin-top: 3px;
`;

export const IconLeft = styled.i`
  margin-right: 5px;
`;

export const IconRight = styled.i`
  margin-left: 5px;
`;
