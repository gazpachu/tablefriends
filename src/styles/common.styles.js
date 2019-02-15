import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from "polished";
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#7e5bef',
  secondary: '#888'
};

export const breakpoints = {
  mobile: '768px'
};

const button = (props) => css`
  outline: none;
  background: ${colors.primary};
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: all .2s ease-in;

  &:hover {
    background: ${darken(0.2, colors.primary)};
  }

  opacity: ${props.disabled && '.5'};
  pointer-events: ${props.disabled && 'none'};
`;

export const Button = styled.button`
  ${button};
`;

export const ButtonLink = styled(Link)`
  ${button};
  text-decoration: none;
`;

export const TabLink = styled(Link)`
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: ${props => props.active ? colors.primary : colors.secondary} !important;
  border-bottom: 2px solid ${props => props.active ? colors.primary : colors.secondary};
`;

const formElement = css`
  background: white;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  border-radius: 5px;
  font-size: 14px;
  padding: 9px 8px;
  outline: none;
  margin-bottom: 10px;
  min-width: 60%;

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 100%;
  }
`;

export const Input = styled.input`
  ${formElement};
`;

export const Textarea = styled.textarea`
  ${formElement};
  min-height: 100px;
`;

export const Select = styled.select`
  ${formElement};
  height: 36px;
`;
