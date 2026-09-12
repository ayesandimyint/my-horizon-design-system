import React from 'react';
import './Badge.css';

interface BadgeProps {
  form?: 'dot' | 'dotText' | 'text';
  label?: string;
  role?: 'positive' | 'negative' | 'warning' | 'info' | 'accent' | 'neutral';
  className?: string;
}

const roleColors: Record<string, { idle: string; light: string; text: string }> = {
  positive: { idle: 'bg-positive-idle', light: 'bg-positive-light', text: 'text-positive' },
  negative: { idle: 'bg-negative-idle', light: 'bg-negative-light', text: 'text-negative' },
  warning: { idle: 'bg-warning-idle', light: 'bg-warning-light', text: 'text-warning' },
  info: { idle: 'bg-info-idle', light: 'bg-info-light', text: 'text-info' },
  accent: { idle: 'bg-accent-idle', light: 'bg-accent-light', text: 'text-accent' },
  neutral: { idle: 'bg-neutral-idle', light: 'bg-neutral-light', text: 'text-subtle' },
};

export const Badge: React.FC<BadgeProps> = ({
  form = 'dot',
  label = 'Label',
  role = 'positive',
  className = '',
}) => {
  const colors = roleColors[role] || roleColors.positive;
  const baseClass = `badge badge--${form} badge--${role}`;

  if (form === 'dot') {
    return (
      <div
        className={`${baseClass} ${colors.idle} ${className}`}
        aria-label={`${role} status`}
      />
    );
  }

  if (form === 'dotText') {
    return (
      <div className={`${baseClass} ${className}`}>
        <div className={`badge__dot ${colors.idle}`} />
        <span className={`badge__label badge__label--dottext ${colors.text}`}>
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`${baseClass} ${colors.light} ${className}`}>
      <span className={`badge__label badge__label--text ${colors.text}`}>
        {label}
      </span>
    </div>
  );
};
