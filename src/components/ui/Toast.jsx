import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ toasts, dismiss }) {
  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} dismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, dismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => dismiss(toast.id), 4500)
    return () => clearTimeout(timer)
  }, [toast.id, dismiss])

  const isSuccess = toast.type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{   opacity: 0, x: 80, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`
        flex items-start gap-3 px-5 py-4 rounded-none shadow-2xl min-w-[280px] max-w-sm
        ${isSuccess ? 'bg-brand-blue border-l-4 border-brand-gold' : 'bg-red-800 border-l-4 border-red-400'}
        text-white
      `}
      role="alert"
    >
      {isSuccess
        ? <CheckCircle className="text-brand-gold mt-0.5 shrink-0" size={20} />
        : <XCircle    className="text-red-400 mt-0.5 shrink-0"      size={20} />
      }
      <p className="text-sm font-body flex-1">{toast.message}</p>
      <button
        onClick={() => dismiss(toast.id)}
        className="text-white/60 hover:text-white transition-colors shrink-0"
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </motion.div>
  )
}
