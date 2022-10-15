import styled from '@emotion/styled';

export const Table = styled.table`
  font-family: sans-serif;
  table-layout: fixed;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Thead = styled.thead`
  background-color: ${props => `${props.theme.colors.colorThead}`};
  color: ${props => `${props.theme.colors.primaryColor}`};
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 20px;
  background: ${props => props.theme.colors.colorThead};
  border: 1px solid #dddddd;
`;

export const Tr = styled.tr`
  color: ${props => `${props.theme.colors.red}`};
`;

export const Td = styled.td`
  padding: 15px 10px;
  border: 1px solid #eee;
  text-align: center;
`;

export const Tbody = styled.tbody`
  Tr:nth-child(odd) {
    background: #fff;
  }
  Tr:nth-child(even) {
    background: ${props => `${props.theme.colors.trColor}`};
  }
`;
