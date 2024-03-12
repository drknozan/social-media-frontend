import styles from './CommentItem.module.scss';
import { Comment } from '@src/types/Comment';

const CommentItem = ({ user, content, createdAt }: Comment) => {
  return (
    <div className={styles.container}>
      <a className={styles.username}>{user.username}</a>
      <p className={styles.content}>{content}</p>
      <span className={styles.date}>{createdAt.toString()}</span>
      <div className={styles.line}></div>
    </div>
  );
};

export default CommentItem;
