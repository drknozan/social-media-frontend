import { PlusOutlined } from '@ant-design/icons';
import Button from '@components/ui/Button';
import styles from './PostItem.module.scss';

const PostItem = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.communityName}></h1>
      <h2 className={styles.title}></h2>
      <div className={styles.line}></div>
      <div className={styles.user}>
        <div className={styles.username}></div>
        <Button size="sm" variant="secondary">
          Follow <PlusOutlined />
        </Button>
      </div>
      <p className={styles.content}></p>
      <div className={styles.date}></div>
    </div>
  );
};

export default PostItem;
