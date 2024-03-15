import { DeleteOutlined } from '@ant-design/icons';
import styles from './CommentItem.module.scss';
import { Comment } from '@src/types/Comment';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useDeleteComment } from '@hooks/useDeleteComment';
import { isAxiosError } from 'axios';
import Alert from '@ui/Alert';

interface CommentItemProps extends Comment {
  slug: string;
}

const CommentItem = ({ id, user, content, createdAt, slug }: CommentItemProps) => {
  const { user: currentUser } = useSelector((state: RootState) => state.auth);
  const { mutateAsync: deleteCommentMutation, error } = useDeleteComment(slug);

  return (
    <div className={styles.container}>
      <a className={styles.username}>{user.username}</a>
      <p className={styles.content}>{content}</p>
      <span className={styles.date}>{createdAt.toString()}</span>
      {currentUser?.username === user.username && (
        <div className={styles.delete} onClick={() => deleteCommentMutation({ slug, commentId: id })}>
          <DeleteOutlined />
        </div>
      )}
      <div className={styles.line}></div>
      {error && isAxiosError(error) && <Alert type="error" message={error.response?.data.message} />}
    </div>
  );
};

export default CommentItem;
