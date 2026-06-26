// ============================================================
// ScaleIQ — Button Component
// ============================================================

import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  type = 'button',
  className = '',
  external = false,
  'aria-label': ariaLabel,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleRipple = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (disabled || loading) return;
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'btn__ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      button.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    },
    [disabled, loading]
  );

  const content = (
    <>
      {loading ? (
        <span className="btn__icon">
          <LoadingSpinner />
        </span>
      ) : (
        iconLeft && <span className="btn__icon">{iconLeft}</span>
      )}
      {children}
      {!loading && iconRight && <span className="btn__icon">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={handleRipple as any}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={handleRipple as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={(e) => {
        handleRipple(e);
        onClick?.(e);
      }}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};

const LoadingSpinner: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="anim-spin"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="8" />
  </svg>
);
