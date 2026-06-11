import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, stagger, viewportOptions } from '../../utils/motionVariants'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total  = testimonials.length
  const prev   = () => setActive((p) => (p - 1 + total) % total)
  const next   = () => setActive((p) => (p + 1) % total)

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-24 bg-brand-blue overflow-hidden relative">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #F5B400 0px, #F5B400 1px, transparent 1px, transparent 40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel light>Testimonials</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-900 text-4xl md:text-5xl text-white leading-tight">
            What Our Customers Say
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{   opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 p-10 relative"
            >
              <Quote size={48} className="text-brand-gold/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <Stars count={testimonials[active].rating} />
                <p className="font-body text-white/90 text-lg leading-relaxed mt-5 mb-6 italic">
                  "{testimonials[active].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold flex items-center justify-center font-heading font-900 text-brand-black text-xl">
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <div className="font-heading font-700 text-white text-lg">{testimonials[active].name}</div>
                    <div className="font-body text-white/50 text-sm">{testimonials[active].city}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border-2 border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 transition-all duration-300 focus:outline-none ${i === active ? 'w-8 bg-brand-gold' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border-2 border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
