import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import { brand, nav } from '../../data/siteContent'
import { buildWhatsAppUrl, buildCallUrl, scrollTo } from '../../utils/helpers'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const sectionIds = ['home', 'about', 'services', 'fleet', 'destinations', 'contact']

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    scrollTo(href)
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── Top Info Bar ─────────────────────────────── */}
      <div className="hidden md:block bg-white border-b border-gray-200 text-brand-black text-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-brand-blue" />
            <span className="font-body font-600 text-brand-blue">{brand.name}</span>
            <span className="text-gray-400 mx-1">|</span>
            <span className="text-gray-600">{brand.location}</span>
          </div>
          <div className="flex items-center gap-5">
            {brand.phones.map((p) => (
              <a key={p} href={buildCallUrl(p)} className="flex items-center gap-1.5 text-brand-black hover:text-brand-blue transition-colors">
                <Phone size={12} className="text-brand-gold" />
                <span>{p}</span>
              </a>
            ))}
            <a href={`mailto:${brand.email}`} className="flex items-center gap-1.5 text-brand-black hover:text-brand-blue transition-colors">
              <Mail size={12} className="text-brand-gold" />
              <span>{brand.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ──────────────────────── */}
      <motion.header
        className={`
          sticky top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled ? 'shadow-2xl' : ''}
          bg-brand-blue
        `}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between" role="navigation" aria-label="Main navigation">

          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm" aria-label="Go to home">
            <Logo size="md" />
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {nav.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`
                      relative px-4 py-2 font-heading font-600 text-sm tracking-[0.1em] uppercase transition-colors duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm
                      ${isActive ? 'text-brand-gold' : 'text-white/90 hover:text-brand-gold'}
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl('Hello! I want to book a taxi with Shree Momai Cabs.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-brand-gold text-brand-black px-5 py-2.5 font-heading font-700 text-sm uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={16} />
              Book Taxi Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{   opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="fixed inset-0 z-40 bg-brand-charcoal flex flex-col pt-24 pb-8 px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2 mb-8">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="w-full text-left font-heading font-700 text-3xl uppercase tracking-wide text-white hover:text-brand-gold transition-colors py-2 border-b border-white/10"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-auto">
              {brand.phones.map((p) => (
                <a key={p} href={buildCallUrl(p)} className="flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors">
                  <Phone size={16} className="text-brand-gold" />
                  <span className="font-body">{p}</span>
                </a>
              ))}
              <a
                href={buildWhatsAppUrl('Hello! I want to book a taxi with Shree Momai Cabs.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-brand-gold text-brand-black py-4 font-heading font-700 text-lg uppercase tracking-wide"
              >
                <MessageCircle size={20} />
                Book Taxi Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
