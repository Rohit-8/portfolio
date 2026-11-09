import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * A refined, minimal carousel. Auto-advances, supports manual prev/next
 * and dot navigation. Renders a single slide at a time with a soft
 * cross-fade + slide transition.
 */
export default function Carousel({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + slides.length) % slides.length)
    },
    [slides.length],
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), interval)
    return () => clearInterval(id)
  }, [go, interval, paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-cream-100 shadow-soft min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 backdrop-blur text-ink-800 shadow-soft hover:bg-cream-50 transition"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 backdrop-blur text-ink-800 shadow-soft hover:bg-cream-50 transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-accent-500' : 'w-1.5 bg-ink-300 hover:bg-ink-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
