import { logout } from '@store/slices/authSlice';
import styles from './Sidebar.module.scss';
import {
  FormOutlined,
  HomeOutlined,
  LogoutOutlined,
  NotificationOutlined,
  ProfileOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { AppDispatch } from '@store/store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();

  return (
    <>
      <div className={showSidebar ? styles.containerActive : styles.container}>
        <div className={styles.buttonGroupContainer}>
          <Link to="/" className={styles.menuButton}>
            <HomeOutlined style={{ fontSize: '1.7rem' }} /> Home
          </Link>
          <Link to="/post/create" className={styles.menuButton}>
            <FormOutlined style={{ fontSize: '1.7rem' }} /> New Post
          </Link>
          <Link to="/" className={styles.menuButton}>
            <ProfileOutlined style={{ fontSize: '1.7rem' }} /> Profile
          </Link>
          <Link to="/community/create" className={styles.menuButton}>
            <TeamOutlined style={{ fontSize: '1.7rem' }} /> Create Community
          </Link>
          <Link to="/" className={styles.menuButton}>
            <NotificationOutlined style={{ fontSize: '1.7rem' }} /> Notifications
          </Link>
          <Link to="/" className={styles.menuButton}>
            <SettingOutlined style={{ fontSize: '1.7rem' }} /> Settings
          </Link>
          <Link
            to="/login"
            className={styles.menuButton}
            onClick={() => {
              queryClient.removeQueries();
              dispatch(logout());
            }}
          >
            <LogoutOutlined style={{ fontSize: '1.7rem' }} /> Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
