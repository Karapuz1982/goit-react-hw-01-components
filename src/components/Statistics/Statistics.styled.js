

import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top:20px;
 
`;


export const Title = styled.h2`
  font-size: 24px;
  margin: 20px;
 display: flex;
 justify-content: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  min-width: auto;
 background-color: ${({ color }) => color};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding: 20px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: white;
`;
