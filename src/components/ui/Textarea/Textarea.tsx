import { TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ...props }: TextareaProps) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default Textarea;
