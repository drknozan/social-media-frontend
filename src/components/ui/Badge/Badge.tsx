import styles from './Badge.module.scss';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  onClick?: () => void;
}

const Badge = ({ text, ...props }: BadgeProps) => {
  return (
    <div className={styles.badge} {...props}>
      {text}
    </div>
  );
};

export default Badge;
