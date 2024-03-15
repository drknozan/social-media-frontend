import styles from './PostItem.module.scss';
import { Post } from '@src/types/Post';
import { useLocation, useNavigate } from 'react-router-dom';
import FollowItem from '@components/FollowItem';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { useUpvotePost } from '@hooks/useUpvotePost';
import { useDownvotePost } from '@hooks/useDownvotePost';
import Alert from '@ui/Alert';
import { isAxiosError } from 'axios';
import formatDate from '@utils/formatDate';

const PostItem = ({ slug, title, content, createdAt, user, community, upvotes, downvotes }: Post) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutateAsync: upvotePostMutation, error: upvoteError } = useUpvotePost();
  const { mutateAsync: downvotePostMutation, error: downvoteError } = useDownvotePost();

  return (
    <div className={styles.container}>
      <h1 className={styles.communityName} onClick={() => navigate(`/community/${community?.name}`)}>
        {community?.name}
      </h1>
      <h2 className={styles.title} onClick={() => navigate(`/post/${slug}`)}>
        {title}
      </h2>
      <div className={styles.line}></div>
      {user && <FollowItem username={user.username} />}
      <p className={styles.content} onClick={() => navigate(`/post/${slug}`)}>
        {content}
      </p>
      <div className={styles.date}>{createdAt && formatDate(createdAt)}</div>
      {location.pathname.includes('post') && (
        <div className={styles.voteContainer}>
          <div className={styles.vote} onClick={() => upvotePostMutation(slug)}>
            <LikeOutlined />
            <div>{upvotes}</div>
          </div>
          <div className={styles.vote} onClick={() => downvotePostMutation(slug)}>
            <DislikeOutlined />
            {downvotes}
          </div>
        </div>
      )}
      {upvoteError && isAxiosError(upvoteError) && <Alert type="error" message={upvoteError.response?.data.message} />}
      {downvoteError && isAxiosError(downvoteError) && (
        <Alert type="error" message={downvoteError.response?.data.message} />
      )}
    </div>
  );
};

export default PostItem;
