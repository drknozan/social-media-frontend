import styles from './Comment.module.scss';

const Comment = () => {
  return (
    <div className={styles.container}>
      <a className={styles.username}></a>
      <p className={styles.content}></p>
      <span className={styles.date}></span>
      <div className={styles.line}></div>
    </div>
  );
};

export default Comment;
