import styled from '@emotion/styled';
import { colors } from '../../styles/common.styles';

export const Container = styled.section`
  text-align: center;
  padding: 20px;
`;

export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  counter-reset: line-number;
  margin: 0 auto 30px auto;
  width: 200px;
`;

export const Item = styled.li`
  counter-increment: line-number;
  text-align: left;
  margin: 20px;

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
    color: black;
  }
`;
