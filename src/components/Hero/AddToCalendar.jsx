import { useEffect, useMemo, useRef, useState } from 'react'

const EVENT = {
  title: 'Growth Conference 3.0',
  location: 'University of Ibadan, Ibadan, Oyo State, Nigeria',
  description: 'Growth Conference 3.0, hosted by The Eben Initiative. Full schedule and start time will be emailed to registered participants.',
  startDate: '20261003',
  endDate: '20261004', // exclusive, all-day event
}

function downloadIcs() {
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Growth Conference//EN', 'BEGIN:VEVENT',
    `UID:${Date.now()}@growthconference`,
    `DTSTAMP:${EVENT.startDate}T000000Z`,
    `DTSTART;VALUE=DATE:${EVENT.startDate}`,
    `DTEND;VALUE=DATE:${EVENT.endDate}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:${EVENT.description}`,
    `LOCATION:${EVENT.location}`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'growth-conference-3.ics'
  link.click()
  URL.revokeObjectURL(link.href)
}

export default function AddToCalendar() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  const googleUrl = useMemo(() => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: EVENT.title,
      dates: `${EVENT.startDate}/${EVENT.endDate}`,
      details: EVENT.description,
      location: EVENT.location,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  return (
    <div className="relative inline-block mt-4.5" ref={wrapRef}>
      <button
        className="bg-none border border-white/25 text-white rounded-full py-2.5 px-4.5 text-[0.78rem] font-bold cursor-pointer inline-flex items-center gap-2 transition-[border-color,background] duration-200 hover:border-white/50 hover:bg-white/6"
        aria-expanded={open}
        aria-controls="calMenu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-display text-gold">+</span> Add to Calendar
      </button>
      <div
        className={`absolute top-[calc(100%+8px)] left-0 z-20 min-w-[200px] bg-white rounded-[14px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-[opacity,transform,visibility] duration-200 ease-out ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1.5'
        }`}
        id="calMenu"
      >
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2.5 px-3 rounded-lg text-[0.85rem] font-semibold text-ink hover:bg-paper-warm"
        >
          Google Calendar
        </a>
        <a
          href="#"
          className="block py-2.5 px-3 rounded-lg text-[0.85rem] font-semibold text-ink hover:bg-paper-warm"
          onClick={(e) => { e.preventDefault(); downloadIcs() }}
        >
          Apple / Outlook (.ics)
        </a>
      </div>
    </div>
  )
}
