import PostItem from '@components/PostItem';
import CommentItem from '@components/CommentItem';
import { useParams } from 'react-router-dom';
import { useFetchPost } from '@hooks/useFetchPost';
import Loading from '@components/Loading';
import Alert from '@ui/Alert';
import CommentForm from '@components/CommentForm';
import { useCreateComment } from '@hooks/useCreateComment';
import { isAxiosError } from 'axios';

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
            community={data.community}
            user={data.user}
            upvotes={data.upvotes}
            downvotes={data.downvotes}
          />
          {data.comments?.map(comment => (
            <CommentItem
              id={comment.id}
              key={comment.id}
              user={comment.user}
              content={comment.content}
              createdAt={comment.createdAt}
              slug={data.slug}
            />
          ))}
        </>
      )}
      <CommentForm onSubmit={handleSubmit} />
      {isSuccess && <Alert type="success" message="Comment successfully shared" />}
      {postError && isAxiosError(postError) && <Alert type="error" message={postError.response?.data.message} />}
      {commentError && isAxiosError(commentError) && (
        <Alert type="error" message={commentError.response?.data.message} />
      )}
    </div>
  );
};

export default Post;
