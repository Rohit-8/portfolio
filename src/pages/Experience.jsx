import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function Experience({ data }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <PageHeader
        eyebrow="Experience"
        title="My journey"
        subtitle="The roles and teams I've worked with, and the impact I've made along the way."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-cream-200" />

        <div className="space-y-10">
          {data.experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1}>
              <div className="relative pl-8">
                {/* Node */}
                <div className="absolute left-0 top-1 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-accent-500 ring-4 ring-cream-50" />
                </div>

                <div className="rounded-2xl bg-cream-100 p-7 shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink-900">
                      {job.role}
                    </h3>
                    <span className="text-sm text-ink-500">{job.period}</span>
                  </div>
                  <p className="text-accent-600 font-medium">{job.company}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {job.duration}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.achievements.map((a, idx) => (
                      <li key={idx} className="flex gap-3 text-ink-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-600" />
                        <span className="text-sm leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream-50 border hairline px-3 py-1 text-xs text-ink-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
