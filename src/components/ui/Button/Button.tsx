import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary';
}

const Button = ({ size = 'md', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
