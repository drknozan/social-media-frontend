import styles from './CommunityCard.module.scss';
import Button from '../ui/Button/Button';

const CommunityCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.communityInfo}>
        <h1 className={styles.communityName}></h1>
        <div className={styles.line}></div>
        <p className={styles.communityDescription}></p>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <div className={styles.membersInfo}>
            <span className={styles.memberCount}></span>
            <span>Members</span>
          </div>
          <div className={styles.creationInfo}>
            <span className={styles.creationDate}></span>
            <span>Created at</span>
          </div>
        </div>
      </div>
      <Button variant="secondary" size="md">
        Join
      </Button>
    </div>
  );
};

export default CommunityCard;
