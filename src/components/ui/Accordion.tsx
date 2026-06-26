// ============================================================
// ScaleIQ — Accordion Component
// ============================================================

import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="accordion" role="list">
      {items.map((item) => (
        <AccordionItemComp
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
};

interface AccordionItemCompProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItemComp: React.FC<AccordionItemCompProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  const panelId = `accordion-panel-${item.id}`;
  const headerId = `accordion-header-${item.id}`;

  return (
    <div
      className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}
      role="listitem"
    >
      <button
        id={headerId}
        className="accordion__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="accordion__question">{item.question}</span>
        <span className="accordion__icon" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>
      <div
        id={panelId}
        className="accordion__panel"
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
      >
        <div className="accordion__answer">{item.answer}</div>
      </div>
    </div>
  );
};

const ChevronIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
