import clsx from 'clsx';
import css from './FriendListItem.module.css';


export default function FriendListItem({avatar, name, isOnline}) {
    const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);
    return (
        <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.textitem}>{name}</p>
        <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    )
}