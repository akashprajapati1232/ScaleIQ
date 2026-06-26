// ============================================================
// ScaleIQ — TypeScript Type Definitions
// ============================================================



// ── Features ─────────────────────────────────────────────────
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  comingSoon?: boolean;
}

// ── Pricing ───────────────────────────────────────────────────
interface PricingFeature {
  label: string;
  included: boolean | string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  badge?: string;
  popular?: boolean;
  features: PricingFeature[];
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

export interface ComparisonRow {
  feature: string;
  free: boolean | string;
  starter: boolean | string;
  professional: boolean | string;
}

// ── Testimonials ──────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  initials: string;
  quote: string;
  rating: number;
  reviewCount?: number;
}

// ── Blog ──────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  coverColor: string;
  coverIcon: string;
}

interface Author {
  name: string;
  role: string;
  avatar: string;
  initials: string;
}

// ── FAQ ───────────────────────────────────────────────────────
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ── Team ──────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// ── Business Categories ───────────────────────────────────────
export interface BusinessCategory {
  id: string;
  icon: string;
  name: string;
  description: string;
  businesses: string;
}

// ── Stats ─────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  description: string;
}

// ── Roadmap ───────────────────────────────────────────────────
export interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

// ── Contact ───────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  subject: string;
  message: string;
}
