import Reveal from '../Reveal'

const ITEMS = [
  {
    n: '01',
    color: 'var(--color-pink)',
    title: 'Career Clarity',
    text: 'Inspiring keynotes and career development sessions built for where you are right now.',
  },
  {
    n: '02',
    color: 'var(--color-gold)',
    title: 'Leadership Insight',
    text: 'Real conversations on leadership, from people leading in the rooms you want to be in.',
  },
  {
    n: '03',
    color: 'var(--color-blue)',
    title: 'A Real Network',
    text: 'Deliberate networking opportunities — not just a badge and a handshake.',
  },
  {
    n: '04',
    color: 'var(--color-cyan)',
    title: 'Opportunity Marketplace',
    text: 'Jobs, gigs, fellowships and partnerships surfaced directly to attendees.',
  },
  {
    n: '05',
    color: 'var(--color-ink)',
    title: 'Mentorship',
    text: "Direct access to mentors who've walked the path you're starting on.",
  },
  {
    n: '06',
    color: 'var(--color-pink)',
    title: 'Business Growth',
    text: 'Innovation and entrepreneurship discussions with practical, usable strategy.',
  },
  {
    n: '07',
    color: 'var(--color-gold)',
    title: 'A Community',
    text: "Growth-minded young people who'll still be in your corner after after the event.",
  },
  {
    n: '08',
    color: 'var(--color-blue)',
    title: 'Momentum',
    text: 'Leave with a plan, not just notes — and people to hold you to it.',
  },
];

export default function WhyAttend() {
  return (
    <section id="why" className="pt-0">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Why attend</span>
          <h2>What you'll walk away with</h2>
        </Reveal>

        <Reveal
          as="div"
          className="group grid grid-cols-1 xs:grid-cols-2 tab:grid-cols-4 gap-0.5 bg-line border border-line rounded-[18px] overflow-hidden"
        >
          {ITEMS.map((item, i) => (
            <div
              className="bg-white p-6.5 sm:p-[34px_26px] transition-[background,transform] duration-300 hover:bg-paper-warm hover:-translate-y-1 group-[.in]:[animation:fadeUp_0.6s_ease_backwards]"
              key={item.title}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="w-10 h-10 rounded-[10px] mb-4.5 flex items-center justify-center font-display text-white text-[1.1rem]"
                style={{ background: item.color }}
              >
                {item.n}
              </div>
              <h3 className="normal-case font-sans font-extrabold text-base mb-2">{item.title}</h3>
              <p className="text-[0.88rem] text-ink-soft leading-[1.55]">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
