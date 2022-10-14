import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ best }) => {
  return (
    <List>
      {best.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  best: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
