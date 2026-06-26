// ============================================================
// ScaleIQ — Utility Pages (404, Coming Soon, Maintenance)
// ============================================================

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar';
import './Utility.css';

// ── 404 Page ──────────────────────────────────────────────────

export const NotFound: React.FC = () => {
  useEffect(() => { document.title = '404 — Page Not Found · ScaleIQ'; }, []);

  return (
    <div className="utility-page">
      <Navbar />
      <main className="utility-page__main">
        <div className="utility-page__content anim-fade-in-up">
          <div className="utility-page__code">404</div>
          <h1 className="utility-page__title">Page Not Found</h1>
          <p className="utility-page__desc">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="utility-page__actions">
            <Button to="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Support
            </Button>
          </div>
          <div className="utility-page__links">
            <p>You might be looking for:</p>
            <div className="utility-page__quick-links">
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="utility-page__visual anim-float" aria-hidden="true">
          <div className="utility-page__visual-icon">🔍</div>
        </div>
      </main>
    </div>
  );
};

// ── Coming Soon Page ──────────────────────────────────────────

export const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    document.title = 'Coming Soon — ScaleIQ';

    // Count down to a fixed launch date
    const launchDate = new Date('2025-10-01T00:00:00Z').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setNotified(true);
  };

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-page__bg" aria-hidden="true">
        <div className="coming-soon-page__glow" />
        <div className="coming-soon-page__grid" />
      </div>

      <main className="coming-soon-page__main">
        <div className="coming-soon-page__content anim-fade-in-up">
          <Link to="/" className="coming-soon-page__logo">
            <LogoIcon />
            <span>ScaleIQ</span>
          </Link>

          <div className="coming-soon-page__badge">🚀 Something exciting is coming</div>

          <h1 className="coming-soon-page__title">
            We're Building Something{' '}
            <span className="gradient-text">Amazing</span>
          </h1>
          <p className="coming-soon-page__desc">
            This feature is currently under development. Join the waitlist to be the first to know when it launches.
          </p>

          {/* Countdown */}
          <div className="coming-soon-page__countdown" aria-label="Launch countdown">
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div key={unit} className="coming-soon-page__count-block">
                <span className="coming-soon-page__count-value">{String(val).padStart(2, '0')}</span>
                <span className="coming-soon-page__count-unit">{unit}</span>
              </div>
            ))}
          </div>

          {notified ? (
            <div className="coming-soon-page__success">
              ✓ You're on the list! We'll email you at {email} when we launch.
            </div>
          ) : (
            <form className="coming-soon-page__form" onSubmit={handleNotify}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="coming-soon-page__input"
                required
                aria-label="Email for launch notification"
              />
              <Button type="submit" variant="primary" size="lg">
                Notify Me
              </Button>
            </form>
          )}

          <Link to="/" className="coming-soon-page__back">
            ← Back to ScaleIQ
          </Link>
        </div>
      </main>
    </div>
  );
};

// ── Maintenance Page ──────────────────────────────────────────

export const Maintenance: React.FC = () => {
  useEffect(() => { document.title = 'Maintenance — ScaleIQ'; }, []);

  return (
    <div className="maintenance-page">
      <div className="maintenance-page__bg" aria-hidden="true">
        <div className="maintenance-page__glow" />
      </div>

      <main className="maintenance-page__main">
        <div className="maintenance-page__content anim-fade-in-up">
          <Link to="/" className="maintenance-page__logo">
            <LogoIcon />
            <span>ScaleIQ</span>
          </Link>

          <div className="maintenance-page__icon anim-float">🔧</div>

          <h1 className="maintenance-page__title">We'll Be Right Back</h1>
          <p className="maintenance-page__desc">
            ScaleIQ is currently undergoing scheduled maintenance to improve your experience.
            We'll be back online shortly.
          </p>

          <div className="maintenance-page__status">
            <div className="maintenance-page__status-indicator">
              <span className="maintenance-page__status-dot" />
              <span>Maintenance in Progress</span>
            </div>
            <p className="maintenance-page__eta">Estimated completion: 2 hours</p>
          </div>

          <div className="maintenance-page__updates">
            <h2>What We're Working On</h2>
            <ul>
              <li>✓ Database optimization and indexing</li>
              <li>✓ Performance improvements to the review engine</li>
              <li>○ Infrastructure upgrade and scaling</li>
              <li>○ Security patches and updates</li>
            </ul>
          </div>

          <p className="maintenance-page__contact">
            For urgent matters, email us at{' '}
            <a href="mailto:support@scaleiq.io">support@scaleiq.io</a>
          </p>
        </div>
      </main>
    </div>
  );
};

const LogoIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="util-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#util-logo-grad)" />
    <path d="M10 20c0-2.5 2-4 4-4s3-1.5 3-3-1.5-3-3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M22 12c0 2.5-2 4-4 4s-3 1.5-3 3 1.5 3 3 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);
