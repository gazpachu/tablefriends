import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { ReactComponent as Party } from '../../assets/party.svg';
import { breakpoints, Button, InputInline } from '../../styles/common.styles';

const createBorder = css`border: 1px solid #764bbb`;

export const Container = styled.section`
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, rgba(126,91,239,1) 0%,rgba(158,94,191,.9) 100%);
  color: white;
`;

export const PartyIcon = styled(Party)`
  fill: white;
  width: 150px;
  height: 150px;
`;

export const CreateButton = styled(Button)`
  background-color: #3bc392;
  padding: 12px 20px;
  ${createBorder};

  &:hover {
    background-color: #30b182;
  }
`;

export const CreateInput = styled(InputInline)`
  ${createBorder};
  font-size: 18px;
  color: black;
  min-width: auto;
  max-width: 500px;
`;

export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  counter-reset: line-number;
  margin: 0 auto 30px auto;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: left;
    width: 200px;
  }
`;

export const Item = styled.li`
  text-align: left;
  margin: 20px;
  display: inline-block;
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
  margin-right: 10px;
  color: #8777bb;
`;

export const Events = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Event = styled.li`

`;

export const EventLink = styled(Link)`
  color: white !important;
`;