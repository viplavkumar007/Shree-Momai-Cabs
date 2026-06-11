import { brand } from '../data/siteContent'

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${brand.whatsapp}?text=${encoded}`
}

export function buildCallUrl(phone) {
  const clean = phone.replace(/\s/g, '')
  return `tel:${clean}`
}

export function buildMailUrl() {
  return `mailto:${brand.email}`
}

export function buildBookingWhatsApp(data) {
  const msg =
    `Hello Shree Momai Cabs! I want to book a taxi.\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Pickup: ${data.pickup}\n` +
    `Drop: ${data.drop}\n` +
    `Date: ${data.date}\n` +
    `Service: ${data.service}\n\n` +
    `Please confirm my booking. Thank you!`
  return buildWhatsAppUrl(msg)
}

export function scrollTo(id) {
  const el = document.getElementById(id.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
