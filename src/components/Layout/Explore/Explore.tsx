import styles from './Explore.module.scss';
//import { PlusOutlined } from '@ant-design/icons';

const Explore = () => {
  return (
    <div className={styles.container}>
      <h1>Top Communities</h1>
      <div className={styles.communitiesContainer}></div>
      <div className={styles.divider}></div>
      <h1>Users who you might know</h1>
      <div className={styles.usersContainer}></div>
    </div>
  );
};

export default Explore;
