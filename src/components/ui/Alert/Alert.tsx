import { useEffect, useState } from 'react';
import styles from './Alert.module.scss';

interface AlertProps {
  message: string;
  type: 'default' | 'error' | 'success' | 'warning';
}

const Alert = ({ message, type = 'default' }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={`${styles.alert} ${styles[type]}`}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
