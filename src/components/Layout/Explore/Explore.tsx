import Badge from '@components/ui/Badge';
import styles from './Explore.module.scss';
import { useFetchTopCommunities } from '@hooks/useFetchTopCommunities';
import Alert from '@components/ui/Alert';
import { isAxiosError } from 'axios';
import { useFetchRecommendations } from '@hooks/useFollowRecommendations';
import FollowItem from '@components/FollowItem';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const { data: topCommunitiesData, error: topCommunitiesError } = useFetchTopCommunities();
  const { data: recommendationsData, error: recommendationsError } = useFetchRecommendations();

  return (
    <div className={styles.container}>
      <h1>Top Communities</h1>
      <div className={styles.communitiesContainer}>
        {topCommunitiesData &&
          topCommunitiesData.map(community => (
            <Badge
              key={community.name}
              text={community.name}
              onClick={() => navigate(`/community/${community.name}`)}
            />
          ))}
      </div>
      <div className={styles.divider}></div>
      <h1>Users who you might know</h1>
      <div className={styles.usersContainer}>
        {recommendationsData &&
          recommendationsData.map(user => <FollowItem key={user.username} username={user.username} />)}
      </div>
      {topCommunitiesError && isAxiosError(topCommunitiesError) && (
        <Alert type="error" message={topCommunitiesError?.response?.data.message} />
      )}
      {recommendationsError && isAxiosError(recommendationsError) && (
        <Alert type="error" message={recommendationsError?.response?.data.message} />
      )}
    </div>
  );
};

export default Explore;
