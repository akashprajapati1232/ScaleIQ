// ============================================================
// ScaleIQ — Navbar Component
// ============================================================

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { Button } from '../ui/Button';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Product',
    href: '#',
    children: [
      { label: 'Features', href: '/features', desc: 'Everything ScaleIQ can do' },
      { label: 'Pricing', href: '/pricing', desc: 'Plans for every business size' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const scrolled = useNavbarScroll(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${mobileOpen ? 'navbar--menu-open' : ''}`}
      role="banner"
    >
      <div className="navbar__container">
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link to="/" className="navbar__logo" aria-label="ScaleIQ Home">
          <LogoIcon />
          <span className="navbar__logo-text">ScaleIQ</span>
        </Link>

        {/* ── Desktop Nav ──────────────────────────────────── */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__nav-list" role="list">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label} className="navbar__nav-item navbar__nav-item--dropdown">
                  <button
                    className={`navbar__nav-link navbar__nav-link--dropdown ${openDropdown === item.label ? 'navbar__nav-link--open' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronIcon />
                  </button>
                  {openDropdown === item.label && (
                    <div className="navbar__dropdown" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="navbar__dropdown-item"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="navbar__dropdown-item-label">{child.label}</span>
                          <span className="navbar__dropdown-item-desc">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label} className="navbar__nav-item">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `navbar__nav-link ${isActive ? 'navbar__nav-link--active' : ''}`
                    }
                    end={item.href === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* ── CTA Buttons ──────────────────────────────────── */}
        <div className="navbar__actions">
          <Button to="/login" variant="ghost" size="sm">
            Sign In
          </Button>
          <Button to="/register" variant="primary" size="sm">
            Get Started Free
          </Button>
        </div>

        {/* ── Mobile Menu Toggle ───────────────────────────── */}
        <button
          className={`navbar__mobile-toggle ${mobileOpen ? 'navbar__mobile-toggle--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__mobile-toggle-bar" />
          <span className="navbar__mobile-toggle-bar" />
          <span className="navbar__mobile-toggle-bar" />
        </button>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      {mobileOpen && (
        <div className="navbar__mobile-menu" aria-label="Mobile navigation">
          <nav>
            <ul className="navbar__mobile-nav-list" role="list">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.label} className="navbar__mobile-nav-item">
                    <p className="navbar__mobile-nav-category">{item.label}</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="navbar__mobile-nav-link"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </li>
                ) : (
                  <li key={item.label} className="navbar__mobile-nav-item">
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `navbar__mobile-nav-link ${isActive ? 'navbar__mobile-nav-link--active' : ''}`
                      }
                      end={item.href === '/'}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="navbar__mobile-actions">
            <Button to="/login" variant="secondary" size="lg" fullWidth>
              Sign In
            </Button>
            <Button to="/register" variant="primary" size="lg" fullWidth>
              Get Started Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
    <path
      d="M10 20c0-2.5 2-4 4-4s3-1.5 3-3-1.5-3-3-3"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 12c0 2.5-2 4-4 4s-3 1.5-3 3 1.5 3 3 3"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const ChevronIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
