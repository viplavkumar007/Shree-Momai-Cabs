import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X } from 'lucide-react'
import { brand } from '../../data/siteContent'
import { buildWhatsAppUrl, buildCallUrl } from '../../utils/helpers'

export default function FloatingButtons() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <>
            {/* WhatsApp */}
            <motion.a
              key="wa"
              href={buildWhatsAppUrl('Hello! I want to book a taxi with Shree Momai Cabs.')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0,  scale: 1   }}
              exit={{   opacity: 0, y: 20,  scale: 0.8 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 shadow-xl hover:bg-green-700 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-heading font-600 uppercase tracking-wide whitespace-nowrap">WhatsApp</span>
            </motion.a>

            {/* Call 1 */}
            <motion.a
              key="call1"
              href={buildCallUrl(brand.phones[0])}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0,  scale: 1   }}
              exit={{   opacity: 0, y: 20,  scale: 0.8 }}
              transition={{ delay: 0 }}
              className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2.5 shadow-xl hover:bg-brand-blueLight transition-colors"
              aria-label={`Call ${brand.phones[0]}`}
            >
              <Phone size={18} />
              <span className="text-sm font-heading font-600 uppercase tracking-wide whitespace-nowrap">{brand.phones[0]}</span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.08 }}
        whileTap={{   scale: 0.94 }}
        className="w-14 h-14 bg-brand-gold text-brand-black shadow-2xl flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={24} /></motion.span>
            : <motion.span key="ph" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><Phone size={24} /></motion.span>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
