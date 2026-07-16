import { useEffect, useRef, useState } from 'react'

/** Animates a number counting up from 0 once it scrolls into view. */
export default function CountUp({ to, suffix = '', duration = 1400, className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const start = performance.now()
          function tick(now) {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(to * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <div className={`font-display text-2xl sm:text-[2rem] transition-opacity duration-300 ${className}`} ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </div>
  )
}
