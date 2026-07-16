import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

function getTimeLeft(targetTime) {
  const diff = Math.max(0, targetTime - Date.now())
  return {
    days: pad(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins: pad(Math.floor((diff % 3600000) / 60000)),
    secs: pad(Math.floor((diff % 60000) / 1000)),
  }
}

/** Live countdown to a target date, ticking every second. */
export default function useCountdown(targetDateString) {
  const [target] = useState(() => new Date(targetDateString).getTime())
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}
