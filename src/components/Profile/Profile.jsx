import React from 'react';
import PropTypes from 'prop-types';
import user from '../Data/user.json';
import { ProfileConteiner, Description, Avatar, Name, Tag, Location, Stats, StatItem, StatLabel, StatQuantity  } from './Profile.styled';

const Profile = () => (
  < ProfileConteiner >
    <Description>
      <Avatar  src={user.avatar}  alt="User avatar"  />
      <Name>{user.username}</Name>
      <Tag>@{user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>
    <Stats>
      <StatItem>
        <StatLabel>Followers</StatLabel>
        <StatQuantity>{user.stats.followers}</StatQuantity>
      </StatItem>
      <StatItem>
        <StatLabel>Views</StatLabel>
        <StatQuantity>{user.stats.views}</StatQuantity>
      </StatItem>
      <StatItem>
        <StatLabel>Likes</StatLabel>
        <StatQuantity>{user.stats.likes}</StatQuantity>
      </StatItem>
    </Stats>
  </ProfileConteiner>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


export default Profile;
