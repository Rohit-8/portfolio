import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ data, children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const name = data?.profile?.name ?? 'Rohit Raj Yadav'

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Top bar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream-50/85 backdrop-blur-md border-b hairline' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
                {name}
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV.map((item) => (
                <NavItem key={item.to} item={item} />
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center rounded-full bg-ink-900 px-5 py-2 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
              >
                Get in touch
              </Link>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden text-ink-900 p-2"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-cream-50 p-6 pt-24 flex flex-col gap-1 shadow-lift"
            >
              {NAV.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-xl px-4 py-3 text-ink-700 hover:bg-cream-100 hover:text-ink-900 transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <main className="relative z-10 pt-16">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} {name}. Designed & built with care.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={data?.profile?.contact?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink-500 hover:text-accent-600 transition"
            >
              LinkedIn
            </a>
            <a
              href={data?.profile?.contact?.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-500 hover:text-accent-600 transition"
            >
              GitHub
            </a>
            <a
              href={`mailto:${data?.profile?.contact?.email}`}
              className="text-ink-500 hover:text-accent-600 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ item }) {
  const location = useLocation()
  const active =
    item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to)

  return (
    <li>
      <Link
        to={item.to}
        className={`relative text-sm font-medium transition ${
          active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
        }`}
      >
        {item.label}
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
          />
        )}
      </Link>
    </li>
  )
}
