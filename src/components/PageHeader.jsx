import { motion } from 'framer-motion'

/**
 * A refined, editorial page header.
 * `eyebrow` is a small kicker above the title; `title` is the serif heading;
 * `subtitle` is a supporting line.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent-600 mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink-900 tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-ink-500 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
