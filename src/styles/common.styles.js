import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from "polished";
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#A79C8B'
};

const button = css`
  outline: none;
  background: ${colors.primary};
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;

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
