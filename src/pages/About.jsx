import { MapPin, Mail, Phone, Linkedin, Github, GraduationCap } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function About({ data }) {
  const p = data.profile
  const edu = data.education

  const contactItems = [
    { icon: Mail, label: 'Email', value: p.contact.email, href: `mailto:${p.contact.email}` },
    { icon: Phone, label: 'Phone', value: p.contact.phone, href: `tel:${p.contact.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: p.contact.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my code', href: p.contact.github },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <PageHeader eyebrow="About" title="A bit about me" />

      <div className="grid md:grid-cols-5 gap-8">
        {/* Left: profile card */}
        <Reveal className="md:col-span-2">
          <div className="rounded-3xl bg-cream-100 p-8 text-center shadow-soft">
            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-ink-900 font-display text-4xl text-cream-50">
              {p.name.charAt(0)}
            </div>
            <h2 className="font-display text-2xl font-semibold text-ink-900">{p.name}</h2>
            <p className="text-accent-600 mt-1">{p.title}</p>
            <p className="text-ink-500 mt-1 text-sm">{p.tagline}</p>

            <div className="mt-6 flex items-center justify-center gap-2 text-ink-600 text-sm">
              <MapPin size={16} className="text-accent-600" />
              {p.location}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {p.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-cream-50 p-3">
                  <div className="font-display text-xl text-ink-900">{s.value}</div>
                  <div className="text-[11px] text-ink-500 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: summary + education + contact */}
        <div className="md:col-span-3 space-y-8">
          <Reveal>
            <div className="rounded-3xl bg-cream-100 p-8 shadow-soft">
              <h3 className="font-display text-lg text-ink-900 mb-4">Summary</h3>
              <p className="text-ink-700 leading-relaxed">{p.summary}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-cream-100 p-8 shadow-soft">
              <h3 className="font-display text-lg text-ink-900 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-accent-600" />
                Education
              </h3>
              <div className="space-y-1">
                <p className="font-semibold text-ink-900">{edu.institution}</p>
                <p className="text-ink-700">
                  {edu.degree} · {edu.field}
                </p>
                <p className="text-ink-500 text-sm">
                  {edu.period} · GPA {edu.gpa}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-cream-100 p-8 shadow-soft">
              <h3 className="font-display text-lg text-ink-900 mb-4">Connect</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {contactItems.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-cream-50 p-4 transition hover:bg-cream-100"
                  >
                    <c.icon size={18} className="text-accent-600" />
                    <div>
                      <div className="text-xs text-ink-500">{c.label}</div>
                      <div className="text-sm text-ink-900">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
