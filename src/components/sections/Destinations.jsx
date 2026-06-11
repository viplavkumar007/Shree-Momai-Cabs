import React from 'react'
import { motion } from 'framer-motion'
import { Navigation, MessageCircle, MapPin } from 'lucide-react'
import { destinations } from '../../data/siteContent'
import SectionLabel from '../ui/SectionLabel'
import { buildWhatsAppUrl } from '../../utils/helpers'
import { fadeUp, stagger, scaleIn, viewportOptions } from '../../utils/motionVariants'

function DestCard({ dest }) {
  const waMsg = `Hello Shree Momai Cabs! I want to enquire about a taxi trip to ${dest.name} from Dwarka (${dest.dist}). Please share the fare.`

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden bg-brand-charcoal shadow-lg"
    >
      {/* Image */}
      <div className="overflow-hidden h-48">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
      </div>

      {/* Distance badge */}
      <div className="absolute top-4 right-4 bg-brand-gold text-brand-black px-3 py-1 font-heading font-700 text-xs uppercase">
        {dest.dist}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={14} className="text-brand-gold" />
          <h3 className="font-heading font-700 text-xl text-white">{dest.name}</h3>
        </div>
        <p className="font-body text-white/60 text-sm mb-4 leading-relaxed">{dest.desc}</p>
        <a
          href={buildWhatsAppUrl(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-brand-gold text-brand-black px-4 py-2.5 font-heading font-700 text-xs uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.97] transition-all duration-200 w-full justify-center"
        >
          <MessageCircle size={14} />
          Enquire Now
        </a>
      </div>
    </motion.div>
  )
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-brand-charcoal overflow-hidden">
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
            <SectionLabel light>Outstation Cabs</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-900 text-4xl md:text-5xl text-white leading-tight"
          >
            Outstation Taxi Service<br />
            <span className="text-brand-gold">from Dwarka</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-white/60 mt-4 max-w-xl mx-auto">
            Well-maintained AC vehicles with experienced drivers for comfortable long-distance journeys across Gujarat and beyond.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {destinations.map((d) => (
            <DestCard key={d.name} dest={d} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
