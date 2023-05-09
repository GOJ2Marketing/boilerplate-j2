import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';
import { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {breakpoints} from '../../../constants';

interface GridProps {
  children: ReactNode;
  columns: number;
  template?: string;
  className?: string;
  gap?: number;
  laptop?: string;
  tablet?: string;
  phone?: string;
}

  const Grid = ({ children, columns, template, className, gap, laptop, tablet, phone }: GridProps) => {
    const [gridStyle, setGridStyle] = useState({
      display: 'grid',
      gridTemplateColumns: template || `repeat(${columns}, 1fr)`,
      width: '100%',
      gridGap: `${gap || 0}px`,
    });
  
    useEffect(() => {
      const updateGridStyles = () => {
        const screenWidth = window.innerWidth;
    
        if (phone && screenWidth <= breakpoints.phone) {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: phone,
          }));
        } else if (tablet && screenWidth <= breakpoints.tablet) {
          setGridStyle((prevState) => ({
            ...prevState,
            gridTemplateColumns: tablet,
          }));
        } else if (laptop && screenWidth <= breakpoints.laptop) {
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
      };
    
      window.addEventListener('resize', updateGridStyles);
      updateGridStyles();
    
      return () => {
        window.removeEventListener('resize', updateGridStyles);
      };
    }, [template, columns, laptop, phone, tablet]);    
  
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
  };
  
  Grid.defaultProps = {
    template: '',
    className: '',
    laptop: '',
  };

export default Grid;
