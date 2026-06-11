import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { about } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, stagger, slideLeft, viewportOptions } from '../../utils/motionVariants'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Images ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative flex min-h-[360px] items-center justify-center lg:min-h-[460px]"
          >
            <div className="absolute -top-5 -left-5 h-24 w-24 bg-brand-blue" />
            <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-brand-gold" />

            <div className="relative z-10 flex w-full items-center justify-center border border-gray-100 bg-white px-10 py-16 shadow-2xl">
              <img
                src="/logo.png"
                alt="Shree Momai Cabs"
                className="w-full max-w-[420px] object-contain"
                loading="eager"
              />
            </div>

            <div className="absolute top-0 right-0 w-1.5 h-2/3 bg-brand-gold z-20" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOptions}
              transition={{ delay: 0.5 }}
              className="absolute top-8 -right-6 bg-brand-blue text-white px-5 py-4 shadow-2xl z-30"
            >
              <div className="font-heading font-900 text-4xl text-brand-gold leading-none">10+</div>
              <div className="font-body text-xs uppercase tracking-wider mt-1 text-white/80">Years of Trust</div>
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>About Us</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-900 text-4xl md:text-5xl text-brand-black leading-tight mb-6"
            >
              Feel the Difference with<br />
              <span className="text-brand-blue">Shree Momai Cabs</span>
            </motion.h2>

            {about.body.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-body text-gray-600 leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3">
              {about.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-brand-gold shrink-0" />
                  <span className="font-body text-sm text-gray-700">{feat}</span>
                </div>
              ))}
            </motion.div>

            {/* Angled CTA Strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 bg-brand-blue p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-full bg-brand-gold/20 skew-x-[-20deg] translate-x-4" />
              <p className="font-heading font-700 text-white text-xl mb-3 relative z-10">
                Trusted by 5000+ pilgrims & travelers from across India
              </p>
              <div className="flex gap-4 relative z-10">
                <div className="text-center">
                  <div className="font-heading font-900 text-brand-gold text-2xl">5000+</div>
                  <div className="font-body text-white/60 text-xs">Happy Customers</div>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-heading font-900 text-brand-gold text-2xl">50+</div>
                  <div className="font-body text-white/60 text-xs">Routes Covered</div>
                </div>
                <div className="w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-heading font-900 text-brand-gold text-2xl">24×7</div>
                  <div className="font-body text-white/60 text-xs">Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
