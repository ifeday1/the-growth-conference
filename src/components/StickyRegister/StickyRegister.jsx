import { useEffect, useState } from 'react'

export default function StickyRegister() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const target = document.getElementById('register')
    if (!target) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setHidden(entry.isIntersecting))
      },
      { threshold: 0.3 }
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return (
    <a
      href="https://live.provinear.com/e/growth-conference-3-0/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-blue sticky-register fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-300 shadow-[0_16px_40px_rgba(0,0,0,0.35)] animate-[floaty_3s_ease-in-out_infinite] transition-opacity duration-200 text-[0.78rem] sm:text-[0.85rem] py-3 px-5 sm:py-3.5 sm:px-6"
      style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? 'none' : 'auto' }}
    >
      Register Now
    </a>
  )
}
