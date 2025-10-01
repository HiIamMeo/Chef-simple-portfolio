import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  const variantClass = variant !== 'default' ? styles[variant] : '';
  
  return (
    <span className={`${styles.badge} ${variantClass} ${className || ''}`}>
      {children}
    </span>
  );
};

export default Badge;