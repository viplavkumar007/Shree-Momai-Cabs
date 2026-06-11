import React, { useState, useCallback } from 'react'
import Navbar         from './components/layout/Navbar'
import Footer         from './components/layout/Footer'
import Hero           from './components/sections/Hero'
import About          from './components/sections/About'
import Services       from './components/sections/Services'
import Fleet          from './components/sections/Fleet'
import AirportSection from './components/sections/AirportSection'
import Destinations   from './components/sections/Destinations'
import Testimonials   from './components/sections/Testimonials'
import FAQ            from './components/sections/FAQ'
import BookingCTA     from './components/sections/BookingCTA'
import Contact        from './components/sections/Contact'
import FloatingButtons from './components/ui/FloatingButtons'
import Toast          from './components/ui/Toast'

export default function App() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts((p) => [...p, { id, message, type }])
  }, [])

  const dismissToast = useCallback((id) => {
    setToasts((p) => p.filter((t) => t.id !== id))
  }, [])

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <AirportSection />
        <Fleet />
        <Destinations />
        <Testimonials />
        <BookingCTA />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
      <Toast toasts={toasts} dismiss={dismissToast} />
    </>
  )
}
