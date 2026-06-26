// ============================================================
// ScaleIQ — Main Layout (with Navbar + Footer)
// ============================================================

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  noFooter?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, noFooter = false }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main" id="main-content">
        {children}
      </main>
      {!noFooter && <Footer />}
    </div>
  );
};
