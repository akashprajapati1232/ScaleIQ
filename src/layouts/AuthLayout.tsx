// ============================================================
// ScaleIQ — Auth Layout (centered, no footer nav)
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <header className="auth-layout__header">
        <Link to="/" className="auth-layout__logo" aria-label="Back to ScaleIQ Home">
          <LogoIcon />
          <span>ScaleIQ</span>
        </Link>
      </header>
      <main className="auth-layout__main">{children}</main>
      <footer className="auth-layout__footer">
        <p>
          © {new Date().getFullYear()} ScaleIQ, Inc. ·{' '}
          <Link to="/privacy-policy">Privacy</Link> ·{' '}
          <Link to="/terms">Terms</Link>
        </p>
      </footer>
    </div>
  );
};

const LogoIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="auth-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#auth-logo-grad)" />
    <path d="M10 20c0-2.5 2-4 4-4s3-1.5 3-3-1.5-3-3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M22 12c0 2.5-2 4-4 4s-3 1.5-3 3 1.5 3 3 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);
