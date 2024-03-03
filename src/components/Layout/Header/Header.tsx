import SearchBar from '@components/SearchBar';
import Button from '@ui/Button';
import styles from './Header.module.scss';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';

const Header = ({ setShowSidebar }: { setShowSidebar: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle} onClick={() => setShowSidebar(prevState => !prevState)}>
          <MenuOutlined />
        </div>
        <div className={styles.logo}>SOCIAL MEDIA</div>
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={() => {}} />
      </div>
      <div className={styles.login}>
        <Button variant="secondary" size="md">
          <UserOutlined /> Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
