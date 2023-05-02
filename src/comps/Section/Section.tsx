import { Ref } from "react";
import Styles from "./Section.module.scss";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: any;
  ariaLabel?: string;
}

const Section = ({ children, className, id, ref, ariaLabel, ...rest }: SectionProps) => {
  return (
    <motion.section
      id={id ? id : ""}
      className={className ? `${Styles.section} ${className}` : Styles.section}
      ref={ref || ""}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default Section;
