// A calm, premium background: a soft warm wash with a very subtle radial
// highlight. No particles, no neon, no grid — just a refined, editorial feel.
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#f4f1ec_0%,#faf8f5_55%)]" />
    </div>
  )
}
