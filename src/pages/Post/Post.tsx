import PostItem from '@components/PostItem';
import CommentItem from '@components/CommentItem';
import { useParams } from 'react-router-dom';
import { useFetchPost } from '@hooks/useFetchPost';
import Loading from '@components/Loading';
import Alert from '@ui/Alert';
import CommentForm from '@components/CommentForm';
import { useCreateComment } from '@hooks/useCreateComment';

const Post = () => {
  const { slug } = useParams() as { slug: string };

  const { data, isLoading, error: postError } = useFetchPost(slug);
  const { mutateAsync: createCommentMutation, error: commentError, isSuccess } = useCreateComment(slug);

  const handleSubmit = async (values: { content: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await createCommentMutation({ slug, content: values.content });
  };

  return (
    <div>
      {isLoading && <Loading />}
      {data && (
        <>
          <PostItem
            key={data.slug}
            slug={data.slug}
            title={data.title}
            content={data.content}
            createdAt={data.createdAt}
            user={data.user}
          />
          {data.comments?.map(comment => (
            <CommentItem
              id={comment.id}
              key={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          ))}
        </>
      )}
      <CommentForm onSubmit={handleSubmit} />
      {isSuccess && <Alert type="success" message="Comment successfully shared" />}
      {postError && <Alert type="error" message={postError.message} />}
      {commentError && <Alert type="error" message={commentError.message} />}
    </div>
  );
};

export default Post;
