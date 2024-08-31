// src/components/Window.js
import React from 'react';
import './Window.css';

const Window = ({ children, title }) => {
  return (
    <div className="window">
      <div className="window-header">
        <h3>{title}</h3>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window;
