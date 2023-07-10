import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from './TransactionHistory.styled.js';

const TransactionHistory = ({ items }) => (
  <Table className="transaction-history">
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Currency</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
