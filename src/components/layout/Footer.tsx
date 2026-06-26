// ============================================================
// ScaleIQ — Footer Component
// ============================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { FOOTER_LINKS, SOCIAL_LINKS, APP_NAME } from '../../constants';
import './Footer.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* ── Brand + Newsletter ──────────────────────────── */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="ScaleIQ Home">
            <LogoIcon />
            <span className="footer__logo-text">{APP_NAME}</span>
          </Link>
          <p className="footer__tagline">
            Turn every visit into a 5-star review with smart QR codes and AI-powered suggestions.
          </p>
          <div className="footer__newsletter">
            <p className="footer__newsletter-label">Stay ahead of the curve</p>
            {subscribed ? (
              <div className="footer__newsletter-success">
                <CheckIcon />
                <span>You're subscribed! Welcome to the community.</span>
              </div>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="footer__newsletter-input"
                  required
                  aria-label="Email address for newsletter"
                />
                <Button type="submit" variant="primary" size="sm">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
          <div className="footer__socials">
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* ── Links ───────────────────────────────────────── */}
        <div className="footer__links-grid">
          <FooterLinkGroup title="Product" links={FOOTER_LINKS.product} />
          <FooterLinkGroup title="Company" links={FOOTER_LINKS.company} />
          <FooterLinkGroup title="Resources" links={FOOTER_LINKS.resources} />
          <FooterLinkGroup title="Legal" links={FOOTER_LINKS.legal} />
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {APP_NAME}, Inc. All rights reserved.
          </p>
          <div className="footer__bottom-badges">
            <span className="footer__badge">🔒 SOC 2 Compliant</span>
            <span className="footer__badge">🇪🇺 GDPR Ready</span>
            <span className="footer__badge">⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkGroupProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div className="footer__link-group">
    <h3 className="footer__link-group-title">{title}</h3>
    <ul className="footer__link-list" role="list">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="footer__link">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ── Icons ─────────────────────────────────────────────────

const LogoIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#footer-logo-grad)" />
    <path d="M10 20c0-2.5 2-4 4-4s3-1.5 3-3-1.5-3-3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M22 12c0 2.5-2 4-4 4s-3 1.5-3 3 1.5 3 3 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YouTubeIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
