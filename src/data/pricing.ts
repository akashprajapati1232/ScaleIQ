// ============================================================
// ScaleIQ — Mock Pricing Data
// ============================================================

import type { PricingPlan, ComparisonRow } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for getting started and testing ScaleIQ with your business.',
    price: { monthly: 0, annual: 0 },
    features: [
      { label: '1 business location', included: true },
      { label: 'QR code generator', included: true },
      { label: 'Up to 50 reviews/month', included: true },
      { label: 'Basic dashboard', included: true },
      { label: 'Email support', included: true },
      { label: 'AI review suggestions', included: false },
      { label: 'Negative feedback shield', included: false },
      { label: 'Advanced analytics', included: false },
      { label: 'Custom branding', included: false },
      { label: 'Multi-location support', included: false },
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline',
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Great for growing businesses ready to build a strong reputation online.',
    price: { monthly: 29, annual: 23 },
    badge: 'Most Popular',
    popular: true,
    features: [
      { label: '3 business locations', included: true },
      { label: 'QR code generator', included: true },
      { label: 'Unlimited reviews', included: true },
      { label: 'Full dashboard', included: true },
      { label: 'Priority email support', included: true },
      { label: 'AI review suggestions', included: true },
      { label: 'Negative feedback shield', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Custom branding', included: false },
      { label: 'Multi-location support', included: false },
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'primary',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Built for agencies and enterprises managing multiple locations at scale.',
    price: { monthly: 79, annual: 63 },
    badge: 'Best Value',
    features: [
      { label: 'Unlimited locations', included: true },
      { label: 'QR code generator', included: true },
      { label: 'Unlimited reviews', included: true },
      { label: 'Advanced dashboard', included: true },
      { label: 'Dedicated support + SLA', included: true },
      { label: 'AI review suggestions', included: true },
      { label: 'Negative feedback shield', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Custom branding', included: true },
      { label: 'Multi-location support', included: true },
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'secondary',
  },
];

export const comparisonTable: ComparisonRow[] = [
  { feature: 'Business Locations', free: '1', starter: '3', professional: 'Unlimited' },
  { feature: 'Monthly Reviews', free: '50', starter: 'Unlimited', professional: 'Unlimited' },
  { feature: 'QR Code Generation', free: true, starter: true, professional: true },
  { feature: 'AI Review Suggestions', free: false, starter: true, professional: true },
  { feature: 'Negative Feedback Shield', free: false, starter: true, professional: true },
  { feature: 'Review Analytics', free: 'Basic', starter: 'Standard', professional: 'Advanced' },
  { feature: 'Custom Branding', free: false, starter: false, professional: true },
  { feature: 'Multi-Location Dashboard', free: false, starter: false, professional: true },
  { feature: 'API Access', free: false, starter: false, professional: true },
  { feature: 'Priority Support', free: false, starter: true, professional: true },
  { feature: 'SLA Guarantee', free: false, starter: false, professional: true },
  { feature: 'Dedicated Account Manager', free: false, starter: false, professional: true },
];
