import CountUp from '../CountUp'

const numClass = 'font-display text-2xl sm:text-[2rem]'
const lblClass = 'text-[0.78rem] opacity-60 mt-1'

export default function Stats() {
  return (
    <div className="bg-ink text-white border-t border-white/10 py-6 sm:py-[30px] relative z-2">
      <div className="wrap flex justify-start sm:justify-between flex-wrap gap-7 sm:gap-6">
        <div className="flex-1 min-w-[140px]">
          <CountUp to={1500} suffix="+" className="text-gold" />
          <div className={lblClass}>Expected Attendees</div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <CountUp to={3} suffix="rd" className="text-pink" />
          <div className={lblClass}>Annual Edition</div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <div className={`${numClass} text-cyan`}>Free</div>
          <div className={lblClass}>To Attend</div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <div className={`${numClass} text-white`}>UI</div>
          <div className={lblClass}>Alumni Hall, UI, Ibadan</div>
        </div>
      </div>
    </div>
  )
}
