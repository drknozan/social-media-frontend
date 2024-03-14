import PostForm from '@components/PostForm';
import styles from './CreatePost.module.scss';
import { useCreatePost } from '@hooks/useCreatePost';
import { isAxiosError } from 'axios';
import { Membership } from '@src/types/Membership';
import { useFetchCurrentUser } from '@hooks/useFetchCurrentUser';
import Alert from '@ui/Alert';

const CreatePost = () => {
  const { mutateAsync: createPostMutation, error, isSuccess } = useCreatePost();
  const { data } = useFetchCurrentUser();

  const handleSubmit = async (values: { title: string; content: string; communityName: string }) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await createPostMutation(values);
  };

  return (
    <div className={styles.container}>
      {data && (
        <PostForm
          communities={data.memberships.map((membership: Membership) => membership.community.name)}
          onSubmit={handleSubmit}
        />
      )}
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
      {isSuccess && <Alert type="success" message="Post successfully created" />}
    </div>
  );
};

export default CreatePost;
