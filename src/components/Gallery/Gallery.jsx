import Reveal from '../Reveal'

const ITEMS = [
  { label: 'GC 2024 · Keynote', gradient: 'linear-gradient(135deg,var(--color-pink),#ffd6f6)', span: 'col-span-2 row-span-2' },
  { label: 'GC 2025 · Networking', gradient: 'linear-gradient(135deg,var(--color-gold),#ffe58a)', span: '' },
  { label: 'GC 2025 · Awards', gradient: 'linear-gradient(135deg,var(--color-blue),#7da3ff)', span: '' },
  { label: 'GC 2024 · Crowd', gradient: 'linear-gradient(135deg,var(--color-ink),#4a4a4a)', span: 'row-span-2' },
  { label: 'GC 2025 · Panel', gradient: 'linear-gradient(135deg,var(--color-cyan),#a6f1fb)', span: '' },
  { label: 'GC 2024 · Mentorship', gradient: 'linear-gradient(135deg,#4a4a4a,var(--color-ink))', span: 'col-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>Moments from GC 2024 & 2025</h2>
          <p>Photo and video recaps are being curated — check back soon, or follow along on Instagram for the full archive.</p>
        </Reveal>

        <Reveal
          as="div"
          className="group grid grid-cols-2 tab:grid-cols-4 auto-rows-22.5 xs:auto-rows-27.5 gap-3"
        >
          {ITEMS.map((item, i) => (
            <div
              className={`rounded-[14px] relative overflow-hidden flex items-end p-3.5 transition-transform duration-350 ease-out hover:scale-[1.03] group-[.in]:animate-[fadeUp_0.6s_ease_backwards] ${item.span}`}
              key={item.label}
              style={{ background: item.gradient, animationDelay: `${i * 0.07}s` }}
            >
              <span className="text-white text-[0.72rem] font-bold opacity-85 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
