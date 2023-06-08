import { useEffect, useRef } from 'react';
import { useActiveSection } from '@/utils/contexts';
import Styles from './Section.module.scss';
import { motion, MotionProps } from 'framer-motion';

interface SectionProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  theme?: 'light' | 'dark'; // add theme prop
  ariaLabel?: string;
  padding?: 'full' | 'noTop' | 'noBottom' | 'none';
  backgroundImage?: string;
  fullScreen?: boolean;
}

const Section = ({
  children,
  className,
  id,
  theme = 'light', // default to light theme
  ariaLabel,
  padding = 'full',
  backgroundImage,
  fullScreen,
  ...rest
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const navHeight = 72; // height of your nav
        const isUnderNav = rect.top < navHeight && rect.bottom > navHeight;
        if (isUnderNav) {
          setActiveSection({ theme });
        }
      }
    };

    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection, theme]);
  

  const sectionStyle: React.CSSProperties = {};
  if (backgroundImage) {
    sectionStyle.backgroundImage = `url(${backgroundImage})`;
  }

  return (
    <motion.section
      id={id || ''}
      className={`${Styles.section} ${className || ''} ${
        fullScreen ? Styles.fullScreen : ''
      } ${Styles[padding]}`}
      ref={sectionRef}
      aria-label={ariaLabel}
      data-padding={padding}
      style={sectionStyle}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default Section;
