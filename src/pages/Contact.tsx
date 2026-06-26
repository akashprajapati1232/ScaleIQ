// ============================================================
// ScaleIQ — Contact Page
// ============================================================

import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BUSINESS_HOURS, APP_EMAIL, APP_PHONE, SOCIAL_LINKS } from '../constants';
import type { ContactFormData } from '../types';
import './Contact.css';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  subject: '',
  message: '',
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useScrollReveal();

  useEffect(() => {
    document.title = 'Contact — ScaleIQ';
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="contact-page page-enter">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="contact-page__hero">
          <div className="contact-page__hero-bg" aria-hidden="true" />
          <div className="container">
            <Badge variant="primary">Get in Touch</Badge>
            <h1 className="contact-page__title">We'd Love to Hear From You</h1>
            <p className="contact-page__desc">
              Whether you have a question, need help, or want to explore a custom plan — our team is ready to help.
            </p>
          </div>
        </section>

        {/* ── Main Content ──────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="contact-page__layout">
              {/* ── Form ─────────────────────────────────── */}
              <div className="contact-page__form-section reveal-left">
                <h2 className="contact-page__form-title">Send Us a Message</h2>
                {submitted ? (
                  <div className="contact-page__success">
                    <div className="contact-page__success-icon">✓</div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                    <Button variant="secondary" size="md" onClick={() => { setSubmitted(false); setFormData(initialFormData); }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
                    <div className="contact-page__form-row">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        error={errors.name}
                        required
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        error={errors.email}
                        required
                      />
                    </div>
                    <div className="contact-page__form-row">
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-1234"
                      />
                      <Input
                        label="Business Name"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="contact-page__select-wrap">
                      <label className="input-field__label" htmlFor="subject-select">
                        Subject <span className="input-field__required" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject-select"
                        name="subject"
                        className="contact-page__select"
                        value={formData.subject}
                        onChange={handleChange}
                        aria-required="true"
                      >
                        <option value="">Select a subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership / Agency</option>
                        <option value="enterprise">Enterprise Sales</option>
                        <option value="press">Press & Media</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p className="input-field__error">{errors.subject}</p>}
                    </div>
                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      error={errors.message}
                      required
                    />
                    <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              {/* ── Info ─────────────────────────────────── */}
              <div className="contact-page__info reveal-right">
                <div className="contact-page__info-card">
                  <h3 className="contact-page__info-title">Contact Information</h3>
                  <div className="contact-page__info-items">
                    <div className="contact-page__info-item">
                      <span className="contact-page__info-icon">📧</span>
                      <div>
                        <p className="contact-page__info-label">Email</p>
                        <a href={`mailto:${APP_EMAIL}`} className="contact-page__info-value">
                          {APP_EMAIL}
                        </a>
                      </div>
                    </div>
                    <div className="contact-page__info-item">
                      <span className="contact-page__info-icon">📞</span>
                      <div>
                        <p className="contact-page__info-label">Phone</p>
                        <a href={`tel:${APP_PHONE}`} className="contact-page__info-value">
                          {APP_PHONE}
                        </a>
                      </div>
                    </div>
                    <div className="contact-page__info-item">
                      <span className="contact-page__info-icon">📍</span>
                      <div>
                        <p className="contact-page__info-label">Office</p>
                        <p className="contact-page__info-value">
                          123 Innovation Drive, Suite 400<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-page__hours-card">
                  <h3 className="contact-page__info-title">Business Hours</h3>
                  <div className="contact-page__hours">
                    {BUSINESS_HOURS.map((hour, i) => (
                      <div key={i} className="contact-page__hours-row">
                        <span className="contact-page__hours-day">{hour.day}</span>
                        <span className="contact-page__hours-time">{hour.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contact-page__map-card">
                  <div className="contact-page__map-placeholder">
                    <span>📍</span>
                    <p>San Francisco, CA</p>
                    <p className="contact-page__map-note">Map view available in the full app</p>
                  </div>
                </div>

                <div className="contact-page__social-card">
                  <h3 className="contact-page__info-title">Follow Us</h3>
                  <div className="contact-page__socials">
                    {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-page__social-link"
                        aria-label={`ScaleIQ on ${platform}`}
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
