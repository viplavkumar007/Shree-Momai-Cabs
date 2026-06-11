import React from 'react'

const variants = {
  gold:    'bg-brand-gold text-brand-black hover:bg-brand-goldDark active:scale-[0.97] shadow-lg hover:shadow-brand-gold/30',
  blue:    'bg-brand-blue text-white hover:bg-brand-blueLight active:scale-[0.97] shadow-lg hover:shadow-brand-blue/30',
  outline: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black active:scale-[0.97]',
  white:   'bg-white text-brand-blue hover:bg-brand-gray active:scale-[0.97] shadow-lg',
  dark:    'bg-brand-charcoal text-white border border-white/10 hover:bg-brand-darkGray active:scale-[0.97]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  icon: Icon,
  iconPos = 'left',
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-heading font-700 tracking-wide uppercase
        rounded-md transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2
        cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPos === 'left'  && <Icon size={18} />}
      {children}
      {Icon && iconPos === 'right' && <Icon size={18} />}
    </button>
  )
}
