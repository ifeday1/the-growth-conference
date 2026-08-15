import { useEffect, useState } from 'react'
import useScrollSpy from '../../hooks/useScrollSpy'
import logoMain from '../../assets/images/logo-main-white.png'

const LINKS = [
  { href: 'about', label: 'About' },
  { href: 'story', label: 'Story' },
  { href: 'speakers', label: 'Speakers' },
  { href: 'location', label: 'Location' },
  { href: 'faq', label: 'FAQ' },
]

const SECTION_IDS = LINKS.map((l) => l.href)

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    const onResize = () => { if (window.innerWidth > 820) setMenuOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-300 py-4 transition-all duration-350 ease-out ${
          solid ? 'bg-white/88 backdrop-blur-md shadow-[0_1px_0_var(--color-line)] py-3' : 'bg-transparent'
        }`}
        id="nav"
      >
        <div className="wrap flex items-center justify-between gap-5">
          <a href="#top">
            <img className="h-[30px] w-auto" src={logoMain} alt="Growth Conference" />
          </a>
          <nav className="hidden nav:flex items-center gap-7.5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`text-[0.86rem] font-semibold transition-[opacity,color] duration-300 hover:opacity-100 ${
                  activeId === link.href
                    ? solid ? 'text-blue opacity-100' : 'text-gold opacity-100'
                    : solid ? 'text-ink opacity-80' : 'text-white opacity-80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://live.provinear.com/e/growth-conference-3-0/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden nav:inline-flex whitespace-nowrap"
          >
            Register Now
          </a>
          <button
            className="nav:hidden relative z-220 w-9 h-[30px] bg-none border-none cursor-pointer flex flex-col justify-between py-0.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-full rounded-sm transition-[transform,opacity,background] duration-300 ease-out ${
                solid && !menuOpen ? 'bg-ink' : 'bg-white'
              } ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-full rounded-sm transition-[transform,opacity,background] duration-300 ease-out ${
                solid && !menuOpen ? 'bg-ink' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-full rounded-sm transition-[transform,opacity,background] duration-300 ease-out ${
                solid && !menuOpen ? 'bg-ink' : 'bg-white'
              } ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
            ></span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-210 bg-ink text-white flex flex-col justify-between px-8 pt-[110px] pb-10 transition-transform duration-400 ease-[cubic-bezier(.2,.9,.25,1)] ${
          menuOpen ? 'translate-y-0 visible' : '-translate-y-full invisible'
        }`}
        id="mobileMenu"
      >
        <nav className="flex flex-col gap-1.5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="font-display uppercase text-[1.6rem] xs:text-[2rem] py-3.5 border-b border-white/12 text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-5 flex-col-reverse items-stretch xs:flex-row xs:items-center">
          <div className="slashes self-center xs:self-auto"><span></span><span></span><span></span></div>
          <a
            href="https://live.provinear.com/e/growth-conference-3-0/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-blue flex-1"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  )
}
