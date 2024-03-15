import { InputHTMLAttributes } from 'react';
import styles from './Switch.module.scss';

const Switch = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" className={styles.switchCheckbox} {...props} />
      <span className={styles.switchSlider} />
    </label>
  );
};

export default Switch;
