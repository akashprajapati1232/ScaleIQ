// ============================================================
// ScaleIQ — Legal Pages (Privacy Policy, Terms, Refund Policy)
// ============================================================

import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import './Legal.css';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  return (
    <MainLayout>
      <div className="legal-page page-enter">
        <div className="legal-page__hero">
          <div className="legal-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <h1 className="legal-page__title">{title}</h1>
            <p className="legal-page__updated">Last updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="container">
          <div className="legal-page__layout">
            {/* Sticky Sidebar */}
            <aside className="legal-page__sidebar" aria-label="Table of contents">
              <nav>
                <p className="legal-page__toc-heading">Contents</p>
                <ol className="legal-page__toc">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`legal-page__toc-link ${activeSection === section.id ? 'legal-page__toc-link--active' : ''}`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Content */}
            <main className="legal-page__content">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="legal-page__section">
                  <h2 className="legal-page__section-title">{section.title}</h2>
                  <div className="legal-page__section-content">{section.content}</div>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// ── Privacy Policy ────────────────────────────────────────────

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => { document.title = 'Privacy Policy — ScaleIQ'; }, []);

  const sections: LegalSection[] = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <p>
          ScaleIQ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. By using ScaleIQ, you agree to the collection and use of information in accordance with this policy.
        </p>
      ),
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: (
        <>
          <p>We collect information you provide directly, including:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password, and business details when you create an account.</li>
            <li><strong>Business Information:</strong> Business name, address, Google Business Profile details, and industry category.</li>
            <li><strong>Payment Information:</strong> Processed securely through Stripe. We do not store full card details.</li>
            <li><strong>Communications:</strong> Messages you send us via contact forms or email.</li>
          </ul>
          <p>We also collect information automatically, including:</p>
          <ul>
            <li>Log data (IP address, browser type, pages visited, timestamps)</li>
            <li>Device information (hardware model, operating system, unique device identifiers)</li>
            <li>Usage data (features used, actions taken within the app)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </>
      ),
    },
    {
      id: 'how-we-use-information',
      title: '3. How We Use Your Information',
      content: (
        <>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-sharing',
      title: '4. How We Share Your Information',
      content: (
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share information with service providers who assist us in operating our platform (such as cloud hosting, email delivery, and payment processing), with your consent, or when required by law.
        </p>
      ),
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      content: (
        <p>
          We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 for data in transit, regular security audits, and SOC 2 Type II compliant infrastructure. No method of transmission over the Internet is 100% secure, but we strive to protect your information using commercially acceptable means.
        </p>
      ),
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      content: (
        <p>
          We use cookies to analyze traffic, personalize content, and improve functionality. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly.
        </p>
      ),
    },
    {
      id: 'your-rights',
      title: '7. Your Rights',
      content: (
        <>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@scaleiq.io.</p>
        </>
      ),
    },
    {
      id: 'gdpr',
      title: '8. GDPR Compliance',
      content: (
        <p>
          For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). Our legal basis for processing personal data includes: contract performance, legitimate interests, legal compliance, and consent where applicable. Our Data Processing Agreement (DPA) is available upon request.
        </p>
      ),
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      content: (
        <p>
          Our service is not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
        </p>
      ),
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      content: (
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this page periodically.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '11. Contact Us',
      content: (
        <p>
          If you have questions about this Privacy Policy, please contact us at:<br />
          Email: privacy@scaleiq.io<br />
          Address: 123 Innovation Drive, Suite 400, San Francisco, CA 94105
        </p>
      ),
    },
  ];

  return <LegalPage title="Privacy Policy" lastUpdated="June 15, 2025" sections={sections} />;
};

// ── Terms & Conditions ────────────────────────────────────────

export const Terms: React.FC = () => {
  useEffect(() => { document.title = 'Terms & Conditions — ScaleIQ'; }, []);

  const sections: LegalSection[] = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: (
        <p>By accessing or using ScaleIQ ("Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service.</p>
      ),
    },
    {
      id: 'accounts',
      title: '2. Accounts',
      content: (
        <p>When you create an account, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      ),
    },
    {
      id: 'intellectual-property',
      title: '3. Intellectual Property',
      content: (
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of ScaleIQ, Inc. and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.</p>
      ),
    },
    {
      id: 'acceptable-use',
      title: '4. Acceptable Use',
      content: (
        <>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Generate or collect fake reviews</li>
            <li>Manipulate review platforms in violation of their policies</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Transmit harmful, abusive, or objectionable content</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
          </ul>
        </>
      ),
    },
    {
      id: 'billing',
      title: '5. Billing and Payments',
      content: (
        <p>Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as specified in our Refund Policy. We reserve the right to change our pricing with 30 days' notice. Failure to pay may result in suspension or termination of your account.</p>
      ),
    },
    {
      id: 'termination',
      title: '6. Termination',
      content: (
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately. All provisions which by their nature should survive termination shall survive.</p>
      ),
    },
    {
      id: 'disclaimer',
      title: '7. Disclaimer of Warranties',
      content: (
        <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties, either express or implied. ScaleIQ does not warrant that the Service will be uninterrupted, error-free, or completely secure. Your use of the Service is at your sole risk.</p>
      ),
    },
    {
      id: 'limitation',
      title: '8. Limitation of Liability',
      content: (
        <p>In no event shall ScaleIQ, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the Service.</p>
      ),
    },
    {
      id: 'governing-law',
      title: '9. Governing Law',
      content: (
        <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in San Francisco, California.</p>
      ),
    },
    {
      id: 'changes',
      title: '10. Changes to Terms',
      content: (
        <p>We reserve the right to modify or replace these Terms at any time. We will provide at least 30 days' notice before new terms take effect. By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms.</p>
      ),
    },
  ];

  return <LegalPage title="Terms & Conditions" lastUpdated="June 15, 2025" sections={sections} />;
};

// ── Refund Policy ─────────────────────────────────────────────

export const RefundPolicy: React.FC = () => {
  useEffect(() => { document.title = 'Refund Policy — ScaleIQ'; }, []);

  const sections: LegalSection[] = [
    {
      id: 'overview',
      title: '1. Overview',
      content: (
        <p>We want you to be completely satisfied with ScaleIQ. This Refund Policy explains our approach to refunds and cancellations for all subscription plans. We believe in fairness and transparency, and we've designed this policy with our customers' best interests in mind.</p>
      ),
    },
    {
      id: 'free-trial',
      title: '2. Free Trial',
      content: (
        <p>Starter and Professional plans include a 14-day free trial with full access to all features. No credit card is required to start your trial. You will not be charged until the trial period ends. You may cancel at any time during the trial with no obligation.</p>
      ),
    },
    {
      id: 'monthly-plans',
      title: '3. Monthly Subscriptions',
      content: (
        <p>For monthly subscriptions, you may cancel at any time. Your access to paid features will continue until the end of your current billing period. We do not offer prorated refunds for monthly plans, but you will not be charged for the following month after cancellation.</p>
      ),
    },
    {
      id: 'annual-plans',
      title: '4. Annual Subscriptions',
      content: (
        <p>Annual subscriptions may be cancelled within the first 30 days for a full refund. After 30 days, annual subscriptions are non-refundable but can be cancelled to prevent auto-renewal at the end of the subscription period. We may, at our discretion, offer prorated refunds for extenuating circumstances.</p>
      ),
    },
    {
      id: 'how-to-cancel',
      title: '5. How to Cancel',
      content: (
        <>
          <p>You can cancel your subscription at any time by:</p>
          <ul>
            <li>Going to Account Settings → Billing → Cancel Subscription in your dashboard</li>
            <li>Emailing billing@scaleiq.io with your account email and request</li>
            <li>Contacting our support team via the contact form</li>
          </ul>
          <p>Cancellations requested before the renewal date will take effect at the end of the current billing period.</p>
        </>
      ),
    },
    {
      id: 'refund-process',
      title: '6. Refund Process',
      content: (
        <p>Approved refunds are processed within 5–10 business days. Refunds are issued to the original payment method used for the purchase. Depending on your bank or card issuer, it may take an additional 3–5 business days for the refund to appear on your statement.</p>
      ),
    },
    {
      id: 'exceptions',
      title: '7. Non-Refundable Items',
      content: (
        <>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Monthly subscription fees after the billing period has begun</li>
            <li>Annual subscription fees after the 30-day cancellation window</li>
            <li>Add-on purchases or one-time fees</li>
            <li>Accounts that have violated our Terms of Service</li>
          </ul>
        </>
      ),
    },
    {
      id: 'contact',
      title: '8. Questions',
      content: (
        <p>If you have questions about our Refund Policy or would like to request a refund, please contact us at billing@scaleiq.io. We aim to respond to all billing inquiries within 1 business day.</p>
      ),
    },
  ];

  return <LegalPage title="Refund Policy" lastUpdated="June 15, 2025" sections={sections} />;
};
