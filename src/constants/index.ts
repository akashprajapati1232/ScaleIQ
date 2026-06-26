// ============================================================
// ScaleIQ — App Constants
// ============================================================

export const APP_NAME = 'ScaleIQ';
export const APP_EMAIL = 'hello@scaleiq.io';
export const APP_PHONE = '+1 (555) 000-1234';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/scaleiq',
  linkedin: 'https://linkedin.com/company/scaleiq',
  instagram: 'https://instagram.com/scaleiq',
  youtube: 'https://youtube.com/@scaleiq',
  github: 'https://github.com/scaleiq',
} as const;

export const BUSINESS_HOURS = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM – 3:00 PM EST' },
  { day: 'Sunday', hours: 'Closed' },
] as const;


export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Changelog', href: '/coming-soon' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/coming-soon' },
    { label: 'Press', href: '/coming-soon' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Cookie Policy', href: '/coming-soon' },
  ],
  resources: [
    { label: 'Documentation', href: '/coming-soon' },
    { label: 'API Reference', href: '/coming-soon' },
    { label: 'Guides', href: '/coming-soon' },
    { label: 'Status', href: '/maintenance' },
  ],
} as const;
