import { LockOutlined } from '@ant-design/icons';
import Loading from '@components/Loading';
import PostItem from '@components/PostItem';
import UserCard from '@components/UserCard';
import Alert from '@components/ui/Alert';
import { useFetchUser } from '@hooks/useFetchUser';
import { isAxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import styles from './User.module.scss';

const User = () => {
  const { username } = useParams() as { username: string };

  const { data, isLoading, error } = useFetchUser(username);

  return (
    <>
      {isLoading && <Loading />}
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
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
          {!data.profileVisibility && (
            <div className={styles.locked}>
              <LockOutlined />
              <p>Profile is not visible.</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default User;
