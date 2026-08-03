import { useEffect, useRef } from 'react'
import Reveal from '../Reveal'

const PLACEHOLDER_COLORS = ['var(--color-pink)', 'var(--color-gold)', 'var(--color-blue)', 'var(--color-cyan)', 'var(--color-ink)', 'var(--color-pink)']

export default function Speakers() {
  const trackRef = useRef(null)
  const xRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const id = setInterval(() => {
      xRef.current -= 0.6
      const maxScroll = -(track.scrollWidth / 2)
      if (xRef.current < maxScroll) xRef.current = 0
      track.style.transform = `translateX(${xRef.current}px)`
    }, 30)
    return () => clearInterval(id)
  }, [])

  // duplicate the list for a seamless auto-scroll loop
  const cards = [...PLACEHOLDER_COLORS, ...PLACEHOLDER_COLORS]

  return (
    <section id="speakers">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Speaker lineup</span>
          <h2>Meet the voices shaping New Horizons</h2>
          <p>
            Meet the inspiring speakers and industry leaders joining us at Growth Conference 2026.
            Bringing together diverse experiences, expertise, and stories, our speakers will share
            insights designed to challenge your thinking, expand your perspective, and equip you
            for the journey ahead.
          </p>
        </Reveal>

        <Reveal as="div" className="overflow-hidden">
          <div className="flex gap-5" ref={trackRef}>
            {cards.map((color, i) => (
              <div
                className="flex-none w-55 bg-white border border-line rounded-2xl p-5.5 text-center transition-transform duration-300"
                key={i}
              >
                <div
                  className="w-full aspect-square rounded-xl mb-4 flex items-center justify-center font-display text-white text-[1.4rem]"
                  style={{ background: color }}
                >
                  ?
                </div>
                <h4 className="text-[0.95rem] font-extrabold">Speaker TBA</h4>
                <span className="text-[0.78rem] text-ink-soft">Announcing soon</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
