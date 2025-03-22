import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';


export default function FriendList({ friends }) {
    return (
        <ul className={css.frienslist}>
            {friends.map((user) => (
                <li className={css.listitem} key={user.id}>
                    <FriendListItem avatar={user.avatar}
                                    name={user.name} 
                                    isOnline={user.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}
