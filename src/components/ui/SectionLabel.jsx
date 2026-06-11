import React from 'react'

export default function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`
        inline-block font-heading font-700 text-sm tracking-[0.2em] uppercase
        px-4 py-1.5 mb-4
        ${light
          ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'
          : 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20'
        }
      `}
    >
      {children}
    </span>
  )
}
