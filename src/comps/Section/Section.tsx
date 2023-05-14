import Styles from "./Section.module.scss";
import { motion, MotionProps } from "framer-motion";

interface SectionProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
  ariaLabel?: string;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
  backgroundImage?: string;
}

const Section = ({
  children,
  className,
  id,
  ref,
  ariaLabel,
  padding = 'full',
  backgroundImage,
  ...rest
}: SectionProps) => {
  return (
    <motion.section
      id={id || ""}
      className={`${Styles.section} ${className ? className : ''} ${Styles[padding]}`}
      ref={ref}
      aria-label={ariaLabel}
      data-padding={padding}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default Section;
