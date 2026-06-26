// ============================================================
// ScaleIQ — Mock Features Data
// ============================================================

import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'qr-generator',
    icon: '⬡',
    title: 'Smart QR Code Generator',
    description:
      'Generate beautiful, branded QR codes in seconds. Customize colors, add your logo, and download in multiple formats ready for print or digital use.',
    badge: 'Popular',
  },
  {
    id: 'google-reviews',
    icon: '⭐',
    title: 'Google Review Collection',
    description:
      'Seamlessly direct customers to your Google Business Profile review page. Eliminate friction and watch your review count grow automatically.',
  },
  {
    id: 'ai-suggestions',
    icon: '✦',
    title: 'AI Review Suggestions',
    description:
      'Our AI analyzes your business and generates personalized review prompts, helping customers write authentic, detailed reviews effortlessly.',
    badge: 'AI-Powered',
  },
  {
    id: 'dashboard',
    icon: '◫',
    title: 'Business Dashboard',
    description:
      'Monitor your reputation in real-time. Track review velocity, sentiment trends, and compare performance across multiple locations from one place.',
  },
  {
    id: 'analytics',
    icon: '◈',
    title: 'Review Analytics',
    description:
      'Deep insights into your review data. Identify patterns, peak collection times, sentiment breakdown, and actionable improvement opportunities.',
  },
  {
    id: 'negative-feedback',
    icon: '◉',
    title: 'Negative Feedback Shield',
    description:
      'Intercept unhappy customers before they leave a public negative review. Route dissatisfied customers to a private feedback form instead.',
  },
  {
    id: 'secure-platform',
    icon: '⬡',
    title: 'Enterprise-Grade Security',
    description:
      'Bank-level encryption, SOC 2 compliance, and GDPR-ready infrastructure ensure your business and customer data stays protected.',
  },
  {
    id: 'fast-setup',
    icon: '◌',
    title: 'Setup in Under 5 Minutes',
    description:
      'No technical knowledge required. Create your account, add your business, generate your QR code, and start collecting reviews instantly.',
  },
  {
    id: 'unlimited-reviews',
    icon: '∞',
    title: 'Unlimited Review Requests',
    description:
      'No caps, no throttles on Starter and Pro plans. Send as many QR code interactions and review requests as your business needs.',
  },
  {
    id: 'responsive-dashboard',
    icon: '▣',
    title: 'Mobile-First Dashboard',
    description:
      'Manage your reputation on the go. The dashboard is fully optimized for desktop, tablet, and mobile — wherever your business takes you.',
  },
  {
    id: 'multi-location',
    icon: '⊕',
    title: 'Multi-Location Support',
    description:
      'Run multiple business locations from a single account. Each location gets its own QR code, dashboard, and analytics.',
    badge: 'Pro',
  },
  {
    id: 'coming-soon',
    icon: '◎',
    title: 'More Coming Soon',
    description:
      'Email campaigns, SMS review requests, WhatsApp integration, review response templates, and much more on the roadmap.',
    comingSoon: true,
  },
];
