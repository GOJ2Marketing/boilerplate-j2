import styles from './Row.module.scss'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
}

const Row = ({ className, children, ...rest }: SectionProps) => {
  return ( 
    <div className={`${styles.row} ${className}`} {...rest}>
      {children}
    </div>
  );
}
 
export default Row
