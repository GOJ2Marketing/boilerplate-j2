import Styles from "./Section.module.scss";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
  ariaLabel?: string;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
}

const Section = ({ children, className, id, ref, ariaLabel, padding = 'full', ...rest }: SectionProps) => {
  return (
    <motion.section
      id={id ? id : ""}
      className={`${Styles.section} ${className ? className : ''} ${Styles[padding]}`}
      ref={ref}
      aria-label={ariaLabel}
      data-padding={padding}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default Section;
