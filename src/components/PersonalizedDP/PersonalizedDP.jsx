import Reveal from '../Reveal'
import sample from '../../assets/images/growth-conference-dp-sample.jpeg'

export default function PersonalizedDP() {
  return (
    <section id="personalized-dp">
      <div className="wrap">
        <div className="grid grid-cols-1 tab:grid-cols-2 gap-9 tab:gap-[70px] items-center">
          <Reveal className="bg-white border border-line rounded-[18px] p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.75 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] max-w-90 mx-auto tab:mx-0">
            <img
              src={sample}
              alt="Sample personalized 'I will be attending Growth Conference' design"
              className="w-full aspect-[1400/1913] object-cover rounded-2xl"
            />
          </Reveal>

          <Reveal>
            <span className="eyebrow">Show you're coming</span>
            <h2 className="mt-3.5">Get your personalized design</h2>
            <p className="text-ink-soft mt-5 leading-[1.7] text-[1.05rem]">
              Create your own "I will be attending Growth Conference 3.0" flyer in seconds — upload
              your photo, add your name and share it across your social pages to let your community
              know you'll be in the room.
            </p>
            <div className="mt-7">
              <a
                href="https://getdp.co/GC26"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Create My Design
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
