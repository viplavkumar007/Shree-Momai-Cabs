import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Send, CheckCircle } from 'lucide-react'
import { bookingFormServices, brand } from '../../data/siteContent'
import { buildBookingWhatsApp, buildCallUrl } from '../../utils/helpers'
import { fadeUp, stagger, slideLeft, slideRight, viewportOptions } from '../../utils/motionVariants'

const empty = { name: '', phone: '', pickup: '', drop: '', date: '', service: '' }
const required = Object.keys(empty)

function FieldError({ msg }) {
  return msg ? <span className="text-red-400 text-xs mt-1 font-body">{msg}</span> : null
}

export default function BookingCTA() {
  const [form,    setForm]    = useState(empty)
  const [errors,  setErrors]  = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!/^\+?[\d\s\-]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.pickup.trim())  e.pickup  = 'Pickup location is required'
    if (!form.drop.trim())    e.drop    = 'Drop location is required'
    if (!form.date)           e.date    = 'Travel date is required'
    if (!form.service)        e.service = 'Please select a service'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    window.open(buildBookingWhatsApp(form), '_blank', 'noopener,noreferrer')
    setSuccess(true)
    setTimeout(() => { setForm(empty); setSuccess(false) }, 5000)
  }

  const inputCls = (field) =>
    `w-full bg-white/5 border ${errors[field] ? 'border-red-500' : 'border-white/15'} text-white placeholder-white/30 px-4 py-3.5 font-body text-sm focus:outline-none focus:border-brand-gold focus:bg-white/8 transition-all duration-200`

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Diagonal gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold z-10" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #1B3A8C 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-2 font-heading font-600 text-sm uppercase tracking-[0.2em] mb-6">
                <MessageCircle size={14} />
                Quick Booking
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading font-900 text-4xl md:text-5xl text-white leading-tight mb-6">
              Book Your<br />
              <span className="text-brand-gold">Ride Now!</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-white/60 leading-relaxed mb-10 text-lg">
              Fill in your journey details and send it directly to our WhatsApp. We'll confirm your booking within minutes.
            </motion.p>

            {/* Contact Quick Links */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {brand.phones.map((p) => (
                <a
                  key={p}
                  href={buildCallUrl(p)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-blue flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <Phone size={18} className="text-white group-hover:text-brand-black transition-colors" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-widest">Call Us</div>
                    <div className="font-heading font-700 text-white text-lg group-hover:text-brand-gold transition-colors">{p}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-blue/20 border border-brand-gold/30 p-12 text-center"
              >
                <CheckCircle size={52} className="text-brand-gold mx-auto mb-4" />
                <h3 className="font-heading font-800 text-2xl text-white mb-3">Booking Sent!</h3>
                <p className="font-body text-white/70">Your enquiry has been sent via WhatsApp. We'll confirm shortly.</p>
              </motion.div>
            ) : (
              <div className="bg-brand-charcoal/60 border border-white/10 p-8">
                <h3 className="font-heading font-700 text-xl text-white mb-6 uppercase tracking-wide border-b border-white/10 pb-4">
                  Send Booking Enquiry
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name *"
                      className={inputCls('name')}
                      aria-label="Your name"
                    />
                    <FieldError msg={errors.name} />
                  </div>
                  <div>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      type="tel"
                      className={inputCls('phone')}
                      aria-label="Phone number"
                    />
                    <FieldError msg={errors.phone} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      placeholder="Pickup Location *"
                      className={inputCls('pickup')}
                      aria-label="Pickup location"
                    />
                    <FieldError msg={errors.pickup} />
                  </div>
                  <div>
                    <input
                      name="drop"
                      value={form.drop}
                      onChange={handleChange}
                      placeholder="Drop Location *"
                      className={inputCls('drop')}
                      aria-label="Drop location"
                    />
                    <FieldError msg={errors.drop} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className={`${inputCls('date')} [color-scheme:dark]`}
                      aria-label="Travel date"
                    />
                    <FieldError msg={errors.date} />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputCls('service')} [&>option]:bg-brand-charcoal`}
                      aria-label="Service type"
                    >
                      <option value="">Select Service *</option>
                      {bookingFormServices.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <FieldError msg={errors.service} />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-black py-4 font-heading font-700 text-base uppercase tracking-wide hover:bg-brand-goldDark active:scale-[0.98] transition-all duration-200 mt-2 shadow-lg hover:shadow-brand-gold/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                >
                  <MessageCircle size={20} />
                  Send Enquiry on WhatsApp
                </button>

                <p className="font-body text-white/30 text-xs text-center mt-4">
                  By submitting, you'll be redirected to WhatsApp to complete your booking.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
