import { useEffect, useState } from 'react'
import Reveal from '../Reveal'

const ITEMS = [
  { label: 'GC 2.0 · Keynote', src: '/gallery/gc2-keynote.jpg', span: 'col-span-2 row-span-2' },
  { label: 'GC 2.0 · Networking', src: '/gallery/gc2-networking.jpg', span: '' },
  { label: 'GC 2.0 · Team', src: '/gallery/gc2-team.jpg', span: '' },
  { label: 'GC 1.0 · Awards', src: '/gallery/gc1-awards.jpg', span: 'row-span-2' },
  { label: 'GC 2.0 · Speaker', src: '/gallery/gc2-speaker.jpg', span: '' },
  { label: 'GC 1.0 · Crowd', src: '/gallery/gc1-crowd.jpg', span: 'col-span-2' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    document.body.classList.add('menu-open')
    const onKeyDown = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <section id="gallery">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>Moments from GC 2024 & 2025</h2>
          <p>A look back at GC 1.0 and 2.0 — follow along on Instagram for the full archive.</p>
        </Reveal>

        <Reveal
          as="div"
          className="group grid grid-cols-2 tab:grid-cols-4 auto-rows-22.5 xs:auto-rows-27.5 gap-3"
        >
          {ITEMS.map((item, i) => (
            <button
              type="button"
              className={`rounded-[14px] relative overflow-hidden cursor-zoom-in border-none p-0 transition-transform duration-350 ease-out hover:scale-[1.03] group-[.in]:animate-[fadeUp_0.6s_ease_backwards] ${item.span}`}
              key={item.label}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => setActive(i)}
              aria-label={`View full image: ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </Reveal>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-500 bg-ink/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl leading-none border-none cursor-pointer flex items-center justify-center transition-colors duration-200"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={ITEMS[active].src}
            alt={ITEMS[active].label}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
