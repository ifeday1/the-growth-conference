import logoWhite from '../../assets/images/logo-main-white.png'

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-13.5 sm:pt-17.5 pb-6.5 sm:pb-7.5">
      <div className="wrap">
        <div className="grid grid-cols-1 tab:grid-cols-[1.4fr_1fr_1fr] gap-8.5 tab:gap-12.5 pb-9 sm:pb-12.5 border-b border-white/12">
          <div>
            <img src={logoWhite} alt="Growth Conference" className="h-6.5 mb-4" />
            <p className="text-white/55 text-[0.9rem] leading-[1.6] max-w-70">
              Growth Conference is an event built to inspire, equip, connect and empower young
              leaders across Nigeria and beyond. Hosted by The Eben Initiative.
            </p>
          </div>
          <div>
            <h4 className="text-[0.78rem] uppercase tracking-[0.08em] text-white/40 mb-4">Explore</h4>
            <a href="#about" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">About</a>
            <a href="#story" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">Our Story</a>
            <a href="#speakers" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">Speakers</a>
            <a href="#faq" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">FAQs</a>
          </div>
          <div>
            <h4 className="text-[0.78rem] uppercase tracking-[0.08em] text-white/40 mb-4">Contact</h4>
            <a href="mailto:growthconferencetei@gmail.com" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">growthconferencetei@gmail.com</a>
            <a
              href="https://instagram.com/growthconference_tei"
              target="_blank"
              rel="noreferrer"
              className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold"
            >
              Instagram · @growthconference_tei
            </a>
            <a
              href="https://x.com/EbenInitiative"
              target="_blank"
              rel="noreferrer"
              className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold"
            >
              X · @EbenInitiative
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="block text-white/75 text-[0.9rem] mb-3 transition-colors duration-200 hover:text-gold">
              LinkedIn · The Eben Initiative
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6.5 flex-wrap gap-3">
          <p className="text-[0.78rem] text-white/40">© 2026 The Eben Initiative. All rights reserved.</p>
          <p className="text-[0.78rem] text-white/40">Growth Conference 3.0 · University of Ibadan · 3rd October 2026</p>
        </div>
      </div>
    </footer>
  )
}
