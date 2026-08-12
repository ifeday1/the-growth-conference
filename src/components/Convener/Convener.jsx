import Reveal from '../Reveal'
import eben from '../../assets/images/eben.jpeg'

export default function Convener() {
  return (
    <section id="convener">
      <div className="wrap">
        <div className="grid grid-cols-1 tab:grid-cols-2 gap-9 tab:gap-[70px] items-center">
          <Reveal className="bg-white border border-line rounded-[18px] p-6.5 sm:p-9 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.75 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)]">
            <img
              src={eben}
              alt="Ebenezer Ogunbode"
              className="w-full aspect-square object-cover rounded-2xl mb-5.5"
            />
            <h4 className="text-[1.05rem] font-extrabold">Ebenezer Ogunbode</h4>
            <span className="text-[0.85rem] text-ink-soft">
              Founder, The Eben Initiative &middot; Convener, Growth Conference
            </span>
          </Reveal>

          <Reveal>
            <span className="eyebrow">Meet the convener</span>
            <h2 className="mt-3.5">The vision behind the event</h2>
            <p className="text-ink-soft mt-5 leading-[1.7] text-[1.05rem]">
              Growth Conference was born from a conviction that young people do not lack
              potential, they need access to the right knowledge, mentors, networks, and
              opportunities to turn that potential into impact.
            </p>
            <p className="text-ink-soft mt-3.5 leading-[1.7] text-[1.05rem]">
              At the heart of this vision is <b>Ebenezer Ogunbode</b>, Founder of The Eben
              Initiative and Convener of Growth Conference.
            </p>
            <p className="text-ink-soft mt-3.5 leading-[1.7] text-[1.05rem]">
              Through Growth Conference and the broader work of The Eben Initiative, he is
              committed to creating platforms that inspire young people, equip them with
              relevant knowledge and skills, connect them to meaningful opportunities and
              empower them to become ethical leaders, innovators and changemakers.
            </p>
            <div className="slashes mt-7">
              <span></span><span></span><span></span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
