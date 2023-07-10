import styled from 'styled-components';

export const Table = styled.table` 
width: 100%;
border-collapse: collapse;
margin-top: 20px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
 background-color: lightblue;
font-weight: bold;

`;

export const TableHeaderCell = styled.th`
 padding: 10px;
 text-align: center;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr` 
 &:nth-child(even) {
    background-color: #f9fafc;
}

`;

export const TableCell = styled.td`
 padding: 10px;
 border: 1px solid #ccc;
 text-align: center;
`;