import styles from './Sidebar.module.scss';
import {
  FormOutlined,
  LogoutOutlined,
  MessageOutlined,
  NotificationOutlined,
  ProfileOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <>
      <div className={showSidebar ? styles.containerActive : styles.container}>
        <div className={styles.buttonGroupContainer}>
          <button className={styles.menuButton}>
            <FormOutlined style={{ fontSize: '1.7rem' }} /> New Post
          </button>
          <button className={styles.menuButton}>
            <ProfileOutlined style={{ fontSize: '1.7rem' }} /> Profile
          </button>
          <button className={styles.menuButton}>
            <TeamOutlined style={{ fontSize: '1.7rem' }} /> Create Community
          </button>
          <button className={styles.menuButton}>
            <NotificationOutlined style={{ fontSize: '1.7rem' }} /> Notifications
          </button>
          <button className={styles.menuButton}>
            <MessageOutlined style={{ fontSize: '1.7rem' }} /> Messages
          </button>
          <button className={styles.menuButton}>
            <SettingOutlined style={{ fontSize: '1.7rem' }} /> Settings
          </button>
          <button className={styles.menuButton}>
            <LogoutOutlined style={{ fontSize: '1.7rem' }} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
