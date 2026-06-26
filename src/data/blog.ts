// ============================================================
// ScaleIQ — Mock Blog Data
// ============================================================

import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-google-reviews-matter-2025',
    title: 'Why Google Reviews Are the #1 Trust Signal in 2025',
    excerpt:
      '93% of consumers say online reviews influence their purchase decisions. We break down exactly why Google reviews have become the most powerful trust signal for local businesses.',
    category: 'Reputation',
    tags: ['Google Reviews', 'Local SEO', 'Trust'],
    author: {
      name: 'Sarah Mitchell',
      role: 'Head of Content',
      avatar: '',
      initials: 'SM',
    },
    publishedAt: '2025-06-15',
    readTime: 7,
    featured: true,
    coverColor: '#6366f1',
    coverIcon: '⭐',
  },
  {
    id: '2',
    slug: 'qr-code-review-strategies',
    title: '7 Creative Ways to Use QR Codes to Collect More Reviews',
    excerpt:
      'Most businesses just print one QR code and put it at the register. Here are 7 strategic placements that consistently drive 3x more review volume.',
    category: 'Strategy',
    tags: ['QR Codes', 'Reviews', 'Strategy'],
    author: {
      name: 'James Park',
      role: 'Growth Lead',
      avatar: '',
      initials: 'JP',
    },
    publishedAt: '2025-06-08',
    readTime: 5,
    coverColor: '#8b5cf6',
    coverIcon: '⬡',
  },
  {
    id: '3',
    slug: 'ai-review-suggestions-guide',
    title: 'How AI is Revolutionizing the Review Collection Process',
    excerpt:
      'Artificial intelligence is now helping customers write better reviews — and helping businesses get more of them. Here\'s how AI review prompting actually works.',
    category: 'AI & Technology',
    tags: ['AI', 'Automation', 'Reviews'],
    author: {
      name: 'Aisha Roberts',
      role: 'AI Product Lead',
      avatar: '',
      initials: 'AR',
    },
    publishedAt: '2025-05-30',
    readTime: 8,
    coverColor: '#ec4899',
    coverIcon: '✦',
  },
  {
    id: '4',
    slug: 'respond-to-negative-reviews',
    title: 'The Right Way to Respond to Negative Google Reviews',
    excerpt:
      'A bad review isn\'t the end of the world — but your response can make or break your reputation. Follow this proven framework to turn negatives into positives.',
    category: 'Reputation',
    tags: ['Negative Reviews', 'Customer Service', 'Response'],
    author: {
      name: 'Sarah Mitchell',
      role: 'Head of Content',
      avatar: '',
      initials: 'SM',
    },
    publishedAt: '2025-05-20',
    readTime: 6,
    coverColor: '#f59e0b',
    coverIcon: '◉',
  },
  {
    id: '5',
    slug: 'local-seo-google-reviews',
    title: 'The Direct Link Between Google Reviews and Local SEO Rankings',
    excerpt:
      'Google\'s local ranking algorithm puts serious weight on review quantity, velocity, and quality. We analyzed 500 businesses to reveal exactly how reviews impact your position in local search.',
    category: 'Local SEO',
    tags: ['SEO', 'Local Rankings', 'Google'],
    author: {
      name: 'David Chen',
      role: 'SEO Analyst',
      avatar: '',
      initials: 'DC',
    },
    publishedAt: '2025-05-12',
    readTime: 10,
    coverColor: '#10b981',
    coverIcon: '◈',
  },
  {
    id: '6',
    slug: 'restaurant-review-case-study',
    title: 'Case Study: How Golden Wok Went from 3.6 to 4.9 Stars in 90 Days',
    excerpt:
      'A deep dive into how one restaurant owner transformed their online reputation from mediocre to outstanding using a simple QR code strategy and ScaleIQ\'s AI tools.',
    category: 'Case Studies',
    tags: ['Case Study', 'Restaurant', 'Success Story'],
    author: {
      name: 'James Park',
      role: 'Growth Lead',
      avatar: '',
      initials: 'JP',
    },
    publishedAt: '2025-05-05',
    readTime: 9,
    coverColor: '#3b82f6',
    coverIcon: '◫',
  },
  {
    id: '7',
    slug: 'review-velocity-matters',
    title: 'Review Velocity: Why Getting 10 Reviews This Month Beats 100 Last Year',
    excerpt:
      'Google pays attention to how frequently you\'re earning reviews, not just how many you have. Learn why consistent, ongoing review collection beats one-time bursts.',
    category: 'Strategy',
    tags: ['Review Velocity', 'Google Algorithm', 'Strategy'],
    author: {
      name: 'Aisha Roberts',
      role: 'AI Product Lead',
      avatar: '',
      initials: 'AR',
    },
    publishedAt: '2025-04-28',
    readTime: 6,
    coverColor: '#6366f1',
    coverIcon: '◎',
  },
  {
    id: '8',
    slug: 'multi-location-reputation-management',
    title: 'Reputation Management at Scale: A Guide for Multi-Location Businesses',
    excerpt:
      'Managing online reputation across dozens or hundreds of locations is a different challenge entirely. Here\'s the framework enterprise brands use to do it right.',
    category: 'Enterprise',
    tags: ['Multi-Location', 'Enterprise', 'Reputation'],
    author: {
      name: 'David Chen',
      role: 'SEO Analyst',
      avatar: '',
      initials: 'DC',
    },
    publishedAt: '2025-04-15',
    readTime: 12,
    coverColor: '#8b5cf6',
    coverIcon: '⊕',
  },
];

export const blogCategories = [
  'All',
  'Reputation',
  'Strategy',
  'AI & Technology',
  'Local SEO',
  'Case Studies',
  'Enterprise',
] as const;
