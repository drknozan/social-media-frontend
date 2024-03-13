import styles from './MainLayout.module.scss';
import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';
import Explore from '@layout/Explore';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

const MainLayout = () => {
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user === null) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);

  return (
    <>
      <Header setShowSidebar={setShowSidebar} />
      <div className={styles.container}>
        <Sidebar showSidebar={showSidebar} />
        <div className={styles.contentContainer}>
          <Outlet />
        </div>
        <Explore />
      </div>
    </>
  );
};

export default MainLayout;
