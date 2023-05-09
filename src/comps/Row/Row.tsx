import Styles from './Row.module.scss'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  fullWidth?: boolean;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
}

const Row = ({ className, children, fullWidth, padding = 'full', ...rest }: SectionProps) => {
  const rowClassName = `${Styles.row}${className ? ` ${className}` : ''}${fullWidth ? ` ${Styles.fullWidth}` : ''} ${Styles[padding]}`;
  return ( 
    <div className={rowClassName} {...rest} >
      {children}
    </div>
  );
}
 
export default Row
