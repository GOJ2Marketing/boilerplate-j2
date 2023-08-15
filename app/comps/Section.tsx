"use client"
import { motion, MotionProps } from "framer-motion";

interface SectionProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className, ...rest }: SectionProps) {
  const defaultClass = 'py-10';

  return (
      <motion.section className={`${defaultClass} ${className}`} {...rest}>
          {children}
      </motion.section>
  );
}