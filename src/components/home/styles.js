import styled from '@emotion/styled';
import { ReactComponent as Party } from '../../assets/party.svg';
import { colors } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding: 20px;
`;

export const PartyIcon = styled(Party)`
  fill: ${colors.primary};
  width: 150px;
  height: 150px;
`;

export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  counter-reset: line-number;
  margin: 0 auto 30px auto;
`;

export const Item = styled.li`
  counter-increment: line-number;
  text-align: left;
  margin: 20px;
  display: inline-block;

  &:before {
    content: counter(line-number)" ";
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    color: white;
  }
`;

export const Events = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Event = styled.li`

`;
