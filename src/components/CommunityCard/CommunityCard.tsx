import styles from './CommunityCard.module.scss';
import { Community } from '@src/types/Community';
import { useJoinCommunity } from '@hooks/useJoinCommunity';
import { useFetchCurrentUser } from '@hooks/useFetchCurrentUser';
import { useLeaveCommunity } from '@hooks/useLeaveCommunity';
import Alert from '@ui/Alert';
import Button from '@ui/Button';

const CommunityCard = ({ name, description, createdAt, _count }: Community) => {
  const { data: currentUserData, isLoading: isUserDataLoading } = useFetchCurrentUser();
  const { mutateAsync: joinCommunityMutation, error: joinError, isPending: isJoinPending } = useJoinCommunity();
  const { mutateAsync: leaveCommunityMutation, error: leaveError, isPending: isLeavePending } = useLeaveCommunity();

  const isMember = currentUserData?.memberships.some(membership => membership.community.name === name);

  const handleJoinLeaveClick = async () => {
    if (isMember) {
      await leaveCommunityMutation(name);
    } else {
      await joinCommunityMutation(name);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.communityInfo}>
        <h1 className={styles.communityName}>{name}</h1>
        <div className={styles.line}></div>
        <p className={styles.communityDescription}>{description}</p>
        <div className={styles.line}></div>
        <div className={styles.infoContainer}>
          <div className={styles.membersInfo}>
            <span className={styles.memberCount}>{_count?.memberships}</span>
            <span>Members</span>
          </div>
          <div className={styles.creationInfo}>
            <span className={styles.creationDate}>{createdAt?.toString()}</span>
            <span>Created at</span>
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        size="md"
        onClick={handleJoinLeaveClick}
        loading={isJoinPending || isUserDataLoading || isLeavePending}
      >
        {currentUserData && isMember ? 'Leave' : 'Join'}
      </Button>
      {joinError && <Alert type="error" message={joinError.message} />}
      {leaveError && <Alert type="error" message={leaveError.message} />}
    </div>
  );
};

export default CommunityCard;
