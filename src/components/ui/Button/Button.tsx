import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button = ({ size = 'md', variant = 'primary', loading, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${loading && styles.loading}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          Loading... <LoadingOutlined />
        </>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
