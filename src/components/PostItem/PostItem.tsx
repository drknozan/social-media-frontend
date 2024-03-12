import { PlusOutlined } from '@ant-design/icons';
import Button from '@ui/Button';
import styles from './PostItem.module.scss';
import { Post } from '@src/types/Post';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ slug, title, content, createdAt, user, community }: Post) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.communityName}>{community?.name}</h1>
      <h2 className={styles.title} onClick={() => navigate(`/post/${slug}`)}>
        {title}
      </h2>
      <div className={styles.line}></div>
      <div className={styles.user}>
        <div className={styles.username} onClick={() => navigate(`/users/${user?.username}`)}>
          {user?.username}
        </div>
        <Button size="sm" variant="secondary">
          Follow <PlusOutlined />
        </Button>
      </div>
      <p className={styles.content} onClick={() => navigate(`/post/${slug}`)}>
        {content}
      </p>
      <div className={styles.date}>{createdAt?.toString()}</div>
    </div>
  );
};

export default PostItem;
