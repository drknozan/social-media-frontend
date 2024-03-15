import SearchBar from '@components/SearchBar';
import styles from './Header.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

const Header = ({ setShowSidebar }: { setShowSidebar: Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle} onClick={() => setShowSidebar(prevState => !prevState)}>
          <MenuOutlined />
        </div>
        <div className={styles.logo}>SOCIAL MEDIA</div>
      </div>
      <div className={styles.search}>
        <SearchBar
          onSearch={query => {
            navigate({ pathname: '/community/search', search: `?${createSearchParams({ q: query })}` });
          }}
        />
      </div>
      <Link to="/settings" className={styles.user}>
        Welcome, {user?.username}.
      </Link>
    </div>
  );
};

export default Header;
