import Reveal from '../Reveal'

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-paper-warm">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Become a partner</span>
          <h2>Let's build New Horizons together.</h2>
          <p>
            We're grateful to the organizations and brands partnering with Growth Conference 2026
            to invest in the next generation of leaders.
          </p>
          <p className="mt-3.5">
            Their support is helping create an unforgettable experience for 1,500+ young people
            through inspiring conversations, practical learning, networking and career
            opportunities.
          </p>
          <p className="mt-3.5">
            As our impact grows, we're opening the door for more visionary partners to join us in
            shaping the future of Africa's young leaders.
          </p>
          <p className="mt-3.5 font-bold text-ink">Partner with us. Create lasting impact.</p>
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
              Partner with Growth Conference 2026
            </h3>
            <p className="text-ink-soft max-w-105 mt-2">
              Download our partnership proposal for the full breakdown of packages, benefits and
              ways to get involved.
            </p>
          </div>
          <a
            href="/files/Growth-Conference-2026-Partnership-Proposal.pdf"
            download
            className="btn btn-primary"
          >
            Explore Partnership Opportunities
          </a>
        </Reveal>
      </div>
    </section>
  )
}
