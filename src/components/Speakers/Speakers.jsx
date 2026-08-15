import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import ibukun from '../../assets/images/ibukun-akinkuotu.jpg'
import emmanuel from '../../assets/images/emmanuel-faith-2.jpeg'
import oluwaseyi from '../../assets/images/oluwaseyi-gbadebo.jpeg'
import victor from '../../assets/images/victor-adebiyi.jpg'
import seun from '../../assets/images/seun-fakorede.jpg'
import adesuwa from '../../assets/images/adesuwa-olanrewaju-dada.jpg'

const SPEAKERS = [
  {
    name: 'Dr. Seun Fakorede',
    role: 'Executive Adviser on Youth & Sports, Oyo State | Founder, Home Advantage Africa',
    tag: 'Keynote Speaker',
    photo: seun,
    photoPosition: 'top',
    bio: [
      'Seun Fakorede is a Nigerian public policy strategist and governance practitioner focused on youth participation, leadership development and democratic inclusion in youth-majority societies.',
      'He currently serves as Executive Adviser on Youth and Sports to the Governor of Oyo State, where he contributes to policy development and strategic initiatives to expand opportunities for young people and strengthen youth engagement in governance.',
      'From 2019 to 2023, he served as Commissioner for Youth and Sports in Oyo State, becoming one of the youngest cabinet members in Nigeria’s contemporary political landscape. During his tenure, he led initiatives that advanced youth empowerment, sports development and leadership opportunities across the state.',
      'Beyond public office, Fakorede is the Founder of Home Advantage Africa, a nonprofit organisation dedicated to youth empowerment, civic engagement and social development across African communities.',
      'His work intersects with global conversations on democratic governance and youth leadership. He is a member of the Network of Young Decision-Makers of Club de Madrid and was recognised by One Young World as Politician of the Year in 2022. He is also a recipient of the Future Awards Africa Prize for Governance.',
      'Through public service, advocacy and thought leadership, Fakorede continues to champion youth empowerment, responsible governance and sustainable development across Africa. His emerging work explores how democratic systems can adapt to the realities of youth-majority societies, particularly across the African continent.',
      'Outside public service, he maintains a keen interest in leadership development, public policy, global affairs and Africa’s evolving role in the international system.',
    ],
  },
  {
    name: 'Ibukun Akinkuotu',
    role: 'Entertainment Lawyer | Lifestyle Creator & Influencer',
    photo: ibukun,
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
  {
    name: 'Adesuwa Olanrewaju-Dada',
    role: 'Founder, DWS Events',
    photo: adesuwa,
    photoPosition: 'top',
    bio: [
      'Adesuwa Olanrewaju-Dada is a Nigerian-born event entrepreneur, project manager and industry builder with over 17 years of experience across event production, planning, coordination and event technology. As the Founder and CEO of DWS Events, she curates exceptional experiences for leading brands and discerning clients, backed by a reputation for precision, creativity and flawless execution.',
      'Adesuwa is the founder of the Wedding Conversation Café, an intimate platform for honest, strategic conversations among event professionals, and Save The Events Industry (STEI), a community hub dedicated to educating and elevating vendors and hosts across Nigeria’s events ecosystem. Through DWS Events Academy, her training initiative focused on equipping women and girls with the business skills to thrive in the events industry, she secured a formal partnership with Google to train event professionals on digital and business tools.',
      'Her project credentials are exceptional. She served as Project Manager on the Dano World Milk Day activation that earned a Guinness World Record, led the production team for the Naira Life Conference, the largest financial event in Nigeria, and produced TechCabal’s Moonshot Mixer, a flagship event at the intersection of tech and innovation. Her client portfolio spans corporate brands, leading institutions and prominent individuals including Titi Akinsanmi and Yetty Williams.',
      'As the former Country and Sub-Saharan Africa Coordinator for Google Arts & Culture, she led landmark digital cultural initiatives with institutions including Terra Kulture, the African Artists Foundation, Lagos Fashion Week and the Nigerian Tourism Development Corporation. She also trained government officials across Nigeria and Sub-Saharan Africa in digital collaboration and Google tools, merging technology, culture and capacity building in a way few others have.',
      'A Cherie Blair Foundation alumna in partnership with Lagos Business School, and a winner of the Female Entrepreneur of the Year Award, Adesuwa has been featured across leading national media. She is a minister, trainer, mentor, speaker and a proud wife and mother of two.',
      'Everywhere she shows up, standards rise.',
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
              <div className="relative mb-4">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  style={{ objectPosition: speaker.photoPosition || 'center' }}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                {speaker.tag && (
                  <span className="absolute top-2.5 left-2.5 bg-gold text-ink text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {speaker.tag}
                  </span>
                )}
              </div>
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
              style={{ objectPosition: SPEAKERS[active].photoPosition || 'center' }}
              className="w-24 h-24 rounded-full object-cover mb-4.5"
            />
            {SPEAKERS[active].tag && (
              <span className="inline-block mb-2 bg-gold text-ink text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                {SPEAKERS[active].tag}
              </span>
            )}
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
