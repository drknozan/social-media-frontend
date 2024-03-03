import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
