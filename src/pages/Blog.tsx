// ============================================================
// ScaleIQ — Blog Page
// ============================================================

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { blogPosts, blogCategories } from '../data/blog';
import './Blog.css';

const POSTS_PER_PAGE = 6;

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  useScrollReveal();

  useEffect(() => {
    document.title = 'Blog — ScaleIQ';
  }, []);

  const filtered = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = blogPosts.find((p) => p.featured);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(0, page * POSTS_PER_PAGE);

  return (
    <MainLayout>
      <div className="blog-page page-enter">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="blog-page__hero">
          <div className="blog-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <Badge variant="primary">ScaleIQ Blog</Badge>
            <h1 className="blog-page__title">
              Insights to Grow Your{' '}
              <span className="gradient-text">Reputation</span>
            </h1>
            <p className="blog-page__desc">
              Expert guides, case studies, and strategy to help local businesses build and protect their online reputation.
            </p>
            <div className="blog-page__search-wrap">
              <SearchIcon />
              <input
                type="search"
                className="blog-page__search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                aria-label="Search blog articles"
              />
            </div>
          </div>
        </section>

        {/* ── Featured Post ──────────────────────────────────── */}
        {featured && !search && activeCategory === 'All' && (
          <section className="section">
            <div className="container">
              <div className="blog-page__featured reveal">
                <div className="blog-page__featured-cover" style={{ background: `linear-gradient(135deg, ${featured.coverColor}22, ${featured.coverColor}44)` }}>
                  <span className="blog-page__featured-icon">{featured.coverIcon}</span>
                  <Badge variant="primary" className="blog-page__featured-badge">Featured</Badge>
                </div>
                <div className="blog-page__featured-content">
                  <div className="blog-page__featured-meta">
                    <Badge variant="default">{featured.category}</Badge>
                    <span className="blog-page__meta-separator">·</span>
                    <time className="blog-page__date">{formatDate(featured.publishedAt)}</time>
                    <span className="blog-page__meta-separator">·</span>
                    <span className="blog-page__read-time">{featured.readTime} min read</span>
                  </div>
                  <h2 className="blog-page__featured-title">{featured.title}</h2>
                  <p className="blog-page__featured-excerpt">{featured.excerpt}</p>
                  <div className="blog-page__featured-footer">
                    <div className="blog-page__author">
                      <div className="blog-page__author-avatar">{featured.author.initials}</div>
                      <div>
                        <p className="blog-page__author-name">{featured.author.name}</p>
                        <p className="blog-page__author-role">{featured.author.role}</p>
                      </div>
                    </div>
                    <Button to={`/blog/${featured.slug}`} variant="primary" size="md">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Articles Grid ─────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            {/* Categories */}
            <div className="blog-page__categories" role="tablist">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`blog-page__category-btn ${activeCategory === cat ? 'blog-page__category-btn--active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {paginated.length > 0 ? (
              <>
                <div className="blog-page__grid">
                  {paginated.map((post, i) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="blog-page__card reveal"
                      style={{ transitionDelay: `${(i % POSTS_PER_PAGE) * 60}ms` }}
                      aria-label={`Read article: ${post.title}`}
                    >
                      <div
                        className="blog-page__card-cover"
                        style={{ background: `linear-gradient(135deg, ${post.coverColor}22, ${post.coverColor}44)` }}
                      >
                        <span className="blog-page__card-icon">{post.coverIcon}</span>
                      </div>
                      <div className="blog-page__card-body">
                        <div className="blog-page__card-meta">
                          <Badge variant="default">{post.category}</Badge>
                          <span className="blog-page__read-time">{post.readTime} min</span>
                        </div>
                        <h3 className="blog-page__card-title">{post.title}</h3>
                        <p className="blog-page__card-excerpt">{post.excerpt}</p>
                        <div className="blog-page__card-footer">
                          <div className="blog-page__author">
                            <div className="blog-page__author-avatar blog-page__author-avatar--sm">
                              {post.author.initials}
                            </div>
                            <div>
                              <p className="blog-page__author-name blog-page__author-name--sm">{post.author.name}</p>
                              <time className="blog-page__date">{formatDate(post.publishedAt)}</time>
                            </div>
                          </div>
                          <span className="blog-page__read-more">Read →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {page < totalPages && (
                  <div className="blog-page__load-more reveal">
                    <Button variant="secondary" size="md" onClick={() => setPage((p) => p + 1)}>
                      Load More Articles
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="blog-page__empty">
                <span>📝</span>
                <p>No articles found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Newsletter CTA ─────────────────────────────────── */}
        <section className="section">
          <div className="container container--narrow">
            <div className="blog-page__newsletter reveal">
              <span>📬</span>
              <h2>Get Reputation Tips in Your Inbox</h2>
              <p>Join 12,000+ business owners getting weekly insights on reviews, local SEO, and reputation management.</p>
              <form className="blog-page__newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="blog-page__newsletter-input" required aria-label="Email for newsletter" />
                <Button type="submit" variant="primary" size="md">Subscribe Free</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const SearchIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
