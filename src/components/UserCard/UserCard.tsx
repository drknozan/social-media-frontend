import { User } from '@src/types/User';
import styles from './UserCard.module.scss';
import Button from '@ui/Button';
import { isAxiosError } from 'axios';
import Alert from '@ui/Alert';
import { useFetchCurrentUser } from '@hooks/useFetchCurrentUser';
import { useFollowUser } from '@hooks/useFollowUser';
import { useUnfollowUser } from '@hooks/useUnfollowUser';

const UserCard = ({ username, _count, bio }: User) => {
  const { mutateAsync: followUserMutation, error: followError } = useFollowUser();
  const { mutateAsync: unfollowUserMutation, error: unFollowError } = useUnfollowUser();
  const { data, error: userError } = useFetchCurrentUser();

  const isFollowing = data?.followed.some(follow => follow.followed?.username === username);

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
      <Button
        variant="secondary"
        size="md"
        onClick={() => (isFollowing ? unfollowUserMutation(username) : followUserMutation(username))}
      >
        {data && isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      {followError && isAxiosError(followError) && <Alert type="error" message={followError.response?.data.message} />}
      {unFollowError && isAxiosError(unFollowError) && (
        <Alert type="error" message={unFollowError.response?.data.message} />
      )}
      {userError && isAxiosError(userError) && <Alert type="error" message={userError.response?.data.message} />}
    </div>
  );
};

export default UserCard;
