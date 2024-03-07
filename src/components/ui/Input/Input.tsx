import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  s?: 'sm' | 'md' | 'lg';
}

const Input = ({ s = 'md', ...props }: InputProps) => {
  return <input className={`${styles.input} ${styles[s]}`} {...props} />;
};

export default Input;
