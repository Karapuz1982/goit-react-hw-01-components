import styled from 'styled-components';

export const FriendListWrapper = styled.ul` 
list-style: none;
margin-top: 20px;
padding: 0;
display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendListItem = styled.li`
 display: flex;
align-items: center;
margin-bottom: 16px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
padding: 10px;
border-radius: 4px;
width: 200px;
`;

export const StatusIndicator = styled.span.attrs((props) => ({
  'data-isonline': props.isOnline ? 'true' : 'false',
}))`
 width: 10px;
height: 10px;
border-radius: 50%;
margin-right: 12px;
background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img` 

width: 48px;
height: 48px;
border-radius: 50%;
`;

export const Name = styled.p` 
font-size: 18px;
font-weight: bold;
`;