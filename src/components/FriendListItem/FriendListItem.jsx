import PropTypes from 'prop-types';
import { Item, Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status
        style={{
          backgroundColor: isOnline ? '#7CFC00' : 'red',
        }}
      ></Status>
      <Avatar src={avatar} alt="User avatar" width="100" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
