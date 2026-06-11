import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock, Shield, Users, Heart } from 'lucide-react'
import { hero, brand } from '../../data/siteContent'
import { buildWhatsAppUrl, buildCallUrl } from '../../utils/helpers'
import { fadeUp, stagger, slideLeft, slideRight } from '../../utils/motionVariants'

const iconMap = { Clock, Shield, Users, Heart }

const HERO_BG = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800&q=80'
const CAR_IMG = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80'

export default function Hero() {
  const waMsg = 'Hello Shree Momai Cabs! I want to book a taxi. Please share details.'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      aria-label="Hero section"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Taxi journey"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal/95 to-brand-blue/40" />
      </div>

      {/* Diagonal Gold Stripe */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-[0.04]"
        style={{ background: 'linear-gradient(135deg, transparent 50%, #F5B400 50%)' }}
      />

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold z-10" />

      {/* Blue Left Accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-brand-gold via-brand-blue to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-24 lg:py-20 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* ── Left Content ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-2 font-heading font-600 text-sm uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-900 text-white leading-[0.95] mb-6"
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{hero.heading1}</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-gold text-shadow-gold">{hero.heading2}</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{hero.heading3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-white/70 text-base md:text-lg leading-relaxed max-w-lg mb-8"
          >
            {hero.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            <a
              href={buildWhatsAppUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-gold text-brand-black px-7 py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 shadow-xl hover:shadow-brand-gold/20"
            >
              <MessageCircle size={20} />
              Book Now on WhatsApp
            </a>
            <a
              href={buildCallUrl(brand.phones[0])}
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-7 py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-white hover:text-brand-black active:scale-[0.97] transition-all duration-200"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hero.highlights.map(({ icon, text }) => {
              const Icon = iconMap[icon]
              return (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                    {Icon && <Icon size={15} className="text-brand-gold" />}
                  </div>
                  <span className="font-body text-white/70 text-xs">{text}</span>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* ── Right Visual ── */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-3xl scale-75" />

          {/* Card frame */}
          <div className="relative w-full max-w-lg">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-brand-gold z-20" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-brand-gold z-20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-brand-gold z-20" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-brand-gold z-20" />

            <img
              src={CAR_IMG}
              alt="Premium taxi cab"
              className="w-full h-80 object-cover grayscale-[20%]"
              loading="eager"
            />

            {/* Overlay badge */}
            <div className="absolute -bottom-5 -right-5 bg-brand-gold text-brand-black px-6 py-4 shadow-2xl z-20">
              <div className="font-heading font-900 text-3xl leading-none">10+</div>
              <div className="font-body text-xs font-600 uppercase tracking-wide mt-1">Years Service</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 hidden md:block"
      >
        <div className="bg-brand-blue/90 backdrop-blur-sm border-t border-brand-gold/20 max-w-7xl mx-auto">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {hero.stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center py-5 px-4">
                <span className="font-heading font-900 text-brand-gold text-3xl leading-none">{value}</span>
                <span className="font-body text-white/60 text-xs mt-1 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
