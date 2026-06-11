import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Star, Waves, Flower, RefreshCw, Plane,
  Train, Navigation, Users, Building, Clock, MessageCircle,
  Anchor,
} from 'lucide-react'
import { services, brand } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { buildWhatsAppUrl } from '../../utils/helpers'
import { fadeUp, stagger, scaleIn, viewportOptions } from '../../utils/motionVariants'

const iconMap = {
  MapPin, Star, Waves, Flower, RefreshCw, Plane,
  Train, Navigation, Users, Building, Clock, Anchor,
  Temple: MapPin,
  Bridge: Waves,
}

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || MapPin
  const waMsg = `Hello! I want to book: ${service.title}. Please share the details and pricing.`

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-lg border border-brand-blue/10 bg-white shadow-md shadow-brand-blue/5 hover:border-brand-gold/50 hover:shadow-2xl hover:shadow-brand-blue/15 transition-all duration-300 flex flex-col"
    >
      {/* Color top bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-blue via-brand-gold to-[#25D366]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-brand-blue/10 via-brand-gold/10 to-[#25D366]/10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-12 h-12 rounded-md bg-brand-blue text-white border border-brand-blue/20 flex items-center justify-center mb-4 shadow-lg shadow-brand-blue/20 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold transition-colors duration-300">
          <Icon size={22} className="transition-colors duration-300" />
        </div>

        {/* Number */}
        <span className="absolute right-5 top-7 font-heading font-900 text-6xl text-brand-blue/10 group-hover:text-brand-gold/20 leading-none select-none transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="relative font-heading font-700 text-lg text-brand-black leading-tight mb-2 pr-12">
          {service.title}
        </h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-5">
          {service.desc}
        </p>

        <a
          href={buildWhatsAppUrl(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-brand-gold text-brand-black px-4 py-2.5 font-heading font-700 text-xs uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 w-full justify-center shadow-md shadow-brand-gold/20"
        >
          <MessageCircle size={14} />
          Book Now
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray overflow-hidden">
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
            <SectionLabel>Our Services</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-900 text-4xl md:text-5xl text-brand-black leading-tight"
          >
            Start Your Journey with<br />
            <span className="text-brand-blue">Shree Momai Cabs</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-gray-500 mt-4 max-w-xl mx-auto"
          >
            From sacred temple darshan to scenic beach tours — we cover every route in and around Dwarka.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5"
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
