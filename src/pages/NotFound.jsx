import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="font-display text-8xl font-semibold text-ink-900"
      >
        404
      </motion.h1>
      <p className="mt-4 text-ink-500 text-lg">
        This page doesn't exist. The page you're looking for is missing.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 font-medium text-cream-50 transition hover:bg-ink-800"
        >
          <Home size={18} /> Back to Home
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 font-medium text-ink-800 transition hover:bg-cream-100"
        >
          View Projects
        </Link>
      </div>
    </section>
  )
}
