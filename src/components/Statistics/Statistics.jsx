

import React from 'react';
import PropTypes from 'prop-types';
import {
    StatisticsWrapper,
 Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => (
    <StatisticsWrapper>
        
    {title && <Title>{title}</Title>}
    
    <StatList>
      {stats.map(({ id, label, percentage, color}) => (
        <StatItem key={id} color={color}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatItem>
      ))}
    </StatList>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
