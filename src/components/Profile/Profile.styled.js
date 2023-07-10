import { styled } from "styled-components"

export const ProfileConteiner = styled.div`
display: flex;
align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f0f0;
  margin: 0px, auto;
`;

export const Description = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: gray;
`;

export const StatQuantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;







