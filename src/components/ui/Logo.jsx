import React from 'react'

export default function Logo({ className = '', size = 'md' }) {
  const heights = { sm: 36, md: 44, lg: 56 }
  const h = heights[size] || 44

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo.png"
        alt="Shree Momai Cabs"
        style={{ height: h }}
        className="object-contain drop-shadow-md"
        loading="eager"
      />
    </div>
  )
}
