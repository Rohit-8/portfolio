import confetti from 'canvas-confetti'

/**
 * Fires a celebratory confetti burst. Used on the Home page
 * (e.g. when the visitor "starts" the portfolio) and on contact
 * form success.
 */
export function fireConfetti() {
  const colors = ['#22d3ee', '#a855f7', '#f472b6', '#a3e635', '#fbbf24']
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors,
  })
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    })
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    })
  }, 250)
}
