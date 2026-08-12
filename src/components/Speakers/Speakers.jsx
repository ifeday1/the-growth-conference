import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import ibukun from '../../assets/images/ibukun-akinkuotu.png'
import emmanuel from '../../assets/images/emmanuel-faith-2.jpeg'
import tiwaloluwa from '../../assets/images/tiwaloluwa-adegbenro.jpg'
import oluwaseyi from '../../assets/images/oluwaseyi-gbadebo.jpeg'
import victor from '../../assets/images/victor-adebiyi.jpg'

const SPEAKERS = [
  {
    name: 'Ibukun Akinkuotu',
    role: 'Entertainment Lawyer | Lifestyle Creator & Influencer',
    photo: tiwaloluwa,
    bio: [
      'Ibukun Akinkuotu is an Intellectual Property and Entertainment Lawyer, award-winning lifestyle influencer and the Lead Creative at THE POSH BRAND, a media brand providing digital marketing services.',
      'With over four years of experience in the industry, Ibukun is at the intersection of law, creativity and commerce. She is widely recognized for her ability to bridge the gap between brands and their target audiences through strategic marketing, converting content and intentional brand positioning that drives visibility, sales and profit.',
      'Beyond her professional work, Ibukun is deeply passionate about leadership, women empowerment, community building and creating meaningful societal impact.',
      'She manages The Posh Tribe, a thriving community of over 50,000 members across multiple social media platforms, where she shares relatable content, inspires and educates.',
      'In her debut book — Hidden, Now Becoming, Ibukun draws from her personal journey and professional experience to explore self-discovery, ambition and influence, guiding readers through the process of uncovering who they truly are, owning their voice and boldly stepping into the lives they are becoming.',
    ],
  },
  {
    name: 'Emmanuel Faith',
    role: 'Founder, HR Clinic',
    photo: emmanuel,
    bio: [
      'Emmanuel Faith is a People & Culture Leader, globally certified HR professional, author and Founder of HR Clinic. He currently leads the People Experience & Employee Lifecycle team at one of the nine Unicorns in Africa, where he spearheads initiatives that strengthen employee experience, operational excellence and people strategy across the company globally.',
      'Over the past decade, he has partnered with founders and executive teams to build high-performing organizations where culture becomes a competitive advantage.',
      'His experience spans fintech, media, technology, consulting and multinational corporations. Until recently, he was Lead, People & Culture at Africhange, one of the fastest growing fintechs in Africa in 2026 according to Financial Times. Before then, he worked as Head of Talent Management at Big Cabal Media, one of the Best Places to Work in 2023; Lead, People & Culture at Cowrywise, one of the top ten startups to work at in 2022; and earlier supported People Operations at General Electric across multiple African markets.',
      'Throughout his career, he has designed and scaled people systems that improve organizational effectiveness, strengthen leadership capability and enable sustainable business growth.',
      'As the Founder of HR Clinic, he advises startups, scale-ups, nonprofits and growing businesses on organizational design, talent strategy, performance management, employee relations, leadership development, executive hiring and HR transformation. Through this work, he has supported more than 100 founders and leadership teams in building people-first organizations that scale with intention.',
      'A respected thought leader on the future of work, he has facilitated more than 200 conferences, executive sessions, workshops and leadership programmes across Africa. His work sits at the intersection of people strategy, organizational excellence, employability and leadership, helping organizations build exceptional workplaces while equipping professionals to build meaningful careers.',
      'He is a four-time TEDx speaker and the author of three books: How to Do HR in Nigeria, Chronicles of an Intern and Lustre. His insights have been featured through keynote addresses, executive roundtables, media contributions and publications focused on leadership, HR, employability and the future of work.',
      'Beyond his work in people leadership, he is an international women’s football journalist and Co-founder of Fervora, a media platform dedicated to amplifying the stories of African women footballers. His writing has appeared in leading football publications, where he covers the UEFA Women’s Champions League, the Women’s Super League and women’s football across Africa and Europe.',
      'Whether leading transformation within organizations, advising founders, mentoring emerging professionals, or speaking on global stages, he is driven by a simple belief: organizations perform at their best when people are empowered to do the best work of their lives. His mission is to build exceptional workplaces where people and businesses thrive while helping professionals build meaningful and fulfilling careers.',
      'At leisure, you will find him reading, tweeting about women’s football, or watching K-dramas.',
    ],
    honours: [
      'HR Most Influential List at the HR EXPO Africa 2026',
      'Top 100 HR Leaders in Africa by SeamlessHR in 2025',
      'HR/Talent Recruiter of the Year — No-Code Summit in 2023',
      'Top 100 Creators in Africa — Selar (the only HR professional recognised) in 2023 and lots more',
    ],
    social: [
      { label: 'YouTube', href: 'https://www.youtube.com/@EmmanuelFaith03' },
      { label: 'Instagram', href: 'https://instagram.com/theemmanuelfaith' },
      { label: 'X', href: 'https://x.com/themmanuelfaith' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emmanuel-faith' },
    ],
  },
  {
    name: 'Tiwaloluwa Adegbenro',
    role: 'Founder & Creative Director, TIWATHETAILOR | CEO, Eli & Augustine Limited',
    photo: ibukun,
    bio: [
      'Tiwaloluwa Adegbenro is a Nigerian Creative Director, fashion entrepreneur, event producer and advocate for women’s empowerment. She is the Founder and Creative Director of TIWATHETAILOR, a luxury fashion brand recognized for its timeless craftsmanship and distinctive designs, and the CEO of Eli & Augustine Limited, a premium event planning and coordination company.',
      'A graduate of Mass Communication from Bowen University, Tiwaloluwa previously built her career with organizations including Skye Bank, Guaranty Trust Bank (GTBank) and Interswitch Limited before transitioning into full-time entrepreneurship.',
      'Inspired by the legacy of her mother, a fashion designer of over 30 years, she has established herself as one of the leading young voices in Nigeria’s fashion industry. Her event portfolio includes delivering corporate experiences for Oyo State Government and Premium Trust Bank, and co-producing the 5 Alive Stadium Concert with Davido Music Worldwide (DMW).',
      'Beyond business, Tiwaloluwa is passionate about creating opportunities for women to thrive. Through initiatives such as her International Women’s Day gathering "She Gives, She Gains," she convenes conversations that empower female entrepreneurs, creatives and emerging leaders, equipping them with practical insights, meaningful connections and the confidence to grow.',
      'A recipient of over 30 awards and recognitions, Tiwaloluwa is widely celebrated for her contributions to fashion, entrepreneurship and creative excellence. Guided by her Christian faith and a commitment to excellence, she continues to inspire the next generation of entrepreneurs while proudly showcasing the creative potential of Ibadan on both the national and international stage.',
    ],
  },
  {
    name: 'Oluwaseyi Gbadebo',
    role: 'Founder, Konkéré Designs',
    photo: oluwaseyi,
    bio: [
      'Oluwaseyi Gbadebo is a dynamic Artist and Creative Entrepreneur with over 15 years of experience shaping Nigeria’s visual and design culture. He is the visionary founder of BZL Crew, Nigeria’s leading mural company, known for executing the largest mural project ever done in the country (TANKE Bridge, Ilorin, Kwara State) — a bold statement of scale, collaboration and artistic excellence.',
      'In 2021, he launched Konkéré Designs, Nigeria’s foremost sustainable concrete furniture brand, blending innovation, aesthetics and environmental consciousness. Through his work, Oluwaseyi is redefining how art intersects with public spaces, sustainability and modern African design.',
      'A celebrated visual artist, his works have been exhibited in numerous local and international shows and featured on platforms like TVC, Channels TV (including two features on Art House), Vanguard, ThisDay and The Guardian. His creative influence earned him a spot as one of the 100 Most Influential Young People in Oyo State in 2021.',
      'Oluwaseyi is also an award-winning public speaker and a passionate advocate for youth empowerment. As a mentor and role model to thousands of young creatives across Nigeria and beyond, he continues to inspire the next generation of artists and entrepreneurs to dream big and lead boldly.',
      'Based in Ogbomoso, Oyo State, his reach is global, with clients and collectors across continents. When he’s not creating, strategizing, or mentoring, he enjoys playing chess and exploring new ideas through networking and other creative pursuits.',
    ],
  },
  {
    name: 'Victor Adebiyi',
    role: 'Real Estate Consultant | Digital Content Creator',
    photo: victor,
    bio: [
      'Victor Adebiyi is a Real Estate Consultant and digital content creator with a proven track record in the Nigerian property market. With years of hands-on experience, he has successfully closed hundreds of millions of naira in real estate transactions — helping individuals, families and investors secure valuable property assets. His expertise spans property marketing, client advisory, investment guidance and sales strategy. Victor’s deep market knowledge, sharp negotiation skills and client-first approach have made him a trusted name among property buyers and investors alike. He is committed to helping clients make informed decisions that align with their financial goals.',
      'Beyond real estate, Victor is a widely recognised content creator with over 200,000 followers across social media. He is known for his humorous, relatable content that blends entertainment with real insights on everyday life, business and the property market. His ability to connect authentically with people has built him a large, engaged audience across multiple platforms.',
      'This dual presence as a high-performing real estate professional and an influential digital voice sets Victor apart. He leverages both worlds to educate, entertain and inspire a diverse audience, while continuing to drive meaningful results in property sales.',
    ],
  },
]

export default function Speakers() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    document.body.classList.add('menu-open')
    const onKeyDown = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <section id="speakers">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Speaker lineup</span>
          <h2>Meet the voices shaping New Horizons</h2>
          <p>
            Meet the inspiring speakers and industry leaders joining us at Growth Conference 2026.
            Bringing together diverse experiences, expertise and stories, our speakers will share
            insights designed to challenge your thinking, expand your perspective and equip you
            for the journey ahead.
          </p>
        </Reveal>

        <Reveal as="div" className="grid grid-cols-1 xs:grid-cols-2 tab:grid-cols-3 gap-5">
          {SPEAKERS.map((speaker, i) => (
            <button
              type="button"
              key={speaker.name}
              onClick={() => setActive(i)}
              className="group text-left bg-white border border-line rounded-2xl p-5.5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.75 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-full aspect-square object-cover rounded-xl mb-4"
              />
              <h4 className="text-[0.95rem] font-extrabold">{speaker.name}</h4>
              <span className="text-[0.78rem] text-ink-soft block mt-1">{speaker.role}</span>
              <span className="inline-block mt-3 text-[0.78rem] font-bold text-blue">
                Read full bio &rarr;
              </span>
            </button>
          ))}
        </Reveal>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-500 bg-ink/95 flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
          onClick={() => setActive(null)}
        >
          <div
            className="relative bg-white rounded-[18px] max-w-165 w-full p-6.5 sm:p-9 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper-warm hover:bg-line text-ink text-xl leading-none border-none cursor-pointer flex items-center justify-center transition-colors duration-200"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={SPEAKERS[active].photo}
              alt={SPEAKERS[active].name}
              className="w-24 h-24 rounded-full object-cover mb-4.5"
            />
            <h3 className="font-sans font-extrabold text-[1.25rem] normal-case">
              {SPEAKERS[active].name}
            </h3>
            <span className="text-[0.85rem] text-ink-soft block mt-1">
              {SPEAKERS[active].role}
            </span>

            <div className="mt-5 space-y-3.5">
              {SPEAKERS[active].bio.map((para, i) => (
                <p key={i} className="text-ink-soft leading-[1.7] text-[0.95rem]">
                  {para}
                </p>
              ))}
            </div>

            {SPEAKERS[active].honours && (
              <div className="mt-5">
                <h4 className="text-[0.95rem] font-extrabold">Honours & recognition</h4>
                <ul className="mt-2.5 pl-4.5 text-ink-soft text-[0.92rem] leading-[1.7] list-disc">
                  {SPEAKERS[active].honours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {SPEAKERS[active].social && (
              <div className="mt-5 flex flex-wrap gap-3">
                {SPEAKERS[active].social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.8rem] font-bold text-blue border border-line rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:bg-blue hover:text-white hover:border-blue"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
