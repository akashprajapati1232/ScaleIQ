// ============================================================
// ScaleIQ — Login Page
// ============================================================

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import './Auth.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Sign In — ScaleIQ';
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="auth-card anim-fade-in-up">
        <div className="auth-card__header">
          <h1 className="auth-card__title">Welcome back</h1>
          <p className="auth-card__subtitle">Sign in to your ScaleIQ account</p>
        </div>

        {/* Social Logins */}
        <div className="auth-card__socials">
          <button className="auth-card__social-btn" type="button">
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
          <button className="auth-card__social-btn" type="button">
            <MicrosoftIcon />
            <span>Continue with Microsoft</span>
          </button>
        </div>

        <div className="auth-card__divider">
          <span>or sign in with email</span>
        </div>

        <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            error={errors.password}
            required
            autoComplete="current-password"
          />

          <div className="auth-card__form-options">
            <label className="auth-card__checkbox-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="auth-card__checkbox"
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="auth-card__forgot-link">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <p className="auth-card__switch">
          Don't have an account?{' '}
          <Link to="/register" className="auth-card__switch-link">
            Create one free
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

// ── Register Page ─────────────────────────────────────────────

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    document.title = 'Create Account — ScaleIQ';
  }, []);

  const validate = () => {
    const e: Partial<typeof formData> = {};
    if (!formData.name.trim()) e.name = 'Full name is required';
    if (!formData.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.password) e.password = 'Password is required';
    else if (formData.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword) e.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors((p) => ({ ...p, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !agreed) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="auth-card anim-fade-in-up">
        <div className="auth-card__header">
          <h1 className="auth-card__title">Create your account</h1>
          <p className="auth-card__subtitle">Start collecting reviews for free — no credit card required</p>
        </div>

        <div className="auth-card__socials">
          <button className="auth-card__social-btn" type="button">
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="auth-card__divider">
          <span>or sign up with email</span>
        </div>

        <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            error={errors.name}
            required
            autoComplete="name"
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            error={errors.password}
            required
            autoComplete="new-password"
            hint="Use 8+ characters with letters and numbers"
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            error={errors.confirmPassword}
            required
            autoComplete="new-password"
          />

          <label className="auth-card__terms-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="auth-card__checkbox"
              required
              aria-required="true"
            />
            <span>
              I agree to the{' '}
              <Link to="/terms" className="auth-card__switch-link">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy-policy" className="auth-card__switch-link">Privacy Policy</Link>
            </span>
          </label>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            disabled={!agreed}
          >
            {loading ? 'Creating Account...' : 'Create Free Account'}
          </Button>
        </form>

        <p className="auth-card__switch">
          Already have an account?{' '}
          <Link to="/login" className="auth-card__switch-link">Sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

// ── Forgot Password Page ──────────────────────────────────────

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Forgot Password — ScaleIQ';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Email is required'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Enter a valid email address'); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="auth-card anim-fade-in-up">
        <div className="auth-card__header">
          <div className="auth-card__icon">🔐</div>
          <h1 className="auth-card__title">Forgot your password?</h1>
          <p className="auth-card__subtitle">
            No worries. Enter your email and we'll send you reset instructions.
          </p>
        </div>

        {submitted ? (
          <div className="auth-card__success">
            <div className="auth-card__success-icon">✓</div>
            <h2>Check your inbox!</h2>
            <p>
              We've sent password reset instructions to <strong>{email}</strong>.
              Check your spam folder if you don't see it.
            </p>
            <Button to="/login" variant="secondary" size="md" fullWidth>
              Back to Sign In
            </Button>
          </div>
        ) : (
          <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="you@company.com"
              error={error}
              required
              autoComplete="email"
            />
            <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        )}

        <p className="auth-card__switch">
          Remember your password?{' '}
          <Link to="/login" className="auth-card__switch-link">Back to sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

// ── Social Icons ──────────────────────────────────────────────

const GoogleIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
    <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
    <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
    <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
  </svg>
);
