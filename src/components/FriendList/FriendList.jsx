import React from 'react';
import PropTypes from 'prop-types';
import {FriendListWrapper, FriendListItem, StatusIndicator, Avatar, Name} from './FriendList.styled.js'

const FriendList = ({ friends }) => (
    <FriendListWrapper>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem key={id}>
                <StatusIndicator isOnline={isOnline }/>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </FriendListItem>
        ))}
    </FriendListWrapper>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;












