// ============================================================
// ScaleIQ — Mock Team & Business Category Data
// ============================================================

import type { TeamMember, BusinessCategory, Stat, RoadmapItem } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'CEO & Co-Founder',
    bio: 'Former head of product at a leading reputation management firm. Alex has spent 10+ years helping businesses build online credibility.',
    initials: 'AM',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Riya Patel',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer and AI researcher. Riya architected ScaleIQ\'s AI review suggestion engine from the ground up.',
    initials: 'RP',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: '3',
    name: 'Jordan Wells',
    role: 'Head of Design',
    bio: 'Award-winning product designer with a background in SaaS and fintech. Jordan leads the experience across all ScaleIQ surfaces.',
    initials: 'JW',
    gradient: 'linear-gradient(135deg, #ec4899, #f59e0b)',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: '4',
    name: 'Marcus Lee',
    role: 'VP of Growth',
    bio: 'Growth strategist who has scaled 3 SaaS companies to $10M+ ARR. Marcus leads acquisition, retention, and customer success.',
    initials: 'ML',
    gradient: 'linear-gradient(135deg, #10b981, #6366f1)',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: '5',
    name: 'Nadia Osei',
    role: 'Head of Customer Success',
    bio: 'Passionate about helping businesses win. Nadia and her team ensure every ScaleIQ customer achieves measurable results.',
    initials: 'NO',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    socials: {
      linkedin: '#',
    },
  },
  {
    id: '6',
    name: 'Chris Tanaka',
    role: 'Lead Engineer',
    bio: 'Full-stack engineer who built the QR code generation engine and real-time analytics pipeline that power ScaleIQ\'s core platform.',
    initials: 'CT',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

export const businessCategories: BusinessCategory[] = [
  {
    id: 'restaurants',
    icon: '🍽️',
    name: 'Restaurants & Cafes',
    description: 'Boost dine-in and delivery ratings to stand out on Google Maps.',
    businesses: '14,000+ businesses',
  },
  {
    id: 'healthcare',
    icon: '🏥',
    name: 'Healthcare & Clinics',
    description: 'Build patient trust and improve your healthcare reputation score.',
    businesses: '8,200+ businesses',
  },
  {
    id: 'beauty',
    icon: '💅',
    name: 'Beauty & Wellness',
    description: 'Turn first-time clients into loyal advocates who spread the word.',
    businesses: '11,500+ businesses',
  },
  {
    id: 'automotive',
    icon: '🚗',
    name: 'Automotive Services',
    description: 'Build credibility for dealerships, repair shops, and detail centers.',
    businesses: '6,800+ businesses',
  },
  {
    id: 'retail',
    icon: '🛍️',
    name: 'Retail Stores',
    description: 'Increase foot traffic and trust with strong local review presence.',
    businesses: '9,300+ businesses',
  },
  {
    id: 'fitness',
    icon: '💪',
    name: 'Fitness & Sports',
    description: 'Show new members why your gym or studio is the top choice locally.',
    businesses: '5,600+ businesses',
  },
  {
    id: 'legal',
    icon: '⚖️',
    name: 'Legal & Professional',
    description: 'Establish authority and credibility in your practice area.',
    businesses: '4,100+ businesses',
  },
  {
    id: 'hospitality',
    icon: '🏨',
    name: 'Hotels & Hospitality',
    description: 'Convert guests into reviewers and drive more direct bookings.',
    businesses: '7,200+ businesses',
  },
];

export const companyStats: Stat[] = [
  {
    value: '87,000+',
    label: 'Businesses Served',
    description: 'Active businesses using ScaleIQ globally',
  },
  {
    value: '4.2M+',
    label: 'Reviews Collected',
    description: 'Google reviews generated through our platform',
  },
  {
    value: '4.8★',
    label: 'Avg. Rating Increase',
    description: 'Average Google star rating our customers achieve',
  },
  {
    value: '99.9%',
    label: 'Platform Uptime',
    description: 'Guaranteed reliability for your business',
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    quarter: 'Q1',
    year: '2025',
    title: 'Foundation & Launch',
    items: ['QR Code Generator', 'Google Review Integration', 'Basic Dashboard', 'Free Plan Launch'],
    status: 'completed',
  },
  {
    quarter: 'Q2',
    year: '2025',
    title: 'AI & Intelligence',
    items: ['AI Review Suggestions', 'Negative Feedback Shield', 'Review Analytics', 'Starter Plan Launch'],
    status: 'completed',
  },
  {
    quarter: 'Q3',
    year: '2025',
    title: 'Scale & Enterprise',
    items: ['Multi-Location Dashboard', 'Custom Branding', 'API Access', 'Professional Plan Launch'],
    status: 'in-progress',
  },
  {
    quarter: 'Q4',
    year: '2025',
    title: 'Integrations & Automation',
    items: ['Zapier Integration', 'HubSpot & Salesforce', 'SMS Review Requests', 'Email Campaigns'],
    status: 'planned',
  },
  {
    quarter: 'Q1',
    year: '2026',
    title: 'Global Expansion',
    items: ['Multi-Language Support', 'Yelp & TripAdvisor Integration', 'White-Label Solution', 'Mobile App'],
    status: 'planned',
  },
];
