import { useState, useEffect } from 'react'

export function useScrollSpy(ids, offset = 80) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset + 10
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [ids, offset])

  return active
}
