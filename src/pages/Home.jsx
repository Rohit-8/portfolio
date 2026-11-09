import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Rocket,
  Cpu,
  Award,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'

const ICONS = { clock: Clock, rocket: Rocket, cpu: Cpu, award: Award }

export default function Home({ data }) {
  const p = data.profile

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border hairline px-4 py-1.5 text-sm text-ink-600">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {p.availability}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-ink-900 leading-[1.05] tracking-tight">
                {p.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-xl sm:text-2xl text-ink-700 font-medium">
                {p.title} — {p.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-ink-500 leading-relaxed">{p.summary}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 font-medium text-cream-50 transition hover:bg-ink-800"
                >
                  View my work
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-3.5 font-medium text-ink-800 transition hover:bg-cream-100"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Portrait / monogram card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[4/5] rounded-3xl bg-cream-100 shadow-lift flex items-center justify-center overflow-hidden">
                  <span className="font-display text-[9rem] leading-none text-ink-900/90 select-none">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-cream-50 rounded-2xl shadow-soft px-5 py-4 border hairline">
                  <div className="font-display text-2xl text-ink-900">{p.stats[0]?.value}</div>
                  <div className="text-xs text-ink-500">{p.stats[0]?.label}</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent-500 text-cream-50 rounded-2xl px-4 py-3 shadow-soft">
                  <div className="text-xs uppercase tracking-wide">Based in</div>
                  <div className="text-sm font-medium flex items-center gap-1">
                    <MapPin size={13} /> {p.location}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {p.stats.map((s, i) => {
            const Icon = ICONS[s.icon] || Award
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <Icon className="mx-auto sm:mx-0 mb-3 text-accent-600" size={22} />
                  <div className="font-display text-3xl text-ink-900">{s.value}</div>
                  <div className="text-sm text-ink-500 mt-1">{s.label}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-600 mb-4">
                About
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
                A little about me
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="text-lg text-ink-700 leading-relaxed">{p.summary}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {data.skills.slice(0, 3).map((cat) => (
                  <div key={cat.category} className="rounded-2xl bg-cream-100 p-6">
                    <h3 className="font-display text-lg text-ink-900">{cat.category}</h3>
                    <p className="mt-2 text-sm text-ink-500">
                      {cat.items.slice(0, 4).map((i) => i.name).join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS CAROUSEL ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-600 mb-4">
                Selected work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
                Featured projects
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-accent-600 transition"
            >
              All projects <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Carousel
            slides={data.projects.map((project) => (
              <ProjectSlide key={project.id} project={project} />
            ))}
          />
        </Reveal>
      </section>

      {/* ---------- EXPERIENCE PREVIEW ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-600 mb-4">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mb-10">
            Where I've worked
          </h2>
        </Reveal>
        <div className="space-y-6">
          {data.experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <div className="rounded-2xl bg-cream-100 p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-ink-900">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-ink-500">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-500">
                  {job.location} · {job.duration}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.achievements.slice(0, 3).map((a, idx) => (
                    <li key={idx} className="flex gap-3 text-ink-700">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-600" />
                      <span className="text-sm leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- ACHIEVEMENTS PREVIEW ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-600 mb-4">
            Achievements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mb-10">
            Milestones & recognition
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.achievements.slice(0, 6).map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <div className="rounded-2xl bg-cream-100 p-6 h-full">
                <h3 className="font-display text-lg text-ink-900">{a.title}</h3>
                <p className="text-sm text-ink-500 mt-1">
                  {a.issuer} · {a.year}
                </p>
                <p className="mt-4 text-sm text-ink-700 leading-relaxed">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-ink-900 px-8 py-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream-50">
              Let's build something great together
            </h2>
            <p className="mt-4 text-cream-200 max-w-xl mx-auto">
              I'm open to new opportunities and collaborations. Whether it's a role, a
              project, or just a conversation — I'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 font-medium text-ink-900 transition hover:bg-cream-100"
              >
                Get in touch <ArrowRight size={18} />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-7 py-3.5 font-medium text-cream-50 transition hover:bg-cream-50/10"
              >
                See my journey
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

function ProjectSlide({ project }) {
  return (
    <div className="h-full p-8 sm:p-12 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-600">
          {project.subtitle}
        </span>
      </div>
      <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
        {project.name}
      </h3>
      <p className="mt-4 text-ink-600 max-w-2xl leading-relaxed">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full bg-cream-50 border hairline px-3 py-1 text-xs text-ink-700"
          >
            {t}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:gap-2 transition-all"
      >
        Read the case study <ArrowUpRight size={16} />
      </Link>
    </div>
  )
}
