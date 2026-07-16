import useCountdown from '../../hooks/useCountdown'

export default function Countdown() {
  const { days, hours, mins, secs } = useCountdown('2026-10-03T09:00:00+01:00')

  const boxClass = 'bg-white/6 border border-white/15 rounded-[14px] px-3.5 py-3 sm:px-5 sm:py-4 min-w-[66px] sm:min-w-[84px] text-center'
  const numClass = 'font-display text-[1.5rem] sm:text-[2rem] block leading-none'
  const lblClass = 'text-[0.66rem] tracking-[0.1em] uppercase opacity-60 mt-1.5 block'

  return (
    <div className="flex gap-2.5 sm:gap-3.5 flex-wrap">
      <div className={boxClass}><span className={numClass}>{days}</span><span className={lblClass}>Days</span></div>
      <div className={boxClass}><span className={numClass}>{hours}</span><span className={lblClass}>Hours</span></div>
      <div className={boxClass}><span className={numClass}>{mins}</span><span className={lblClass}>Minutes</span></div>
      <div className={boxClass}><span className={numClass}>{secs}</span><span className={lblClass}>Seconds</span></div>
      <div className={`${boxClass} basis-full xs:basis-auto border-gold/40 bg-gold/8`}>
        <span className={`${numClass} text-gold`}>Oct 3</span>
        <span className={lblClass}>2026 · Ibadan</span>
      </div>
    </div>
  )
}
