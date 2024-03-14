import styles from './Community.module.scss';
import CommunityCard from '@components/CommunityCard';
import PostItem from '@components/PostItem';
import { useFetchCommunity } from '@hooks/useFetchCommunity';
import { useParams } from 'react-router-dom';

const Community = () => {
  const { communityName } = useParams() as { communityName: string };
  const { data, isLoading, error } = useFetchCommunity(communityName);

  return (
    <div>
      {isLoading && <h1>Fetching...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <div className={styles.container}>
          <CommunityCard name={data.name} description={data.description} createdAt={data.createdAt} />
          {data.posts?.map(post => (
            <PostItem
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
