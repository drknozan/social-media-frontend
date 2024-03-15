import Loading from '@components/Loading';
import styles from './Community.module.scss';
import CommunityCard from '@components/CommunityCard';
import PostItem from '@components/PostItem';
import { useFetchCommunity } from '@hooks/useFetchCommunity';
import { useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import Alert from '@ui/Alert';

const Community = () => {
  const { communityName } = useParams() as { communityName: string };
  const { data, isLoading, error } = useFetchCommunity(communityName);

  return (
    <div>
      {isLoading && <Loading />}
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
      {data && (
        <div className={styles.container}>
          <CommunityCard
            key={data.name}
            name={data.name}
            description={data.description}
            createdAt={data.createdAt}
            _count={data._count}
          />
          {data.posts?.map(post => (
            <PostItem
              key={post.slug}
              slug={post.slug}
              title={post.title}
              content={post.content}
              user={post.user}
              createdAt={post.createdAt}
              community={post.community}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
