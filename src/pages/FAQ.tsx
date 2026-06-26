// ============================================================
// ScaleIQ — FAQ Page
// ============================================================

import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { faqItems, faqCategories } from '../data/faq';
import './FAQ.css';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  useScrollReveal();

  useEffect(() => {
    document.title = 'FAQ — ScaleIQ';
  }, []);

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="faq-page page-enter">
        <section className="faq-page__hero">
          <div className="faq-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <Badge variant="primary">Help Center</Badge>
            <h1 className="faq-page__title">
              Frequently Asked Questions
            </h1>
            <p className="faq-page__desc">
              Find quick answers to the most common questions about ScaleIQ.
            </p>
            <div className="faq-page__search-wrap">
              <SearchIcon />
              <input
                type="search"
                className="faq-page__search"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search FAQ"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container container--narrow">
            {/* Categories */}
            <div className="faq-page__categories" role="tablist" aria-label="FAQ categories">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`faq-page__category-btn ${activeCategory === cat ? 'faq-page__category-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="faq-page__results-count">
              Showing {filteredItems.length} question{filteredItems.length !== 1 ? 's' : ''}
              {search && ` for "${search}"`}
            </p>

            {filteredItems.length > 0 ? (
              <Accordion items={filteredItems} allowMultiple />
            ) : (
              <div className="faq-page__empty">
                <span>🔍</span>
                <p>No questions found. Try a different search term or category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container container--narrow">
            <div className="faq-page__contact-cta reveal">
              <h2>Still have questions?</h2>
              <p>Our support team is here to help. Reach out anytime.</p>
              <div className="faq-page__contact-options">
                <a href="mailto:support@scaleiq.io" className="faq-page__contact-option">
                  <span>📧</span>
                  <div>
                    <p className="faq-page__contact-option-label">Email Support</p>
                    <p className="faq-page__contact-option-value">support@scaleiq.io</p>
                  </div>
                </a>
                <a href="/contact" className="faq-page__contact-option">
                  <span>💬</span>
                  <div>
                    <p className="faq-page__contact-option-label">Contact Form</p>
                    <p className="faq-page__contact-option-value">We reply within 24 hours</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const SearchIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
