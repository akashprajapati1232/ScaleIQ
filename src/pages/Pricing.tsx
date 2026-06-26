// ============================================================
// ScaleIQ — Pricing Page
// ============================================================

import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { pricingPlans, comparisonTable } from '../data/pricing';
import { faqItems } from '../data/faq';
import './Pricing.css';

const pricingFaqs = faqItems.filter((f) => f.category === 'Pricing');

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  useScrollReveal();

  useEffect(() => {
    document.title = 'Pricing — ScaleIQ';
  }, []);

  return (
    <MainLayout>
      <div className="pricing-page page-enter">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pricing-page__hero">
          <div className="pricing-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <Badge variant="primary">Simple Pricing</Badge>
            <h1 className="pricing-page__title">
              Start Free. Scale When{' '}
              <span className="gradient-text">You're Ready.</span>
            </h1>
            <p className="pricing-page__desc">
              No hidden fees. No lock-in contracts. Upgrade or downgrade anytime.
            </p>

            {/* ── Billing Toggle ─────────────────────────── */}
            <div className="pricing-page__toggle" role="group" aria-label="Billing period">
              <button
                className={`pricing-page__toggle-btn ${!annual ? 'pricing-page__toggle-btn--active' : ''}`}
                onClick={() => setAnnual(false)}
                aria-pressed={!annual}
              >
                Monthly
              </button>
              <button
                className={`pricing-page__toggle-btn ${annual ? 'pricing-page__toggle-btn--active' : ''}`}
                onClick={() => setAnnual(true)}
                aria-pressed={annual}
              >
                Annual
                <Badge variant="success" className="pricing-page__save-badge">Save 20%</Badge>
              </button>
            </div>
          </div>
        </section>

        {/* ── Pricing Cards ─────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="pricing-page__cards">
              {pricingPlans.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`pricing-page__card reveal ${plan.popular ? 'pricing-page__card--popular' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="pricing-page__popular-ribbon">Most Popular</div>
                  )}
                  <div className="pricing-page__card-header">
                    {plan.badge && (
                      <Badge variant={plan.popular ? 'primary' : 'default'}>
                        {plan.badge}
                      </Badge>
                    )}
                    <h2 className="pricing-page__plan-name">{plan.name}</h2>
                    <p className="pricing-page__plan-desc">{plan.description}</p>
                  </div>

                  <div className="pricing-page__price">
                    {plan.price.monthly === 0 ? (
                      <span className="pricing-page__price-free">Free</span>
                    ) : (
                      <>
                        <span className="pricing-page__price-currency">$</span>
                        <span className="pricing-page__price-amount">
                          {annual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="pricing-page__price-period">/mo</span>
                      </>
                    )}
                  </div>

                  {annual && plan.price.monthly > 0 && (
                    <p className="pricing-page__billed-note">
                      Billed annually (${plan.price.annual * 12}/yr)
                    </p>
                  )}

                  <Button
                    to="/register"
                    variant={plan.ctaVariant}
                    size="lg"
                    fullWidth
                    className="pricing-page__cta-btn"
                  >
                    {plan.cta}
                  </Button>

                  {plan.price.monthly > 0 && (
                    <p className="pricing-page__trial-note">14-day free trial · No credit card</p>
                  )}

                  <div className="pricing-page__features-divider" />

                  <ul className="pricing-page__features-list">
                    {plan.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className={`pricing-page__feature-item ${!feature.included ? 'pricing-page__feature-item--excluded' : ''}`}
                      >
                        {feature.included ? (
                          <CheckIcon />
                        ) : (
                          <XIcon />
                        )}
                        <span>
                          {typeof feature.included === 'string'
                            ? `${feature.label} (${feature.included})`
                            : feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ──────────────────────────────── */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <SectionTitle
              eyebrow="Full Comparison"
              title="Compare All Plans"
              description="See exactly what's included in each plan."
              className="reveal"
            />
            <div className="pricing-page__table-wrap reveal">
              <table className="pricing-page__table" aria-label="Plan comparison table">
                <thead>
                  <tr>
                    <th className="pricing-page__table-feature-col">Feature</th>
                    <th>Free</th>
                    <th className="pricing-page__table-popular-col">Starter</th>
                    <th>Professional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i}>
                      <td className="pricing-page__table-feature">{row.feature}</td>
                      <td className="pricing-page__table-cell"><CellValue value={row.free} /></td>
                      <td className="pricing-page__table-cell pricing-page__table-popular-col"><CellValue value={row.starter} /></td>
                      <td className="pricing-page__table-cell"><CellValue value={row.professional} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="section">
          <div className="container container--narrow">
            <SectionTitle
              eyebrow="Pricing FAQ"
              title="Common Billing Questions"
              className="reveal"
            />
            <div className="reveal">
              <Accordion items={pricingFaqs} />
            </div>
          </div>
        </section>

        {/* ── Enterprise CTA ────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="pricing-page__enterprise reveal">
              <div>
                <h2 className="pricing-page__enterprise-title">Need a Custom Plan?</h2>
                <p className="pricing-page__enterprise-desc">
                  For agencies, franchises, and enterprises with unique requirements.
                  Talk to our team for custom pricing and onboarding.
                </p>
              </div>
              <Button to="/contact" variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const CellValue: React.FC<{ value: boolean | string }> = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? <CheckIcon /> : <XIcon />;
  }
  return <span className="pricing-page__table-text">{value}</span>;
};

const CheckIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="pricing-page__check" aria-label="Included" aria-hidden="false">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="pricing-page__x" aria-label="Not included" aria-hidden="false">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
