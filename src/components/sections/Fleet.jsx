import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Car, Users, Wind } from 'lucide-react'
import { fleet } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { buildWhatsAppUrl } from '../../utils/helpers'
import { fadeUp, stagger, scaleIn, viewportOptions } from '../../utils/motionVariants'

function FleetCard({ vehicle }) {
  const waMsg = `Hello Shree Momai Cabs! I want to book a ${vehicle.name} (${vehicle.capacity}). Please share availability and pricing.`

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />

        {/* Badge */}
        {vehicle.badge && (
          <div className="absolute top-4 left-4 bg-brand-gold text-brand-black px-3 py-1 font-heading font-700 text-xs uppercase tracking-wide">
            {vehicle.badge}
          </div>
        )}

        {/* Type chip */}
        <div className="absolute bottom-4 right-4 bg-brand-blue/90 text-white px-3 py-1 font-heading text-xs font-600 uppercase">
          {vehicle.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-heading font-800 text-2xl text-brand-black">{vehicle.name}</h3>
          <div className="flex items-center gap-1 text-brand-blue">
            <Users size={14} />
            <span className="font-body text-xs text-gray-500">{vehicle.capacity}</span>
          </div>
        </div>

        {/* AC indicator */}
        <div className="flex items-center gap-1.5 mb-4">
          <Wind size={12} className="text-brand-gold" />
          <span className="font-body text-xs text-brand-gold font-600">AC Vehicle</span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2 mb-6">
          {vehicle.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle size={13} className="text-brand-gold shrink-0" />
              <span className="font-body text-sm text-gray-600">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppUrl(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-blue text-white px-4 py-3 font-heading font-700 text-sm uppercase tracking-wide hover:bg-brand-blueLight active:scale-[0.97] transition-all duration-200 w-full justify-center"
        >
          <MessageCircle size={16} />
          Book This Vehicle
        </a>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-brand-gray overflow-hidden">
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
            <SectionLabel>Our Fleet</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-900 text-4xl md:text-5xl text-brand-black leading-tight"
          >
            Our Premium <span className="text-brand-blue">Taxi Fleet</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
            All vehicles are well-maintained, air-conditioned, and driven by professional, licensed drivers with deep knowledge of the region.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fleet.map((v) => (
            <FleetCard key={v.name} vehicle={v} />
          ))}
        </motion.div>

        {/* Bottom assurance bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-16 bg-brand-blue p-8 flex flex-wrap justify-center gap-8 items-center"
        >
          {[
            { icon: <Wind size={20} />,    text: 'All AC Vehicles'       },
            { icon: <CheckCircle size={20} />, text: 'Sanitized & Clean' },
            { icon: <Car size={20} />,     text: 'GPS Tracked'           },
            { icon: <Users size={20} />,   text: 'Licensed Drivers'      },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-white">
              <div className="text-brand-gold">{icon}</div>
              <span className="font-heading font-600 text-base uppercase tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
