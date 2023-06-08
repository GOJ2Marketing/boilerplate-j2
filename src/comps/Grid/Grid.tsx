import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';
import { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { BREAKPOINTS, DEFAULT_SPACING } from '../../utils/constants';
import { MotionProps } from 'framer-motion';

interface GridProps extends MotionProps {
  children: ReactNode;
  columns: number;
  template?: string;
  className?: string;
  gap?: number;
  laptop?: string;
  tablet?: string;
  phone?: string;
  alignment?: 'start' | 'center' | 'end';
}

  const Grid = ({ children, columns, template, className, gap, laptop, tablet, phone, alignment }: GridProps) => {
    const [gridStyle, setGridStyle] = useState({
      display: 'grid',
      gridTemplateColumns: template || `repeat(${columns}, 1fr)`,
      width: '100%',
      gridGap: `${gap || DEFAULT_SPACING}px`,
      alignItems: 'start',
    });
  
    useEffect(() => {
      const updateGridStyles = () => {
        const screenWidth = window.innerWidth;
      
        if (phone && screenWidth <= BREAKPOINTS.phone) {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: phone,
          }));
        } else if (tablet && screenWidth <= BREAKPOINTS.tablet) {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: tablet,
          }));
        } else if (laptop && screenWidth <= BREAKPOINTS.laptop) {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: laptop,
          }));
        } else {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: template || `repeat(${columns}, 1fr)`,
          }));
        }
      
        // Handle alignment
        if (alignment) {
          setGridStyle((prevState) => ({
            ...prevState,
            alignItems: alignment,
          }));
        }
      };      
    
      window.addEventListener('resize', updateGridStyles);
      updateGridStyles();
    
      return () => {
        window.removeEventListener('resize', updateGridStyles);
      };
    }, [template, columns, laptop, phone, tablet, alignment]);    
  
    return (
      <div className={`${styles.grid} ${className}`} style={gridStyle}>
        {children}
      </div>
    );
  };

  Grid.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.number.isRequired,
    template: PropTypes.string,
    className: PropTypes.string,
    gap: PropTypes.number,
    laptop: PropTypes.string,
    alignment: PropTypes.oneOf(['start', 'center', 'end']),
  };
  
  Grid.defaultProps = {
    template: '',
    className: '',
    laptop: '',
    alignment: 'start'
  };

export default Grid;
