import Reveal from '../Reveal'

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-paper-warm">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Sponsors & partners</span>
          <h2>Backed by organizations who believe in youth</h2>
        </Reveal>

        <Reveal as="div" className="flex flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className="flex-1 min-w-37.5 h-22.5 border-[1.5px] border-dashed border-line rounded-2xl flex items-center justify-center text-ink-soft text-[0.78rem] font-bold uppercase tracking-wider transition-[transform,border-color,color] duration-300 hover:-translate-y-0.75 hover:border-blue hover:text-blue"
              key={i}
            >
              Your Logo
            </div>
          ))}
        </Reveal>

        <Reveal as="div" className="mt-8.5 flex items-center justify-between flex-wrap gap-5 bg-white border border-line rounded-[18px] p-6.5 sm:p-[30px_34px]">
          <div>
            <h3 className="font-sans font-extrabold text-[1.15rem] normal-case">
              Partner with Growth Conference 3.0
            </h3>
            <p className="text-ink-soft max-w-105 mt-2">We welcome organizations and individuals who share our vision for youth development, in front of 1,500+ engaged young leaders.</p>
          </div>
          <a href="mailto:growthconferencetei@gmail.com" className="btn btn-primary">Become a Partner</a>
        </Reveal>
      </div>
    </section>
  )
}
