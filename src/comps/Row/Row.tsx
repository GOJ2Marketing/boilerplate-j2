import Styles from './Row.module.scss'
import { motion, MotionProps } from "framer-motion";

interface RowProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: any;
  fullWidth?: boolean;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
  id?: string;
}

const Row = ({ className, id, children, fullWidth, padding = 'full', ariaLabel, ...rest }: RowProps) => {
  const rowClassName = `${Styles.row}${className ? ` ${className}` : ''}${fullWidth ? ` ${Styles.fullWidth}` : ''} ${Styles[padding]}`;
  
  return ( 
    <motion.div id={id ? id : ""} className={rowClassName} aria-label={ariaLabel} {...rest}>
      {children}
    </motion.div>
  );
}
 
export default Row
