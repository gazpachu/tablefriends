import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { colors } from "../../../styles/common.styles";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: white;

  table,
  th,
  td {
    border: 1px solid #ddd;
  }
`;

const CellCommon = css`
  padding: 8px;
`;

export const Heading = styled.th`
  ${CellCommon};
`;

export const Cell = styled.td`
  ${CellCommon};
`;

export const UserIcon = styled.i`
  margin-right: 5px;
`;

export const DeadlineMsg = styled.h4`
  margin: 40px 0;
  color: ${colors.red};
`;
