import Loading from '@components/Loading';
import PostItem from '@components/PostItem';
import Alert from '@ui/Alert';
import { useFetchFeed } from '@hooks/useFetchFeed';
import { isAxiosError } from 'axios';

const Feed = () => {
  const { data, isLoading, error } = useFetchFeed();

  return (
    <>
      {isLoading && <Loading />}
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
      {data &&
        data.map(post => (
          <PostItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            user={post.user}
            community={post.community}
          />
        ))}
    </>
  );
};

export default Feed;
