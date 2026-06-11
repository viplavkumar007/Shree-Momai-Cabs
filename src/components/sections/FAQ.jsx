import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, stagger, viewportOptions } from '../../utils/motionVariants'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-lg border border-gray-200"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left bg-white hover:bg-brand-gray transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <div className="flex items-start gap-4">
          <span className="font-heading font-800 text-brand-gold text-xl shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-heading font-700 text-lg text-brand-black leading-snug">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown size={20} className={isOpen ? 'text-brand-blue' : 'text-gray-400'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[4.5rem] bg-white border-t border-gray-100">
              <p className="font-body text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>FAQ</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-900 text-4xl md:text-5xl text-brand-black leading-tight">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 mt-4">
            Everything you need to know before booking with Shree Momai Cabs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
