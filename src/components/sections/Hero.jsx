import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Clock, Shield, Users, Heart } from 'lucide-react'
import { hero, brand } from '../../data/siteContent'
import { buildWhatsAppUrl, buildCallUrl } from '../../utils/helpers'
import { fadeUp, stagger } from '../../utils/motionVariants'

const iconMap = { Clock, Shield, Users, Heart }

const HERO_BG = '/dwarkadhish-main-hero.jpeg'
const HERO_BG_MOBILE = '/dwarkadhish-main-hero.jpeg'

export default function Hero() {
  const waMsg = 'Hello Shree Momai Cabs! I want to book a taxi. Please share details.'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_BG_MOBILE} />
          <img
            src={HERO_BG}
            alt="Taxi journey"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-14 md:pt-36 md:pb-16 lg:pt-32 lg:pb-20 w-full">
        <div className="max-w-2xl">

        {/* Left Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-brand-black/65 border border-brand-gold/50 text-brand-gold px-4 py-2 font-heading font-600 text-xs sm:text-sm uppercase tracking-[0.18em] shadow-lg shadow-brand-black/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-900 text-white leading-[0.94] mb-6 [text-shadow:_0_4px_24px_rgb(0_0_0_/_0.9)]"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">{hero.heading1}</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white [text-shadow:_0_4px_24px_rgb(0_0_0_/_0.9)]">{hero.heading2}</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">{hero.heading3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-white text-base md:text-lg leading-relaxed max-w-xl mb-9 [text-shadow:_0_2px_12px_rgb(0_0_0_/_0.9)]"
          >
            {hero.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9">
            <a
              href={buildWhatsAppUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-gold text-brand-black px-7 py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 shadow-xl shadow-brand-gold/20 hover:shadow-brand-gold/30"
            >
              <MessageCircle size={20} />
              Book Now on WhatsApp
            </a>
            <a
              href={buildCallUrl(brand.phones[0])}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-black/55 border border-white/45 text-white px-7 py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-white hover:text-brand-black active:scale-[0.97] transition-all duration-200 backdrop-blur-sm shadow-lg shadow-brand-black/25"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {hero.highlights.map(({ icon, text }) => {
              const Icon = iconMap[icon]
              return (
                <div key={text} className="flex min-h-12 items-center gap-2.5 rounded-lg bg-brand-black/50 border border-white/25 px-3 py-2.5 backdrop-blur-sm shadow-md shadow-brand-black/20">
                  <div className="w-8 h-8 bg-brand-gold/20 border border-brand-gold/45 flex items-center justify-center shrink-0">
                    {Icon && <Icon size={15} className="text-brand-gold" />}
                  </div>
                  <span className="font-body text-white text-xs leading-snug [text-shadow:_0_1px_8px_rgb(0_0_0_/_0.75)]">{text}</span>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-14"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {hero.stats.map(({ value, label }) => (
              <div key={label} className="rounded-lg border border-white/25 bg-brand-black/45 px-4 py-5 md:px-6 backdrop-blur-md shadow-lg shadow-brand-black/25">
                <span className="font-heading font-900 text-brand-gold text-3xl md:text-4xl leading-none">{value}</span>
                <span className="block font-body text-white text-[11px] md:text-xs mt-2 uppercase tracking-[0.16em]">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
