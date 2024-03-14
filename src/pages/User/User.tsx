import Loading from '@components/Loading';
import PostItem from '@components/PostItem';
import UserCard from '@components/UserCard';
import Alert from '@components/ui/Alert';
import { useFetchUser } from '@hooks/useFetchUser';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams() as { username: string };

  const { data, isLoading, error } = useFetchUser(username);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Alert type="error" message={error.message} />}
      {data && (
        <>
          <UserCard username={data.username} _count={data._count} bio={data.bio} />
          {data.posts?.map(post => (
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
      )}
    </>
  );
};

export default User;
