// ============================================================
// ScaleIQ — Input & Textarea Components
// ============================================================

import React, { useState } from 'react';
import './Input.css';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  iconLeft,
  iconRight,
  inputSize = 'md',
  className = '',
  type = 'text',
  id,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label className="input-field__label" htmlFor={inputId}>
          {label}
          {props.required && <span className="input-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      <div className={`input-field__wrapper input-field__wrapper--${inputSize}`}>
        {iconLeft && <span className="input-field__icon input-field__icon--left">{iconLeft}</span>}
        <input
          id={inputId}
          type={inputType}
          className={`input-field__input ${iconLeft ? 'input-field__input--icon-left' : ''} ${iconRight || isPassword ? 'input-field__input--icon-right' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="input-field__icon input-field__icon--right input-field__toggle-password"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
        {!isPassword && iconRight && (
          <span className="input-field__icon input-field__icon--right">{iconRight}</span>
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="input-field__error" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="input-field__hint">
          {hint}
        </p>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  hint,
  className = '',
  id,
  rows = 5,
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
      {label && (
        <label className="input-field__label" htmlFor={textareaId}>
          {label}
          {props.required && <span className="input-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className="input-field__textarea"
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="input-field__error" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${textareaId}-hint`} className="input-field__hint">
          {hint}
        </p>
      )}
    </div>
  );
};

const EyeIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);
