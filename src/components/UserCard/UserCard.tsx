import { User } from '@src/types/User';
import styles from './UserCard.module.scss';
import Button from '@ui/Button';

const UserCard = ({ username, _count, bio }: User) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <h1 className={styles.username}>{username}</h1>
        <div className={styles.line}></div>
        <p className={styles.userBio}>{bio}</p>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <div className={styles.followerInfo}>
            <span className={styles.followerCount}>{_count?.followers}</span>
            <span>Followers</span>
          </div>
          <div className={styles.followedInfo}>
            <span className={styles.followedCount}>{_count?.followed}</span>
            <span>Followed</span>
          </div>
        </div>
      </div>
      <Button variant="secondary" size="md">
        Follow
      </Button>
    </div>
  );
};

export default UserCard;
