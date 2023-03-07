import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className= {css.friends}>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}
