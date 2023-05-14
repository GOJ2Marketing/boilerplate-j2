import Styles from './Row.module.scss'
import { motion, MotionProps } from "framer-motion";

interface RowProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  fullWidth?: boolean;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
}

const Row = ({ className, children, fullWidth, padding = 'full', ...rest }: RowProps) => {
  const rowClassName = `${Styles.row}${className ? ` ${className}` : ''}${fullWidth ? ` ${Styles.fullWidth}` : ''} ${Styles[padding]}`;
  
  return ( 
    <motion.div className={rowClassName} {...rest}>
      {children}
    </motion.div>
  );
}
 
export default Row
