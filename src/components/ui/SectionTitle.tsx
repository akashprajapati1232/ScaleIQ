// ============================================================
// ScaleIQ — SectionTitle Component
// ============================================================

import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-title section-title--${align} ${className}`}>
      {eyebrow && (
        <span className="section-title__eyebrow">{eyebrow}</span>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
};
