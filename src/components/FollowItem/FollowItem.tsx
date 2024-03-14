import { useFetchCurrentUser } from '@hooks/useFetchCurrentUser';
import { useFollowUser } from '@hooks/useFollowUser';
import { useUnfollowUser } from '@hooks/useUnfollowUser';
import Alert from '@ui/Alert';
import Button from '@ui/Button';
import { isAxiosError } from 'axios';

const FollowItem = ({ username }: { username: string }) => {
  const { mutateAsync: followUserMutation, error: followError } = useFollowUser();
  const { mutateAsync: unfollowUserMutation, error: unFollowError } = useUnfollowUser();
  const { data, error: userError } = useFetchCurrentUser();

  const isFollowing = data?.followed.some(follow => follow.followed?.username === username);

  return (
    <>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => (isFollowing ? unfollowUserMutation(username) : followUserMutation(username))}
      >
        {data && isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      {followError && isAxiosError(followError) && <Alert type="error" message={followError.response?.data.message} />}
      {unFollowError && isAxiosError(unFollowError) && (
        <Alert type="error" message={unFollowError.response?.data.message} />
      )}
      {userError && isAxiosError(userError) && <Alert type="error" message={userError.response?.data.message} />}
    </>
  );
};

export default FollowItem;
