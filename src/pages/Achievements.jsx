import { motion } from 'framer-motion'
import {
  Cloud,
  Brain,
  Sparkles,
  Zap,
  GraduationCap,
  Award,
  Code,
  Trophy,
  Star,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const ICONS = {
  cloud: Cloud,
  brain: Brain,
  sparkles: Sparkles,
  zap: Zap,
  'graduation-cap': GraduationCap,
  award: Award,
  code: Code,
  trophy: Trophy,
  star: Star,
}

export default function Achievements({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <PageHeader
        eyebrow="Achievements"
        title="Milestones & recognition"
        subtitle="Certifications, competitive programming results, and the impact I've made at work."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.achievements.map((a, i) => {
          const Icon = ICONS[a.icon] || Award
          return (
            <Reveal key={a.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-cream-100 p-6 h-full shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{a.title}</h3>
                <p className="text-sm text-ink-500 mt-1">
                  {a.issuer} · {a.year}
                </p>
                <p className="mt-4 text-sm text-ink-700 leading-relaxed">{a.description}</p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>

      {/* Certifications strip */}
      <Reveal delay={0.2}>
        <div className="rounded-2xl bg-cream-100 p-8 mt-10 shadow-soft">
          <h3 className="font-display text-lg text-ink-900 mb-5 flex items-center gap-2">
            <Award size={18} className="text-accent-600" /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-3 rounded-xl bg-cream-50 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Award size={18} />
                </div>
                <div>
                  <div className="font-semibold text-ink-900 text-sm">{cert.title}</div>
                  <div className="text-xs text-ink-500">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
