// ============================================================
// ScaleIQ — Mock FAQ Data
// ============================================================

import type { FaqItem } from '../types';

export const faqItems: FaqItem[] = [
  // ── General ─────────────────────────────────────────────
  {
    id: '1',
    category: 'General',
    question: 'What exactly is ScaleIQ?',
    answer:
      'ScaleIQ is a SaaS platform that helps local businesses collect more Google reviews using QR codes and AI-powered review suggestions. Customers scan your QR code, get guided by AI to write a great review, and are directed straight to your Google Business Profile. It\'s that simple.',
  },
  {
    id: '2',
    category: 'General',
    question: 'How does the QR code review system work?',
    answer:
      'After signing up, you generate a custom QR code linked to your Google Business Profile. Place this code at your checkout counter, on receipts, business cards, or anywhere customers can see it. When they scan it, they\'re guided through the review process with AI assistance.',
  },
  {
    id: '3',
    category: 'General',
    question: 'Do I need any technical knowledge to use ScaleIQ?',
    answer:
      'Not at all. ScaleIQ is designed to be used by anyone. Setup takes under 5 minutes — create an account, connect your Google Business Profile, and generate your QR code. No coding, no APIs, no technical setup required.',
  },
  {
    id: '4',
    category: 'General',
    question: 'Will my reviews look authentic to Google?',
    answer:
      'Absolutely. ScaleIQ guides customers to write their own genuine reviews — it doesn\'t write reviews for them. Our AI only suggests topics and prompts based on your business type, ensuring every review is unique, genuine, and compliant with Google\'s policies.',
  },
  // ── Pricing ─────────────────────────────────────────────
  {
    id: '5',
    category: 'Pricing',
    question: 'Is there a free trial available?',
    answer:
      'Yes! The Free plan is free forever with no credit card required. Starter and Professional plans come with a 14-day free trial so you can experience the full feature set before committing.',
  },
  {
    id: '6',
    category: 'Pricing',
    question: 'Can I change my plan at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan anytime. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your current billing period.',
  },
  {
    id: '7',
    category: 'Pricing',
    question: 'Do you offer annual discounts?',
    answer:
      'Yes! Annual billing saves you approximately 20% compared to monthly billing. The Starter plan goes from $29/month to $23/month, and Professional from $79/month to $63/month when billed annually.',
  },
  {
    id: '8',
    category: 'Pricing',
    question: 'Do you offer discounts for agencies or multiple businesses?',
    answer:
      'Yes, we have special agency and reseller pricing. If you manage reviews for multiple client businesses, contact our sales team for a custom quote and dedicated onboarding support.',
  },
  // ── Features ────────────────────────────────────────────
  {
    id: '9',
    category: 'Features',
    question: 'What is the Negative Feedback Shield?',
    answer:
      'The Negative Feedback Shield intercepts unhappy customers before they leave a public negative review. When a customer indicates they had a poor experience, instead of going to Google, they\'re redirected to a private feedback form. You can then reach out to resolve the issue before it becomes a public negative review.',
  },
  {
    id: '10',
    category: 'Features',
    question: 'How does AI Review Suggestion work?',
    answer:
      'Our AI analyzes your business category, existing reviews, and industry keywords to generate helpful prompts that guide customers in writing comprehensive reviews. Customers see suggested topics like "mention the service speed" or "talk about the atmosphere" — all based on your specific business.',
  },
  {
    id: '11',
    category: 'Features',
    question: 'Can I customize the QR code design?',
    answer:
      'On the Starter and Professional plans, you can add your logo, change the QR code colors to match your brand, and download in PNG, SVG, or print-ready PDF formats.',
  },
  {
    id: '12',
    category: 'Features',
    question: 'Does ScaleIQ work for multiple business locations?',
    answer:
      'Yes! The Starter plan supports up to 3 locations, each with its own QR code and analytics. The Professional plan supports unlimited locations with a unified multi-location dashboard.',
  },
  // ── Technical ────────────────────────────────────────────
  {
    id: '13',
    category: 'Technical',
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use AES-256 encryption for data at rest, TLS 1.3 for data in transit, and our infrastructure is hosted on SOC 2 Type II certified servers. We\'re also fully GDPR compliant.',
  },
  {
    id: '14',
    category: 'Technical',
    question: 'Does ScaleIQ integrate with other tools?',
    answer:
      'We currently integrate with Google Business Profile and common CRM systems on the Professional plan. Our REST API allows you to build custom integrations. More integrations (Slack, HubSpot, Salesforce, Zapier) are on our roadmap.',
  },
  {
    id: '15',
    category: 'Technical',
    question: 'What happens if I exceed my review limit on the Free plan?',
    answer:
      'On the Free plan, once you reach 50 review interactions in a month, new QR code scans will still work but without AI suggestions. We\'ll also send you a notification encouraging you to upgrade for uninterrupted full service.',
  },
  // ── Support ──────────────────────────────────────────────
  {
    id: '16',
    category: 'Support',
    question: 'What kind of support do you offer?',
    answer:
      'Free plan users get email support with a 48-hour response time. Starter plan users get priority email support with 24-hour response. Professional plan users get dedicated support with a 4-hour SLA and access to a dedicated account manager.',
  },
  {
    id: '17',
    category: 'Support',
    question: 'How do I get started?',
    answer:
      'Simply sign up for free at ScaleIQ — no credit card required. The onboarding wizard walks you through connecting your Google Business Profile and generating your first QR code in under 5 minutes.',
  },
  {
    id: '18',
    category: 'Support',
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Absolutely. There are no long-term contracts. You can cancel anytime from your account settings. For annual plans, please refer to our Refund Policy for details on prorated refunds.',
  },
];

export const faqCategories = ['All', 'General', 'Pricing', 'Features', 'Technical', 'Support'] as const;
