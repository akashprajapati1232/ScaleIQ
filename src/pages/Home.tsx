// ============================================================
// ScaleIQ — Home Page
// ============================================================

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';
import { pricingPlans } from '../data/pricing';
import { faqItems } from '../data/faq';
import { businessCategories, companyStats } from '../data/team';
import './Home.css';

export const Home: React.FC = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'ScaleIQ — Turn Every Visit Into a 5-Star Review';
  }, []);

  const homeFaqs = faqItems.slice(0, 5);

  return (
    <MainLayout>
      <div className="home page-enter">
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BusinessCategoriesSection />
        <DashboardPreviewSection />
        <WhyChooseUsSection />
        <PricingPreviewSection />
        <TestimonialsSection />
        <FaqPreviewSection faqs={homeFaqs} />
        <CtaSection />
      </div>
    </MainLayout>
  );
};

// ── Hero Section ──────────────────────────────────────────────
const HeroSection: React.FC = () => (
  <section className="hero" aria-label="Hero">
    {/* Background Decorations */}
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__bg-grid" />
    </div>

    <div className="hero__container container">
      <div className="hero__content">
        {/* Eyebrow Badge */}
        <div className="hero__eyebrow anim-fade-in">
          <span className="hero__eyebrow-dot" />
          <span>Trusted by 87,000+ businesses worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline anim-fade-in delay-100">
          Turn Every Visit Into a{' '}
          <span className="hero__headline-gradient">5-Star Review</span>
        </h1>

        {/* Description */}
        <p className="hero__description anim-fade-in delay-200">
          ScaleIQ helps local businesses collect more Google reviews effortlessly — 
          using smart QR codes and AI-powered review suggestions that guide customers 
          to write authentic, detailed reviews in seconds.
        </p>

        {/* CTAs */}
        <div className="hero__actions anim-fade-in delay-300">
          <Button to="/register" variant="primary" size="xl">
            Get Started Free
            <ArrowRightIcon />
          </Button>
          <Button to="/features" variant="secondary" size="xl">
            See How It Works
          </Button>
        </div>

        {/* Social Proof */}
        <div className="hero__social-proof anim-fade-in delay-400">
          <div className="hero__avatars" aria-label="Customer avatars">
            {['MR', 'PN', 'JT', 'SC', 'DO'].map((init, i) => (
              <div key={i} className="hero__avatar" style={{ zIndex: 5 - i }}>
                {init}
              </div>
            ))}
          </div>
          <div>
            <div className="hero__stars" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="hero__social-proof-text">
              4.9/5 from <strong>2,400+</strong> reviews
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="hero__mockup anim-fade-in delay-200">
        <DashboardMockup />
        {/* Floating elements */}
        <div className="hero__float hero__float--1 anim-float">
          <span>⭐</span>
          <div>
            <p className="hero__float-label">New Review</p>
            <p className="hero__float-value">★★★★★ just now</p>
          </div>
        </div>
        <div className="hero__float hero__float--2 anim-float-reverse">
          <span>📈</span>
          <div>
            <p className="hero__float-label">Reviews this week</p>
            <p className="hero__float-value">+47 reviews</p>
          </div>
        </div>
        <div className="hero__float hero__float--3 anim-float">
          <span>🤖</span>
          <div>
            <p className="hero__float-label">AI Suggestions</p>
            <p className="hero__float-value">Active</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── Stats Section ─────────────────────────────────────────────
const StatsSection: React.FC = () => (
  <section className="stats-section" aria-label="Company statistics">
    <div className="container">
      <div className="stats-section__grid">
        {companyStats.map((stat, i) => (
          <div key={i} className="stats-section__item reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <p className="stats-section__value">{stat.value}</p>
            <p className="stats-section__label">{stat.label}</p>
            <p className="stats-section__desc">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Problem Section ───────────────────────────────────────────
const ProblemSection: React.FC = () => (
  <section className="problem-section section" aria-label="The problem">
    <div className="container container--narrow">
      <SectionTitle
        eyebrow="The Reality"
        title={<>The Review Gap Is <span className="gradient-text">Costing You Business</span></>}
        description="93% of consumers check Google reviews before visiting a local business. Yet most businesses struggle to collect even a fraction of the reviews they deserve."
        className="reveal"
      />
      <div className="problem-section__cards">
        {[
          { icon: '😤', title: 'Customers forget to review', desc: 'Even happy customers rarely leave reviews unless prompted at exactly the right moment.' },
          { icon: '📉', title: 'Competitors pull ahead', desc: 'Businesses with more reviews rank higher in Google Maps and attract far more clicks.' },
          { icon: '😟', title: 'Negative reviews dominate', desc: 'Unhappy customers are 4x more likely to leave a review than satisfied ones — without a shield.' },
        ].map((card, i) => (
          <div key={i} className="problem-section__card reveal" style={{ transitionDelay: `${i * 150}ms` }}>
            <span className="problem-section__card-icon">{card.icon}</span>
            <h3 className="problem-section__card-title">{card.title}</h3>
            <p className="problem-section__card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Solution Section ──────────────────────────────────────────
const SolutionSection: React.FC = () => (
  <section className="solution-section section" aria-label="The solution">
    <div className="container">
      <div className="solution-section__layout">
        <div className="solution-section__content reveal-left">
          <span className="section-title__eyebrow">The Solution</span>
          <h2 className="solution-section__title">
            One QR Code. Endless{' '}
            <span className="gradient-text">5-Star Reviews.</span>
          </h2>
          <p className="solution-section__desc">
            ScaleIQ removes every barrier between a happy customer and your Google review page.
            Our AI handles the hard part — guiding customers to write genuine, detailed reviews 
            that Google loves.
          </p>
          <ul className="solution-section__list">
            {[
              'Generate a branded QR code in seconds',
              'AI guides customers to write authentic reviews',
              'Negative feedback is captured privately first',
              'Real-time dashboard tracks your reputation growth',
            ].map((item, i) => (
              <li key={i} className="solution-section__list-item">
                <CheckCircleIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="solution-section__actions">
            <Button to="/register" variant="primary" size="lg">
              Start for Free
            </Button>
            <Button to="/features" variant="ghost" size="lg">
              Explore All Features →
            </Button>
          </div>
        </div>
        <div className="solution-section__visual reveal-right">
          <QRCodeVisual />
        </div>
      </div>
    </div>
  </section>
);

// ── How It Works Section ──────────────────────────────────────
const HowItWorksSection: React.FC = () => (
  <section className="how-it-works section" aria-label="How it works">
    <div className="container">
      <SectionTitle
        eyebrow="How It Works"
        title="Get More Reviews in 3 Simple Steps"
        description="ScaleIQ is designed to be up and running in minutes — not days. No tech skills required."
        className="reveal"
      />
      <div className="how-it-works__steps">
        {[
          {
            step: '01',
            icon: '⬡',
            title: 'Create Your Account',
            desc: 'Sign up free and connect your Google Business Profile. Our setup wizard walks you through every step in under 5 minutes.',
            color: '#6366f1',
          },
          {
            step: '02',
            icon: '◫',
            title: 'Generate Your QR Code',
            desc: 'Customize and download your branded QR code. Print it on a card, display at checkout, add to receipts or emails.',
            color: '#8b5cf6',
          },
          {
            step: '03',
            icon: '⭐',
            title: 'Watch Reviews Pour In',
            desc: 'Customers scan, get AI-guided suggestions, and leave genuine 5-star reviews. You track everything in real-time.',
            color: '#ec4899',
          },
        ].map((step, i) => (
          <div key={i} className="how-it-works__step reveal" style={{ transitionDelay: `${i * 200}ms` }}>
            <div className="how-it-works__step-number">{step.step}</div>
            <div className="how-it-works__step-icon" style={{ '--step-color': step.color } as React.CSSProperties}>
              {step.icon}
            </div>
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-desc">{step.desc}</p>
            {i < 2 && <div className="how-it-works__connector" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Features Section ──────────────────────────────────────────
const FeaturesSection: React.FC = () => (
  <section className="features-preview section" aria-label="Features overview">
    <div className="container">
      <SectionTitle
        eyebrow="Features"
        title={<>Everything You Need to <span className="gradient-text">Dominate Reviews</span></>}
        description="ScaleIQ is packed with powerful tools to help any business build and protect their online reputation."
        className="reveal"
      />
      <div className="features-preview__grid">
        {features.slice(0, 6).map((feature, i) => (
          <div
            key={feature.id}
            className={`features-preview__card reveal ${feature.comingSoon ? 'features-preview__card--coming-soon' : ''}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {feature.badge && <Badge variant="primary" className="features-preview__badge">{feature.badge}</Badge>}
            {feature.comingSoon && <Badge variant="default" className="features-preview__badge">Coming Soon</Badge>}
            <div className="features-preview__card-icon">{feature.icon}</div>
            <h3 className="features-preview__card-title">{feature.title}</h3>
            <p className="features-preview__card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="features-preview__cta reveal">
        <Button to="/features" variant="outline" size="lg">
          View All Features
        </Button>
      </div>
    </div>
  </section>
);

// ── Business Categories ───────────────────────────────────────
const BusinessCategoriesSection: React.FC = () => (
  <section className="categories-section section" aria-label="Business categories">
    <div className="container">
      <SectionTitle
        eyebrow="Works For Every Business"
        title="Built for Local Businesses Across Every Industry"
        description="From restaurants to law firms, ScaleIQ works seamlessly for any business that serves customers locally."
        className="reveal"
      />
      <div className="categories-section__grid">
        {businessCategories.map((cat, i) => (
          <div key={cat.id} className="categories-section__card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="categories-section__icon">{cat.icon}</span>
            <div>
              <h3 className="categories-section__name">{cat.name}</h3>
              <p className="categories-section__desc">{cat.description}</p>
              <p className="categories-section__count">{cat.businesses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Dashboard Preview Section ─────────────────────────────────
const DashboardPreviewSection: React.FC = () => (
  <section className="dashboard-preview-section section" aria-label="Dashboard preview">
    <div className="container">
      <div className="dashboard-preview-section__inner reveal">
        <div className="dashboard-preview-section__content">
          <Badge variant="primary">Dashboard Preview</Badge>
          <h2 className="dashboard-preview-section__title">
            Your Reputation at a Glance
          </h2>
          <p className="dashboard-preview-section__desc">
            Monitor your Google review performance across all locations in one unified dashboard. 
            Track trends, spot opportunities, and take action — all in real time.
          </p>
          <ul className="dashboard-preview-section__features">
            {['Real-time review feed', 'Sentiment analysis', 'Review velocity trends', 'Location comparisons', 'AI insights & recommendations'].map((f, i) => (
              <li key={i} className="dashboard-preview-section__feature-item">
                <CheckCircleIcon /> {f}
              </li>
            ))}
          </ul>
          <Button to="/register" variant="primary" size="lg">
            Try the Dashboard Free
          </Button>
        </div>
        <div className="dashboard-preview-section__visual">
          <AnalyticsMockup />
        </div>
      </div>
    </div>
  </section>
);

// ── Why Choose Us ─────────────────────────────────────────────
const WhyChooseUsSection: React.FC = () => (
  <section className="why-section section" aria-label="Why choose ScaleIQ">
    <div className="container">
      <SectionTitle
        eyebrow="Why ScaleIQ"
        title="The Smarter Way to Build Your Reputation"
        description="We didn't just build another review tool. We built the most intelligent, user-friendly review platform for local businesses."
        className="reveal"
      />
      <div className="why-section__grid">
        {[
          { icon: '🤖', title: 'AI-Powered', desc: 'Our AI doesn\'t just prompt — it learns your business and guides customers to write reviews that resonate with your brand.' },
          { icon: '⚡', title: 'Lightning Fast', desc: 'Setup takes 5 minutes. Customers scan and review in 60 seconds. No friction, no drop-offs.' },
          { icon: '🛡️', title: 'Negative Shield', desc: 'Only platform with built-in negative feedback interception. Protect your rating while resolving issues privately.' },
          { icon: '📊', title: 'Deep Analytics', desc: 'Go beyond star counts. Understand review sentiment, velocity, competitor benchmarks, and actionable insights.' },
          { icon: '🔒', title: 'Enterprise Security', desc: 'SOC 2 compliant, GDPR ready, AES-256 encrypted. Your data and your customers\' data is always protected.' },
          { icon: '🌍', title: 'Multi-Location', desc: 'Scale from one location to hundreds with a single account. Perfect for franchises and agencies.' },
        ].map((item, i) => (
          <div key={i} className="why-section__card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="why-section__card-icon">{item.icon}</span>
            <h3 className="why-section__card-title">{item.title}</h3>
            <p className="why-section__card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Pricing Preview ───────────────────────────────────────────
const PricingPreviewSection: React.FC = () => (
  <section className="pricing-preview-section section" aria-label="Pricing overview">
    <div className="container">
      <SectionTitle
        eyebrow="Simple Pricing"
        title="Start Free. Scale When You're Ready."
        description="No hidden fees, no long-term contracts. Start with our Free plan and upgrade anytime as your business grows."
        className="reveal"
      />
      <div className="pricing-preview-section__cards">
        {pricingPlans.map((plan, i) => (
          <div
            key={plan.id}
            className={`pricing-preview-section__card reveal ${plan.popular ? 'pricing-preview-section__card--popular' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {plan.popular && <div className="pricing-preview-section__popular-badge">Most Popular</div>}
            <h3 className="pricing-preview-section__plan-name">{plan.name}</h3>
            <div className="pricing-preview-section__price">
              {plan.price.monthly === 0 ? (
                <span className="pricing-preview-section__price-value">Free</span>
              ) : (
                <>
                  <span className="pricing-preview-section__price-currency">$</span>
                  <span className="pricing-preview-section__price-value">{plan.price.monthly}</span>
                  <span className="pricing-preview-section__price-period">/mo</span>
                </>
              )}
            </div>
            <p className="pricing-preview-section__plan-desc">{plan.description}</p>
            <Button
              to="/pricing"
              variant={plan.ctaVariant}
              size="md"
              fullWidth
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
      <div className="pricing-preview-section__note reveal">
        <p>All paid plans include a <strong>14-day free trial</strong>. No credit card required.</p>
        <Link to="/pricing" className="pricing-preview-section__link">
          Compare all plans →
        </Link>
      </div>
    </div>
  </section>
);

// ── Testimonials Section ──────────────────────────────────────
const TestimonialsSection: React.FC = () => (
  <section className="testimonials-section section" aria-label="Customer testimonials">
    <div className="container">
      <SectionTitle
        eyebrow="Customer Stories"
        title={<>Real Results from <span className="gradient-text">Real Businesses</span></>}
        description="Don't take our word for it. Here's what business owners are saying about ScaleIQ."
        className="reveal"
      />
      <div className="testimonials-section__grid">
        {testimonials.map((t, i) => (
          <div key={t.id} className="testimonials-section__card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="testimonials-section__stars">
              {Array.from({ length: t.rating }).map((_, si) => (
                <StarIcon key={si} />
              ))}
            </div>
            <blockquote className="testimonials-section__quote">"{t.quote}"</blockquote>
            <div className="testimonials-section__author">
              <div className="testimonials-section__avatar">{t.initials}</div>
              <div>
                <p className="testimonials-section__name">{t.name}</p>
                <p className="testimonials-section__role">{t.role} · {t.company}</p>
              </div>
              {t.reviewCount && (
                <div className="testimonials-section__count">
                  <span>{t.reviewCount}</span>
                  <span>reviews</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── FAQ Preview ───────────────────────────────────────────────
const FaqPreviewSection: React.FC<{ faqs: typeof faqItems }> = ({ faqs }) => (
  <section className="faq-preview-section section" aria-label="Frequently asked questions">
    <div className="container container--narrow">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers to the most common questions about ScaleIQ."
        className="reveal"
      />
      <div className="reveal">
        <Accordion items={faqs} />
      </div>
      <div className="faq-preview-section__cta reveal">
        <Button to="/faq" variant="secondary" size="md">
          View All FAQs
        </Button>
      </div>
    </div>
  </section>
);

// ── CTA Section ───────────────────────────────────────────────
const CtaSection: React.FC = () => (
  <section className="cta-section" aria-label="Call to action">
    <div className="container">
      <div className="cta-section__inner reveal">
        <div className="cta-section__bg" aria-hidden="true" />
        <Badge variant="primary" className="cta-section__badge">Get Started Today</Badge>
        <h2 className="cta-section__title">
          Ready to Turn Customers Into<br />
          <span className="gradient-text">5-Star Advocates?</span>
        </h2>
        <p className="cta-section__desc">
          Join 87,000+ businesses already using ScaleIQ to build their reputation on autopilot.
          Start free — no credit card required.
        </p>
        <div className="cta-section__actions">
          <Button to="/register" variant="primary" size="xl">
            Start for Free
          </Button>
          <Button to="/contact" variant="secondary" size="xl">
            Talk to Sales
          </Button>
        </div>
        <p className="cta-section__note">
          Free forever plan available · No credit card required · Setup in 5 minutes
        </p>
      </div>
    </div>
  </section>
);

// ── Inline SVG Visual Components ──────────────────────────────

const DashboardMockup: React.FC = () => (
  <div className="dashboard-mockup">
    <div className="dashboard-mockup__header">
      <div className="dashboard-mockup__dots">
        <span /><span /><span />
      </div>
      <div className="dashboard-mockup__title">ScaleIQ Dashboard</div>
    </div>
    <div className="dashboard-mockup__body">
      <div className="dashboard-mockup__stats">
        {[
          { label: 'Total Reviews', value: '312', change: '+47 this week', up: true },
          { label: 'Avg. Rating', value: '4.9', change: '+0.3 this month', up: true },
          { label: 'Response Rate', value: '98%', change: 'All time', up: true },
        ].map((s, i) => (
          <div key={i} className="dashboard-mockup__stat">
            <p className="dashboard-mockup__stat-label">{s.label}</p>
            <p className="dashboard-mockup__stat-value">{s.value}</p>
            <p className={`dashboard-mockup__stat-change ${s.up ? 'dashboard-mockup__stat-change--up' : ''}`}>
              {s.up ? '↑' : '↓'} {s.change}
            </p>
          </div>
        ))}
      </div>
      <div className="dashboard-mockup__chart">
        <div className="dashboard-mockup__chart-label">Reviews this month</div>
        <div className="dashboard-mockup__bars">
          {[30, 55, 45, 70, 60, 80, 90, 75, 85, 95, 88, 100].map((h, i) => (
            <div
              key={i}
              className="dashboard-mockup__bar"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="dashboard-mockup__reviews">
        {[
          { stars: 5, text: 'Absolutely amazing service! Will definitely...', time: '2m ago' },
          { stars: 5, text: 'Best restaurant in the city. The food was...', time: '15m ago' },
          { stars: 4, text: 'Great experience overall. Staff was very...', time: '1h ago' },
        ].map((r, i) => (
          <div key={i} className="dashboard-mockup__review">
            <div className="dashboard-mockup__review-stars">
              {Array.from({ length: r.stars }).map((_, si) => (
                <span key={si}>★</span>
              ))}
            </div>
            <p className="dashboard-mockup__review-text">{r.text}</p>
            <p className="dashboard-mockup__review-time">{r.time}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const QRCodeVisual: React.FC = () => (
  <div className="qr-visual">
    <div className="qr-visual__card">
      <div className="qr-visual__scan-label">Scan to Leave a Review</div>
      <div className="qr-visual__qr">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="QR code example">
          {/* QR Code decorative pattern */}
          <rect x="5" y="5" width="38" height="38" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
          <rect x="14" y="14" width="20" height="20" rx="2" fill="currentColor"/>
          <rect x="57" y="5" width="38" height="38" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
          <rect x="66" y="14" width="20" height="20" rx="2" fill="currentColor"/>
          <rect x="5" y="57" width="38" height="38" rx="4" fill="none" stroke="currentColor" strokeWidth="4"/>
          <rect x="14" y="66" width="20" height="20" rx="2" fill="currentColor"/>
          {/* Data modules */}
          <rect x="57" y="57" width="8" height="8" rx="1" fill="currentColor"/>
          <rect x="69" y="57" width="8" height="8" rx="1" fill="currentColor"/>
          <rect x="81" y="57" width="14" height="8" rx="1" fill="currentColor"/>
          <rect x="57" y="69" width="14" height="8" rx="1" fill="currentColor"/>
          <rect x="75" y="69" width="8" height="8" rx="1" fill="currentColor"/>
          <rect x="57" y="81" width="8" height="14" rx="1" fill="currentColor"/>
          <rect x="69" y="81" width="14" height="8" rx="1" fill="currentColor"/>
          <rect x="87" y="75" width="8" height="14" rx="1" fill="currentColor"/>
        </svg>
      </div>
      <div className="qr-visual__brand">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="qr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="6" fill="url(#qr-grad)" />
          <path d="M10 20c0-2.5 2-4 4-4s3-1.5 3-3-1.5-3-3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M22 12c0 2.5-2 4-4 4s-3 1.5-3 3 1.5 3 3 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
        <span>ScaleIQ</span>
      </div>
    </div>
    <div className="qr-visual__steps">
      {['Scan', 'Rate', 'Review'].map((step, i) => (
        <div key={i} className="qr-visual__step">
          <div className="qr-visual__step-num">{i + 1}</div>
          <span>{step}</span>
        </div>
      ))}
    </div>
    <div className="qr-visual__result anim-pulse">
      ⭐⭐⭐⭐⭐ Review posted to Google!
    </div>
  </div>
);

const AnalyticsMockup: React.FC = () => (
  <div className="analytics-mockup">
    <div className="analytics-mockup__header">
      <span className="analytics-mockup__title">Review Analytics</span>
      <span className="analytics-mockup__period">Last 30 days</span>
    </div>
    <div className="analytics-mockup__chart">
      {[60, 75, 55, 80, 90, 70, 95, 85, 100, 80, 88, 92].map((h, i) => (
        <div key={i} className="analytics-mockup__bar-wrap">
          <div
            className="analytics-mockup__bar"
            style={{ height: `${h}%` }}
          />
        </div>
      ))}
    </div>
    <div className="analytics-mockup__metrics">
      {[
        { label: 'New Reviews', value: '+47', trend: '↑ 23%', positive: true },
        { label: 'Avg Rating', value: '4.9★', trend: '↑ 0.2', positive: true },
        { label: 'Sentiment', value: '94%', trend: 'Positive', positive: true },
      ].map((m, i) => (
        <div key={i} className="analytics-mockup__metric">
          <p className="analytics-mockup__metric-label">{m.label}</p>
          <p className="analytics-mockup__metric-value">{m.value}</p>
          <p className={`analytics-mockup__metric-trend ${m.positive ? 'analytics-mockup__metric-trend--up' : ''}`}>
            {m.trend}
          </p>
        </div>
      ))}
    </div>
    <div className="analytics-mockup__sentiment">
      <div className="analytics-mockup__sentiment-label">Sentiment Breakdown</div>
      <div className="analytics-mockup__sentiment-bar">
        <div className="analytics-mockup__sentiment-fill" style={{ width: '94%' }} />
      </div>
      <div className="analytics-mockup__sentiment-labels">
        <span>94% Positive</span>
        <span>4% Neutral</span>
        <span>2% Negative</span>
      </div>
    </div>
  </div>
);

// ── Micro Icons ────────────────────────────────────────────────

const StarIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckCircleIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
