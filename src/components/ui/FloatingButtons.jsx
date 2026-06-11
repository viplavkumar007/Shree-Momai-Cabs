import React from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '../../utils/helpers'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingButtons() {
  return (
    <motion.a
      href={buildWhatsAppUrl('Hello! I want to book a taxi with Shree Momai Cabs.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white shadow-2xl flex items-center justify-center rounded-full hover:bg-[#1EBE5D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={34} />
    </motion.a>
  )
}
