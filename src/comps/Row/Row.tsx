import Styles from './Row.module.scss'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  fullWidth?: boolean;
}

const Row = ({ className, children, fullWidth, ...rest }: SectionProps) => {
  const rowClassName = `${Styles.row}${className ? ` ${className}` : ''}${fullWidth ? ` ${Styles.fullWidth}` : ''}`;
  return ( 
    <div className={rowClassName} {...rest} >
      {children}
    </div>
  );
}
 
export default Row
