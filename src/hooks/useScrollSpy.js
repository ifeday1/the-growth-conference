import { useEffect, useState } from 'react'

/** Tracks which section id is currently in view, for nav-link highlighting. */
export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((sec) => io.observe(sec))
    return () => io.disconnect()
  }, [sectionIds])

  return activeId
}
