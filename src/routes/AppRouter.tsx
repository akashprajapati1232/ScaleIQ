// ============================================================
// ScaleIQ — App Router (React Router DOM v6)
// ============================================================

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// ── Pages ────────────────────────────────────────────────────
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Features } from '../pages/Features';
import { Pricing } from '../pages/Pricing';
import { Contact } from '../pages/Contact';
import { FAQ } from '../pages/FAQ';
import { Blog } from '../pages/Blog';
import { Login, Register, ForgotPassword } from '../pages/Auth';
import { PrivacyPolicy, Terms, RefundPolicy } from '../pages/Legal';
import { NotFound, ComingSoon, Maintenance } from '../pages/Utility';

// ── Loading Fallback ─────────────────────────────────────────
const PageLoader: React.FC = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="page-loader__spinner" />
  </div>
);

// ── Router ────────────────────────────────────────────────────
export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ── Public Pages ─────────────────────────────────── */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />

        {/* ── Auth Pages ───────────────────────────────────── */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ── Legal Pages ──────────────────────────────────── */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* ── Utility Pages ────────────────────────────────── */}
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/maintenance" element={<Maintenance />} />

        {/* ── 404 Catch-all ────────────────────────────────── */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
