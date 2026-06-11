import React from 'react'
import { motion } from 'framer-motion'
import { Plane, MessageCircle, CheckCircle } from 'lucide-react'
import { airports, brand } from '../../data/siteContent'
import { buildWhatsAppUrl } from '../../utils/helpers'
import { fadeUp, stagger, scaleIn, viewportOptions } from '../../utils/motionVariants'

const AIRPORT_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80'

export default function AirportSection() {
  const waMsg = 'Hello Shree Momai Cabs! I need an airport taxi service. Please share details.'

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={AIRPORT_IMG} alt="Airport" className="w-full h-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-blue/30" />
      </div>

      {/* Gold border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-gold z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-2 font-heading font-600 text-sm uppercase tracking-[0.2em] mb-6">
                <Plane size={14} />
                Airport Transfer
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-900 text-4xl md:text-5xl text-white leading-tight mb-6"
            >
              Airport Pickup &<br />
              <span className="text-brand-gold">Drop Service</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-white/70 leading-relaxed mb-8 text-lg"
            >
              Timely, reliable airport transfers to and from all major airports serving the Dwarka, Saurashtra, and Gujarat region. We track your flight and ensure you're never late.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-10">
              {[
                'Flight tracking for accurate pickup',
                'Experienced drivers, punctual always',
                'Meet & greet at arrival hall',
                'Luggage assistance included',
                'Fixed prices, no hidden charges',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-brand-gold shrink-0" />
                  <span className="font-body text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href={buildWhatsAppUrl(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gold text-brand-black px-8 py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 shadow-xl"
              >
                <MessageCircle size={20} />
                Book Airport Taxi
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Airport Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-2 gap-4"
          >
            {airports.map((ap) => (
              <motion.div
                key={ap.code}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-lg bg-white/5 border border-white/10 p-6 hover:border-brand-gold/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-md bg-brand-blue/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <Plane size={18} className="text-brand-gold" />
                </div>
                <div className="font-heading font-700 text-xl text-white mb-1">{ap.code}</div>
                <div className="font-body text-white/60 text-sm mb-3">{ap.name}</div>
                <div className="inline-block rounded-md bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-3 py-1 font-heading text-xs font-600 uppercase tracking-wide">
                  {ap.dist} away
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
