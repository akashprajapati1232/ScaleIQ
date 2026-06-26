// ============================================================
// ScaleIQ — Features Page
// ============================================================

import React, { useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { features } from '../data/features';
import './Features.css';

export const Features: React.FC = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Features — ScaleIQ';
  }, []);

  return (
    <MainLayout>
      <div className="features-page page-enter">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="features-page__hero">
          <div className="features-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="features-page__hero-content">
              <Badge variant="primary">All Features</Badge>
              <h1 className="features-page__hero-title">
                Everything You Need to Build a{' '}
                <span className="gradient-text">5-Star Reputation</span>
              </h1>
              <p className="features-page__hero-desc">
                ScaleIQ is the most complete review management platform for local businesses.
                Explore every tool designed to help you collect, manage, and leverage Google reviews.
              </p>
              <div className="features-page__hero-actions">
                <Button to="/register" variant="primary" size="lg">
                  Start Free Trial
                </Button>
                <Button to="/pricing" variant="secondary" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Grid ─────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Full Feature Set"
              title="Powerful Tools for Every Business"
              description="From QR code generation to AI-powered review suggestions — ScaleIQ handles it all."
              className="reveal"
            />
            <div className="features-page__grid">
              {features.map((feature, i) => (
                <div
                  key={feature.id}
                  className={`features-page__card reveal ${feature.comingSoon ? 'features-page__card--coming-soon' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {feature.badge && (
                    <Badge variant="primary" className="features-page__card-badge">
                      {feature.badge}
                    </Badge>
                  )}
                  {feature.comingSoon && (
                    <Badge variant="default" className="features-page__card-badge">
                      Coming Soon
                    </Badge>
                  )}
                  <div className="features-page__card-icon">{feature.icon}</div>
                  <h3 className="features-page__card-title">{feature.title}</h3>
                  <p className="features-page__card-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deep Dive Sections ────────────────────────────── */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            {[
              {
                icon: '⬡',
                title: 'The QR Code That Works While You Sleep',
                desc: 'Generate a custom-branded QR code linked directly to your Google Business Profile. Every customer who scans it is guided through the review process with zero friction.',
                points: [
                  'Custom colors and your business logo',
                  'Download in PNG, SVG, or print-ready PDF',
                  'Works offline — just a URL, no app required',
                  'Track scan analytics in your dashboard',
                ],
                flip: false,
              },
              {
                icon: '✦',
                title: 'AI That Writes Better Reviews — For Your Customers',
                desc: 'Our proprietary AI analyzes your business category and existing reviews to generate personalized prompts that help customers articulate their experience in detail.',
                points: [
                  'Learns from your existing review content',
                  'Generates relevant, business-specific prompts',
                  'Increases review length and quality by 3x',
                  'Fully compliant with Google review policies',
                ],
                flip: true,
              },
              {
                icon: '◉',
                title: 'Turn Negative Moments Into Private Conversations',
                desc: 'The Negative Feedback Shield identifies unhappy customers and redirects them to a private feedback form — before they post on Google — giving you a chance to make it right.',
                points: [
                  'Configurable satisfaction threshold',
                  'Instant email notification for bad experiences',
                  'Private feedback form captures the issue',
                  'Convert unhappy customers into loyal ones',
                ],
                flip: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`features-page__deep-dive ${item.flip ? 'features-page__deep-dive--flip' : ''} reveal`}
              >
                <div className="features-page__deep-dive-content">
                  <div className="features-page__deep-dive-icon">{item.icon}</div>
                  <h2 className="features-page__deep-dive-title">{item.title}</h2>
                  <p className="features-page__deep-dive-desc">{item.desc}</p>
                  <ul className="features-page__deep-dive-points">
                    {item.points.map((p, pi) => (
                      <li key={pi}>
                        <CheckIcon />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="features-page__deep-dive-visual">
                  <FeatureVisual icon={item.icon} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="section">
          <div className="container container--narrow">
            <div className="features-page__cta reveal">
              <h2 className="features-page__cta-title">
                Ready to Put These Features to Work?
              </h2>
              <p className="features-page__cta-desc">
                Start your free trial today. No credit card required. Set up in 5 minutes.
              </p>
              <Button to="/register" variant="primary" size="xl">
                Get Started Free
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const FeatureVisual: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="feature-visual">
    <div className="feature-visual__icon">{icon}</div>
    <div className="feature-visual__lines">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="feature-visual__line" style={{ width: `${60 + Math.random() * 40}%`, opacity: 0.3 + i * 0.15 }} />
      ))}
    </div>
  </div>
);

const CheckIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
