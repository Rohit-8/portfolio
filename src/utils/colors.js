// Single, premium accent palette. Every "color" value in data.json maps to
// this refined terracotta/clay accent so the whole site stays cohesive and
// never looks like a rainbow of neon gradients.

const ACCENT = {
  hex: '#b45309',
  text: 'text-accent-600',
  border: 'border-accent-200',
  bg: 'bg-accent-50',
  ring: 'ring-accent-200',
  from: 'from-accent-500',
  to: 'to-accent-500',
}

export function getColor() {
  return ACCENT
}
