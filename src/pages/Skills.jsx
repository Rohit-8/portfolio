import { motion } from 'framer-motion'
import {
  Code,
  Server,
  Layout,
  Database,
  Cloud,
  Brain,
  Sparkles,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const ICONS = {
  code: Code,
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
  brain: Brain,
}

export default function Skills({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        subtitle="A snapshot of the tools and technologies I use across backend, frontend, data and AI."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((cat, i) => {
          const Icon = ICONS[cat.icon] || Sparkles
          return (
            <Reveal key={cat.category} delay={i * 0.08}>
              <div className="rounded-2xl bg-cream-100 p-6 h-full shadow-soft">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.items.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={j * 0.06}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-ink-700">{name}</span>
        <span className="text-xs text-ink-500">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-cream-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-accent-500"
        />
      </div>
    </div>
  )
}
