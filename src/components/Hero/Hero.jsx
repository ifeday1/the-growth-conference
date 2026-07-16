import GrowthBars from './GrowthBars'
import Countdown from './Countdown'
import AddToCalendar from './AddToCalendar'
import badge30 from '../../assets/images/badge-3-0.png'

export default function Hero() {
  return (
    <section className="relative bg-ink text-white pt-[120px] pb-[60px] sm:pt-[150px] sm:pb-[90px] overflow-hidden" id="top">
      <GrowthBars />
      <div
        className="wrap relative z-2 [&>*]:opacity-0 [&>*]:translate-y-4 [&>*]:[animation:heroIn_0.8s_cubic-bezier(.2,.9,.25,1)_forwards] [&>*:nth-child(1)]:[animation-delay:.15s] [&>*:nth-child(2)]:[animation-delay:.28s] [&>*:nth-child(3)]:[animation-delay:.40s] [&>*:nth-child(4)]:[animation-delay:.52s] [&>*:nth-child(5)]:[animation-delay:.64s] [&>*:nth-child(6)]:[animation-delay:.74s]"
      >
        <div className="flex items-center gap-3.5 flex-wrap mb-[26px]">
          <span className="eyebrow text-gold">The Eben Initiative Presents</span>
          <img src={badge30} alt="3.0" className="h-[26px] w-auto" />
        </div>

        <h1 className="text-[clamp(2.6rem,7.4vw,5.6rem)] mt-1.5 mb-[22px]">
          More than a<br />
          <span className="text-pink">conference.</span><br />
          A <span className="text-gold">movement</span><span className="text-blue">.</span>
        </h1>

        <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/72 max-w-[560px] mb-10 leading-[1.5]">
          A global community of ethical, innovative, and impact-driven young leaders — built one
          conference at a time. Join us for the third edition.
        </p>

        <div className="flex gap-4 flex-wrap mb-14 flex-col items-stretch xs:flex-row xs:items-center [&_.btn]:text-[0.76rem] [&_.btn]:py-[13px] [&_.btn]:px-5 sm:[&_.btn]:text-[0.85rem] sm:[&_.btn]:py-3.5 sm:[&_.btn]:px-[26px] [&_.btn]:w-full xs:[&_.btn]:w-auto">
          <a href="#register" className="btn btn-light">Register Now — It's Free</a>
          <a
            href="#sponsors"
            className="btn btn-outline border-white/40 text-white"
          >
            Become a Partner
          </a>
        </div>

        <Countdown />
        <AddToCalendar />
      </div>
    </section>
  )
}
