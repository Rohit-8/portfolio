import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  FileText,
  ArrowRight,
  Calendar,
  Gamepad2,
  Notebook,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const ICONS = {
  'trending-up': TrendingUp,
  'file-text': FileText,
  gamepad: Gamepad2,
  notebook: Notebook,
}

export default function Projects({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        subtitle="A few things I've designed and built. Open any project to read the full case study."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((project, i) => {
          const Icon = ICONS[project.icon] || TrendingUp
          return (
            <Reveal key={project.id} delay={i * 0.1}>
              <Link to={`/projects/${project.id}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-cream-100 p-7 h-full group shadow-soft"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs text-ink-500 flex items-center gap-1">
                      <Calendar size={12} /> {project.period}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                    {project.name}
                  </h3>
                  <p className="text-sm text-accent-600">{project.subtitle}</p>
                  <p className="mt-3 text-ink-500 text-sm">{project.tagline}</p>

                  {/* metrics */}
                  <div className="mt-5 flex gap-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-xl text-ink-900">{m.value}</div>
                        <div className="text-[11px] text-ink-500 uppercase tracking-wide">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream-50 border hairline px-3 py-1 text-xs text-ink-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-ink-700 group-hover:text-accent-600 transition">
                    Read case study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
