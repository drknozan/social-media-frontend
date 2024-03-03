import styles from './Badge.module.scss';

interface BadgeProps {
  text: string;
  onClick?: () => void;
}

const Badge = ({ text, onClick }: BadgeProps) => {
  return (
    <div onClick={onClick} className={styles.badge}>
      {text}
    </div>
  );
};

export default Badge;
