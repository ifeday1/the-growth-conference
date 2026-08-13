import Reveal from '../Reveal'

export default function Location() {
  return (
    <section id="location">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Where to find us</span>
          <h2>We've got the room. You've got a place in it.</h2>
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
            <h3 className="normal-case font-sans font-extrabold text-[1.3rem] mb-3.5">Alumni Hall, University of Ibadan</h3>
            <p className="text-ink-soft leading-[1.7] mb-5.5">
              Growth Conference 2026 is happening at Alumni Hall, University of Ibadan, Ibadan,
              Oyo State. Check the map below, find your way to the venue and get ready to step
              into a day filled with new ideas, new connections and New Horizons.
            </p>
            <p className="text-ink-soft leading-[1.7] mb-5.5 -mt-2.5">
              Come dressed in smart and comfortable attire ready to learn, connect and make the
              most of the experience.
            </p>
            <p className="text-ink-soft leading-[1.7] mb-5.5 -mt-2.5">
              And don't forget your virtual QR code! Have your ticket readily available on your
              phone when you arrive. You'll need to present your QR code at the registration desk
              for verification and check-in.
            </p>
            <a
              href="https://tix.africa/discover/growthconference"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline self-start"
            >
              Get My Ticket
            </a>
            <p className="text-ink-soft leading-[1.7] mt-5.5 font-extrabold">
              We'll see you in the room.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
