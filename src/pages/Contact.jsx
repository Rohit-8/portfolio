import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

export default function Contact({ data }) {
  const p = data.profile
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    // Open the user's mail client with a pre-filled message
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${p.contact.email}?subject=${subject}&body=${body}`
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: p.contact.email, href: `mailto:${p.contact.email}` },
    { icon: Phone, label: 'Phone', value: p.contact.phone, href: `tel:${p.contact.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: p.contact.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my code', href: p.contact.github },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        subtitle="Have a role, a project, or just want to say hi? I'd love to hear from you."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact info */}
        <Reveal>
          <div className="space-y-4">
            {contactItems.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl bg-cream-100 p-5 shadow-soft transition hover:bg-cream-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-xs text-ink-500 uppercase tracking-wide">{c.label}</div>
                  <div className="text-ink-900 font-medium">{c.value}</div>
                </div>
              </motion.a>
            ))}
            <div className="rounded-2xl bg-cream-100 p-5 text-center shadow-soft">
              <p className="text-ink-500 text-sm">Based in</p>
              <p className="text-ink-900 font-semibold">{p.location}</p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-cream-100 p-8 shadow-soft">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle2 size={56} className="mx-auto text-accent-600 mb-4" />
                  <h3 className="font-display text-2xl text-ink-900">Message sent!</h3>
                  <p className="text-ink-500 mt-2">
                    Your mail client should have opened. Thanks for reaching out!
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border hairline px-6 py-2 text-ink-800"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@example.com"
                  />
                  <div>
                    <label className="block text-sm text-ink-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the opportunity..."
                      className="w-full rounded-xl bg-cream-50 border hairline px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-accent-500 focus:outline-none transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 font-medium text-cream-50 transition hover:bg-ink-800"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label className="block text-sm text-ink-700 mb-2">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-cream-50 border hairline px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-accent-500 focus:outline-none transition"
      />
    </div>
  )
}
