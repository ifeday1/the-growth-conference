import Reveal from '../Reveal'
import logoTei from '../../assets/images/logo-tei.png'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="grid grid-cols-1 tab:grid-cols-2 gap-9 tab:gap-[70px] items-center">
          <Reveal>
            <span className="eyebrow">About the event</span>
            <h2 className="mt-3.5">
              Talent is everywhere.<br />
              Access <span className="text-pink">isn't.</span>
            </h2>
            <p className="text-ink-soft mt-5 leading-[1.7] text-[1.05rem]">
              Growth Conference was born from a simple but urgent reality: thousands of talented
              young people possess immense potential but lack access to the knowledge, exposure,
              mentorship and communities needed to maximize it. Our vision is to build a global
              community of ethical, innovative, influential and impact-driven young leaders
              committed to transforming society.
            </p>
            <div className="slashes mt-7">
              <span></span><span></span><span></span>
            </div>
          </Reveal>

          <Reveal className="bg-white border border-line rounded-[18px] p-6.5 sm:p-9 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.75 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)]">
            <img src={logoTei} alt="The Eben Initiative" className="h-[34px] w-auto mb-5.5" />
            <p className="text-ink-soft leading-[1.7] text-base">
              Hosted by <b>The Eben Initiative (TEI)</b>, Growth Conference exists to empower and
              equip young leaders and professionals to harness their God-given potential with
              the mindset, skills, opportunities and networks required to thrive in an
              increasingly competitive world.
            </p>
            <p className="text-ink-soft leading-[1.7] text-base mt-3.5">
              Since 2024, Growth Conference has brought together students, graduates, young
              professionals, entrepreneurs and industry leaders for transformational conversations
              that spark growth, build careers and create lasting impact.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
