import { useState } from 'react'
import Reveal from '../Reveal'
import FAQItem from './FAQItem'

const FAQS = [
  { q: 'Is Growth Conference 2026 free to attend?', a: 'Yes! Attendance is completely free. However, registration is compulsory as spaces are limited.' },
  { q: 'Who can attend the conference?', a: 'Growth Conference is open to undergraduate students, recent graduates, NYSC members, young professionals, entrepreneurs, aspiring leaders and anyone passionate about personal and professional growth.' },
  { q: 'Where will the conference take place?', a: 'Growth Conference 2026 will be held at the University of Ibadan, Oyo State, Nigeria.' },
  { q: 'When is the conference?', a: 'The conference will take place on Saturday, 3rd October 2026. The event schedule and start time will be communicated to all registered participants.' },
  { q: 'How do I register?', a: 'Simply click "Register Now" and complete your registration through our official ticketing platform, Tix Africa. Your ticket will be sent to your email upon successful registration.' },
  { q: 'Do I need to print my ticket?', a: 'No. You can present your virtual ticket or the QR code on your mobile device on the day.' },
  { q: 'Is there a dress code?', a: 'There is no official dress code, but we recommend smart casual or business casual attire.' },
  { q: 'How can my organization partner or sponsor the conference?', a: 'We welcome organizations and individuals who share our vision for youth development. Contact us at growthconferencetei@gmail.com.' },
  { q: 'Who is organizing Growth Conference?', a: 'Growth Conference is proudly organized by The Eben Initiative (TEI), a youth-focused nonprofit committed to raising purpose-driven leaders, professionals, entrepreneurs and changemakers.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-paper-warm">
      <div className="wrap max-w-205">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Good to know</span>
          <h2>Frequently asked questions</h2>
        </Reveal>

        <Reveal as="div">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
