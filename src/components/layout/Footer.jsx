import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, ChevronRight } from 'lucide-react'
import Logo from '../ui/Logo'
import { brand, nav, destinations } from '../../data/siteContent'
import { buildWhatsAppUrl, buildCallUrl, buildMailUrl, scrollTo } from '../../utils/helpers'
import { fadeUp, stagger, viewportOptions } from '../../utils/motionVariants'

const quickLinks = nav

const serviceLinks = [
  'Dwarka Darshan Package',
  'Bet Dwarka Tour',
  'Nageshwar Jyotirlinga',
  'Airport Pickup & Drop',
  'Outstation Cab Service',
  'Family & Group Tours',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-white/5" role="contentinfo">
      {/* Gold top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-gold" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Logo size="md" className="mb-5" />
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              Your trusted taxi partner in Dwarka, Gujarat. Serving pilgrims, tourists, and locals since 2014 with safe, comfortable, and affordable taxi services.
            </p>
            <p className="font-heading font-600 text-brand-gold text-sm uppercase tracking-widest mb-4">
              Your trusted taxi partner in Dwarka.
            </p>
            {/* Social quick actions */}
            <div className="flex gap-3">
              <a
                href={buildCallUrl(brand.phones[0])}
                className="w-10 h-10 bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
                aria-label="Call us"
              >
                <Phone size={16} />
              </a>
              <a
                href={buildWhatsAppUrl('Hello Shree Momai Cabs!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600/20 border border-green-600/30 flex items-center justify-center text-green-500 hover:bg-green-600 hover:text-white transition-all duration-200"
                aria-label="WhatsApp us"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={buildMailUrl()}
                className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-200"
                aria-label="Email us"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-700 text-white text-base uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors group font-body text-sm text-left"
                  >
                    <ChevronRight size={14} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-700 text-white text-base uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Popular Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors group font-body text-sm text-left"
                  >
                    <ChevronRight size={14} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors shrink-0" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Destinations */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading font-700 text-white text-base uppercase tracking-widest mb-5 border-b border-white/10 pb-3">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="font-body text-white/50 text-sm">{brand.location}</span>
              </div>
              {brand.phones.map((p) => (
                <a key={p} href={buildCallUrl(p)} className="flex items-start gap-3 group">
                  <Phone size={15} className="text-brand-gold mt-0.5 shrink-0" />
                  <span className="font-body text-white/50 text-sm group-hover:text-brand-gold transition-colors">{p}</span>
                </a>
              ))}
              <a href={buildMailUrl()} className="flex items-start gap-3 group">
                <Mail size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="font-body text-white/50 text-sm group-hover:text-brand-gold transition-colors break-all">{brand.email}</span>
              </a>
            </div>

            <h4 className="font-heading font-700 text-white text-base uppercase tracking-widest mb-3">
              Popular Destinations
            </h4>
            <div className="flex flex-wrap gap-2">
              {destinations.slice(0, 4).map((d) => (
                <span key={d.name} className="bg-white/5 border border-white/10 text-white/50 px-3 py-1 font-body text-xs hover:border-brand-gold/40 hover:text-brand-gold transition-colors cursor-default">
                  {d.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center md:text-left">
            © {year} Shree Momai Cabs, Dwarka, Gujarat. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Built with ❤️ for Dwarka travelers
          </p>
        </div>
      </div>
    </footer>
  )
}
