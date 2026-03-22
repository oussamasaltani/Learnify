import React from 'react';
import { GraduationCap } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <GraduationCap size={48} className="spinner-icon" />
        <div className="spinner-ring"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;