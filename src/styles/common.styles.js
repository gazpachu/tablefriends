import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from "polished";
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#7e5bef',
  secondary: '#888'
};

const button = css`
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
`;

export const Button = styled.button`
  ${button};
`;

export const StyledLink = styled(Link)`
  ${button};
  text-decoration: none;
`;

export const Input = styled.input`
  background: white;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  border-radius: 5px;
  font-size: 14px;
  padding: 9px 8px;
  outline: none;
`;
