import React from 'react';
import styled from'./Button.module.css';

const Button = ({ type, onClick, children,className,disabled}) => {
  return (
    <button 
    type={type || 'button'} 
    className={`${styled.button} ${className}`} 
    onClick={onClick}
    disabled = {disabled}
    >
      {children}
    </button>
  );
};

export default Button;