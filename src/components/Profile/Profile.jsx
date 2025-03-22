import css from './Profile.module.css'

export default function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.card}>
            <div>
            <img className={css.avatar} src={image} alt="User avatar" width={250}  height={250}/>
            <p className={css.nickname}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
            </div>

            <ul className={css.list}>
            <li className={css.item}>
                    <span className={css.itemtext}>Followers</span>
                    <span className={css.itemdata}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemtext}>Views</span>
                    <span className={css.itemdata}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemtext}>Likes</span>
                    <span className={css.itemdata}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}