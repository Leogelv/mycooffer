import React from 'react';
import styles from './MeshGradientBackground.module.css';

interface MeshGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const MeshGradientBackground: React.FC<MeshGradientBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.gradientContainer} ${className}`}>
      {children}
    </div>
  );
};

export default MeshGradientBackground; 