import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary';
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  variant = 'primary',
  state = 'default',
  className = '',
}) => {
  const buttonClass = `button button--${variant} button--${state} ${className}`;

  return (
    <button className={buttonClass} disabled={state === 'disabled'}>
      {label}
    </button>
  );
};
