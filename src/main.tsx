// ============================================================
// ScaleIQ — Entry Point
// ============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// ── Global Styles ─────────────────────────────────────────────
import './styles/variables.css';
import './styles/reset.css';
import './styles/animations.css';
import './styles/typography.css';
import './styles/globals.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Ensure index.html has <div id="root"></div>.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
