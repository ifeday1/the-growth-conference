import { useEffect, useRef, useState } from 'react'
import Reveal from '../Reveal'

const TESTIMONIALS = [
  {
    quote: '"No edition of Growth Conference has ever left me the same. Having attended and volunteered at both, GC is genuinely impactful, inspiring, and thought-provoking. Every session pushes you to reach higher and take action."',
    initial: 'L', color: 'var(--color-gold)', name: 'Lydia Oyeniran', role: 'Career Professional, Ibadan',
  },
  {
    quote: '"The speakers and other programs put together for the past editions of the Growth Conference were so impactful, and I personally would be expecting more in the 3rd edition."',
    initial: 'V', color: 'var(--color-pink)', name: 'Victor Ajekigbe', role: 'Entrepreneur, Osun State',
  },
  {
    quote: '"Excited and looking forward to Growth Conference 3.0 as we impact lives in a new way."',
    initial: 'T', color: 'var(--color-blue)', name: 'Tijesunimi Okunola', role: 'Entrepreneur, Ibadan',
  },
  {
    quote: '"I was privileged to attend the first edition and it was nothing short of great. It brought about a shift in my mind and thought as an individual."',
    initial: 'P', color: 'var(--color-cyan)', name: 'Prayer Akano', role: 'Graduate, Ibadan',
  },
  {
    quote: "\"I attended the first and second edition and it was so insightful — the organization was top notch. The speakers really spoke to my soul, and I've been able to see my potential and make good use of it.\"",
    initial: 'G', color: 'var(--color-gold)', name: 'Greatness Olanrewaju', role: 'Graduate, Ibadan',
  },
  {
    quote: '"With the privilege of serving as a volunteer for Growth Conference 1.0 & 2.0; it gave me an added advantage of gaining understanding & experience into operations of the corporate world. It served as a motivating factor to strive for growth in career, excellence & character."',
    initial: 'P', color: 'var(--color-pink)', name: 'Praise Fadare', role: 'NYSC Member, Ilorin',
  },
  {
    quote: [
      '"I will never forget the encounter I had during Growth Conference 1.0. Just last month, I was reflecting on my journey and growth so far, and my mind went straight back to Growth Conference 1.0. Before I knew it, tears started rolling down my cheeks.',
      'Funny enough, I didn’t plan to attend that day. I was low on cash and almost gave up. But thank God He orchestrated my steps to that venue. Looking back now, I know it was divine.',
      'That day changed me. I was truly blessed. It felt as if the entire program was tailored just for me. I walked in with questions, doubts and limitations, but I left with clarity, direction and faith. The teachings and the atmosphere planted seeds in me that I’m still growing with today.',
      'To the Convener and the entire team: thank you for saying yes to God. Because of your obedience, lives like mine are being transformed. Because of your sacrifice, I discovered truths I’m still standing on. Because of your commitment, my perspective about growth, purpose and God’s work in me shifted completely.',
      'My heart is full of gratitude, and my soul will not stop praying for you. I’m believing God that I’ll get the opportunity to be part of Growth Conference 3.0; not just as an attendee, but as someone who has grown, and is still growing, through your program.',
      'Thank you for blessing me. Thank you for being vessels God used to shape my life. I’m a testimony of what God can do through one program, one team and one yes."',
    ],
    initial: 'A', color: 'var(--color-blue)', name: 'Anonymous', role: 'Attendee, Growth Conference 1.0',
  },
]

const AUTO_ADVANCE_MS = 6000

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const autoRef = useRef(null)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length)

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current) }
  const startAuto = () => {
    stopAuto()
    autoRef.current = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  const onTouchStart = (e) => {
    stopAuto()
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      goTo(touchDeltaX.current < 0 ? index + 1 : index - 1)
    }
    touchDeltaX.current = 0
  }

  return (
    <section id="testimonials" className="bg-paper-warm">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">In their words</span>
          <h2>People who've been in the room</h2>
        </Reveal>

        <Reveal as="div" className="relative max-w-190 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(.2,.9,.25,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {TESTIMONIALS.map((t) => (
              <div className="flex-none w-full px-1.5" key={t.name}>
                <div className="bg-ink text-white rounded-[22px] p-7.5 sm:p-11.5 min-h-0 sm:min-h-55 flex flex-col justify-between">
                  {Array.isArray(t.quote) ? (
                    <blockquote className="not-italic space-y-3 text-[1rem] sm:text-[1.1rem] leading-[1.6] font-medium">
                      {t.quote.map((para, pi) => <p key={pi}>{para}</p>)}
                    </blockquote>
                  ) : (
                    <q className="text-[1.05rem] sm:text-[1.35rem] leading-[1.55] font-medium">{t.quote}</q>
                  )}
                  <div className="mt-6.5 flex items-center gap-3">
                    <div
                      className="w-9.5 h-9.5 rounded-full flex items-center justify-center font-extrabold font-display text-ink"
                      style={{ background: t.color }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <b className="block text-[0.92rem]">{t.name}</b>
                      <span className="text-[0.78rem] opacity-60">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2.5 mt-6.5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className="w-7 h-7 p-0 border-none bg-none cursor-pointer flex items-center justify-center group"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => goTo(i)}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    i === index ? 'w-5.5 h-2.5 rounded-md bg-blue' : 'w-2.5 h-2.5 bg-line'
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
