import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import {
  TrendingUp,
  FileText,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Cpu,
  Gamepad2,
  Notebook,
} from 'lucide-react'
import Reveal from '../components/Reveal'

const ICONS = {
  'trending-up': TrendingUp,
  'file-text': FileText,
  gamepad: Gamepad2,
  notebook: Notebook,
}

export default function ProjectDetail({ data }) {
  const { id } = useParams()
  const project = data.projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl text-ink-900 mb-4">Project not found</h1>
        <p className="text-ink-500 mb-8">
          The project you are looking for does not exist.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-ink-800"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </section>
    )
  }

  const Icon = ICONS[project.icon] || TrendingUp

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* Back link */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-600 transition mb-8"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Header */}
      <Reveal>
        <div className="rounded-3xl bg-cream-100 p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <Icon size={30} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold text-ink-900">
                {project.name}
              </h1>
              <p className="text-accent-600">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 text-ink-500 flex items-center gap-2 text-sm">
            <Calendar size={14} /> {project.period}
          </p>

          <p className="mt-6 text-ink-700 leading-relaxed">{project.description}</p>

          {/* metrics */}
          <div className="mt-6 flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl text-ink-900">{m.value}</div>
                <div className="text-xs text-ink-500 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Highlights */}
      <Reveal delay={0.1}>
        <div className="rounded-3xl bg-cream-100 p-8 mt-8 shadow-soft">
          <h2 className="font-display text-xl text-ink-900 mb-5">Key Highlights</h2>
          <ul className="space-y-4">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 text-ink-700"
              >
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent-600" />
                <span className="leading-relaxed">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Tech stack */}
      <Reveal delay={0.2}>
        <div className="rounded-3xl bg-cream-100 p-8 mt-8 shadow-soft">
          <h2 className="font-display text-xl text-ink-900 mb-5 flex items-center gap-2">
            <Cpu size={18} className="text-accent-600" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-cream-50 border hairline px-4 py-2 text-sm text-ink-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
