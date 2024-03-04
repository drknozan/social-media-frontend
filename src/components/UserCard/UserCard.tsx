import styles from './UserCard.module.scss';
import Button from '@ui/Button';

const UserCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <h1 className={styles.username}></h1>
        <div className={styles.line}></div>
        <p className={styles.userBio}></p>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <div className={styles.followerInfo}>
            <span className={styles.followerCount}></span>
            <span>Followers</span>
          </div>
          <div className={styles.followedInfo}>
            <span className={styles.followedCount}></span>
            <span>Followed</span>
          </div>
          <div className={styles.creationInfo}>
            <span className={styles.creationDate}></span>
            <span>Created at</span>
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
