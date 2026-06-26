// ============================================================
// ScaleIQ — About Page
// ============================================================

import React, { useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { teamMembers, companyStats, roadmapItems } from '../data/team';
import './About.css';

export const About: React.FC = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'About — ScaleIQ';
  }, []);

  return (
    <MainLayout>
      <div className="about-page page-enter">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="about-page__hero">
          <div className="about-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <Badge variant="primary">Our Story</Badge>
            <h1 className="about-page__hero-title">
              We're on a Mission to Help Local Businesses{' '}
              <span className="gradient-text">Win Online</span>
            </h1>
            <p className="about-page__hero-desc">
              ScaleIQ was born from a simple frustration: great businesses with terrible 
              online reputations losing customers to inferior competitors with more reviews. 
              We built the solution we wished existed.
            </p>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────── */}
        <section className="about-page__stats">
          <div className="container">
            <div className="about-page__stats-grid">
              {companyStats.map((stat, i) => (
                <div key={i} className="about-page__stat reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="about-page__stat-value">{stat.value}</p>
                  <p className="about-page__stat-label">{stat.label}</p>
                  <p className="about-page__stat-desc">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story ─────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="about-page__story">
              <div className="about-page__story-content reveal-left">
                <Badge variant="default">Founded 2024</Badge>
                <h2 className="about-page__story-title">How ScaleIQ Was Born</h2>
                <p className="about-page__story-text">
                  In 2023, our co-founders Alex and Riya were consulting for a local dental practice 
                  that was consistently delivering excellent patient care but struggling with a 3.8-star 
                  Google rating — while their competitors had 4.8+ stars and were booked solid.
                </p>
                <p className="about-page__story-text">
                  The problem wasn't the quality of care. It was that happy patients had no frictionless 
                  way to share their experience. Unhappy ones — always vocal — had every incentive.
                </p>
                <p className="about-page__story-text">
                  They built a simple QR code system that weekend. Within 60 days, the practice went 
                  from 47 reviews to 189, and their rating climbed to 4.9. New patient inquiries jumped 
                  40%. ScaleIQ was born.
                </p>
              </div>
              <div className="about-page__story-visual reveal-right">
                <div className="about-page__timeline">
                  {[
                    { year: '2023', label: 'The Insight', desc: 'Identified the review gap problem consulting for local businesses.' },
                    { year: '2024', label: 'Product Launch', desc: 'Launched ScaleIQ beta with QR code generation and basic analytics.' },
                    { year: '2024', label: 'AI Integration', desc: 'Shipped AI review suggestions and Negative Feedback Shield.' },
                    { year: '2025', label: 'Scale', desc: '87,000+ businesses, 4.2M reviews collected, Series A funding.' },
                  ].map((item, i) => (
                    <div key={i} className="about-page__timeline-item">
                      <div className="about-page__timeline-year">{item.year}</div>
                      <div>
                        <p className="about-page__timeline-label">{item.label}</p>
                        <p className="about-page__timeline-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission / Vision / Values ──────────────────────── */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <SectionTitle
              eyebrow="What Drives Us"
              title="Mission, Vision & Values"
              className="reveal"
            />
            <div className="about-page__mvv-grid">
              {[
                {
                  icon: '🎯',
                  title: 'Our Mission',
                  desc: 'Empower every local business with the tools to build an authentic, impressive online reputation — without technical complexity or high cost.',
                },
                {
                  icon: '🔭',
                  title: 'Our Vision',
                  desc: 'A world where the quality of a business\'s service is accurately reflected online — where great businesses thrive and customers always make informed decisions.',
                },
                {
                  icon: '💡',
                  title: 'Our Values',
                  desc: 'Transparency, customer obsession, relentless iteration, and genuine care for the small businesses that form the backbone of our communities.',
                },
              ].map((item, i) => (
                <div key={i} className="about-page__mvv-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="about-page__mvv-icon">{item.icon}</span>
                  <h3 className="about-page__mvv-title">{item.title}</h3>
                  <p className="about-page__mvv-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ──────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Our Team"
              title="The People Behind ScaleIQ"
              description="A passionate team of former operators, engineers, and designers on a mission to transform local business reputation management."
              className="reveal"
            />
            <div className="about-page__team-grid">
              {teamMembers.map((member, i) => (
                <div key={member.id} className="about-page__team-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    className="about-page__team-avatar"
                    style={{ background: member.gradient }}
                    aria-label={`${member.name} avatar`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="about-page__team-name">{member.name}</h3>
                  <p className="about-page__team-role">{member.role}</p>
                  <p className="about-page__team-bio">{member.bio}</p>
                  <div className="about-page__team-socials">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="about-page__team-social" aria-label={`${member.name} on LinkedIn`}>
                        <LinkedInIcon />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="about-page__team-social" aria-label={`${member.name} on Twitter`}>
                        <TwitterIcon />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="about-page__team-social" aria-label={`${member.name} on GitHub`}>
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roadmap ───────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <SectionTitle
              eyebrow="What's Coming"
              title="Product Roadmap"
              description="We're constantly building. Here's where ScaleIQ is headed."
              className="reveal"
            />
            <div className="about-page__roadmap">
              {roadmapItems.map((item, i) => (
                <div key={i} className={`about-page__roadmap-item about-page__roadmap-item--${item.status} reveal`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="about-page__roadmap-period">
                    <span className="about-page__roadmap-quarter">{item.quarter}</span>
                    <span className="about-page__roadmap-year">{item.year}</span>
                  </div>
                  <div className="about-page__roadmap-content">
                    <div className="about-page__roadmap-status-dot" />
                    <div>
                      <p className="about-page__roadmap-title">{item.title}</p>
                      <ul className="about-page__roadmap-items">
                        {item.items.map((feat, fi) => (
                          <li key={fi}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                    <Badge
                      variant={item.status === 'completed' ? 'success' : item.status === 'in-progress' ? 'primary' : 'default'}
                      className="about-page__roadmap-badge"
                    >
                      {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="section">
          <div className="container container--narrow">
            <div className="about-page__cta reveal">
              <h2>Join 87,000+ Businesses Already Growing with ScaleIQ</h2>
              <p>Start your free trial today. No credit card required.</p>
              <div className="about-page__cta-actions">
                <Button to="/register" variant="primary" size="lg">
                  Get Started Free
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Talk to the Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const LinkedInIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
