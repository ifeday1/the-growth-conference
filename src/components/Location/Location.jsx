import Reveal from '../Reveal'

export default function Location() {
  return (
    <section id="location">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Where to find us</span>
          <h2>University of Ibadan, Oyo State</h2>
        </Reveal>

        <Reveal as="div" className="grid grid-cols-1 tab:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-[18px] overflow-hidden min-h-85 bg-linear-to-br from-[#e9edf7] to-[#dbe4fb] relative">
            <iframe
              src="https://www.google.com/maps?q=University+of+Ibadan,+Ibadan,+Nigeria&output=embed"
              loading="lazy"
              allowFullScreen
              title="University of Ibadan map"
              className="w-full h-full min-h-85 border-0 grayscale-[0.15]"
            />
          </div>
          <div className="bg-white border border-line rounded-[18px] p-6.5 sm:p-9 flex flex-col justify-center">
            <h3 className="normal-case font-sans font-extrabold text-[1.3rem] mb-3.5">Saturday, 3rd October 2026</h3>
            <p className="text-ink-soft leading-[1.7] mb-5.5">
              Growth Conference 3.0 takes place on the campus of the University of Ibadan, Oyo
              State, Nigeria. Full venue and schedule details will be shared with all registered
              participants ahead of the event.
            </p>
            <p className="text-ink-soft leading-[1.7] mb-5.5 -mt-2.5">
              No dress code — smart casual or business casual is recommended. Bring your virtual
              ticket or QR code on your phone; no printing required.
            </p>
            <a
              href="https://tix.africa/discover/growthconference"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline self-start"
            >
              Get My Ticket
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
