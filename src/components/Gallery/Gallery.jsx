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
            <div
              className={`rounded-[14px] relative overflow-hidden transition-transform duration-350 ease-out hover:scale-[1.03] group-[.in]:animate-[fadeUp_0.6s_ease_backwards] ${item.span}`}
              key={item.label}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
