import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { buildWhatsAppUrl, buildCallUrl, buildMailUrl } from '../../utils/helpers'
import { fadeUp, stagger, scaleIn, viewportOptions } from '../../utils/motionVariants'

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    lines: brand.phones,
    href: () => buildCallUrl(brand.phones[0]),
    btnLabel: 'Call Now',
    color: 'blue',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: [brand.phones[0], '24×7 Available'],
    href: () => buildWhatsAppUrl('Hello Shree Momai Cabs! I want to know more about your taxi services.'),
    btnLabel: 'WhatsApp Now',
    color: 'gold',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: [brand.email],
    href: () => buildMailUrl(),
    btnLabel: 'Send Email',
    color: 'blue',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    lines: ['Dwarka, Gujarat', 'India'],
    href: () => 'https://maps.google.com/?q=Dwarka+Gujarat+India',
    btnLabel: 'View on Map',
    color: 'gold',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Contact Us</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading font-900 text-4xl md:text-5xl text-brand-black leading-tight">
            Get in Touch with<br /><span className="text-brand-blue">Shree Momai Cabs</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
            We're available 24×7 to help you plan your journey. Reach out via phone, WhatsApp, or email.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {contactCards.map(({ icon: Icon, label, lines, href, btnLabel, color }) => (
            <motion.div
              key={label}
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 shadow-sm p-7 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center ${color === 'gold' ? 'bg-brand-gold/10 group-hover:bg-brand-gold' : 'bg-brand-blue/8 group-hover:bg-brand-blue'} transition-colors duration-300`}>
                <Icon size={24} className={`${color === 'gold' ? 'text-brand-gold group-hover:text-brand-black' : 'text-brand-blue group-hover:text-white'} transition-colors duration-300`} />
              </div>
              <div className="font-heading font-700 text-sm uppercase tracking-widest text-gray-400 mb-2">{label}</div>
              {lines.map((l, i) => (
                <div key={i} className="font-body text-brand-black text-sm font-500 mb-1">{l}</div>
              ))}
              <a
                href={href()}
                target={label !== 'Call Us' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 font-heading font-700 text-xs uppercase tracking-wide transition-all duration-200 active:scale-[0.97] ${color === 'gold' ? 'bg-brand-gold text-brand-black hover:bg-brand-goldDark' : 'bg-brand-blue text-white hover:bg-brand-blueLight'}`}
              >
                {btnLabel}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="bg-brand-blue p-6 flex flex-wrap gap-6 items-center justify-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Clock size={22} className="text-brand-gold" />
            <span className="font-heading font-700 text-white text-lg uppercase tracking-wide">
              Available 24 Hours, 7 Days a Week, 365 Days a Year
            </span>
          </div>
          <a
            href={buildWhatsAppUrl('Hello Shree Momai Cabs! I need to book a taxi urgently.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-gold text-brand-black px-7 py-3 font-heading font-700 text-sm uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 shadow-lg"
          >
            <MessageCircle size={18} />
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
