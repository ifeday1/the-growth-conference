import { useMemo } from 'react'

const BAR_COLORS = ['#fb96ec', '#f3bd31', '#0047ff', '#28d8ea']
const BAR_COUNT = 34

/** Ambient animated "growth bars" background — an organic skyline that
 *  grows in on load, then settles into a gentle infinite breathing pulse. */
export default function GrowthBars() {
  const bars = useMemo(() => {
    return Array.from({ length: BAR_COUNT }, (_, i) => {
      const t = i / (BAR_COUNT - 1)
      const wave = Math.sin(t * Math.PI * 2.3) * 22 + Math.sin(t * Math.PI * 5.1) * 10
      const height = Math.max(18, Math.min(96, 52 + wave + (Math.random() * 10 - 5)))
      const growDelay = i * 0.045
      const growDur = 1.1 + Math.random() * 0.4
      const breatheDelay = growDelay + growDur
      const breatheDur = 2.8 + Math.random() * 2.6

      return {
        key: i,
        style: {
          height: `${height}%`,
          background: BAR_COLORS[i % BAR_COLORS.length],
          animationName: 'grow, breathe',
          animationDuration: `${growDur}s, ${breatheDur}s`,
          animationTimingFunction: 'cubic-bezier(.2,.9,.25,1), ease-in-out',
          animationDelay: `${growDelay}s, ${breatheDelay}s`,
          animationIterationCount: '1, infinite',
          animationFillMode: 'forwards, none',
        },
      }
    })
  }, [])

  return (
    <div className="absolute inset-0 z-0 opacity-[0.22] sm:opacity-[0.35] flex items-end justify-between gap-[clamp(4px,1.1vw,12px)] px-[4%]">
      {bars.map((bar) => (
        <span
          key={bar.key}
          className="block w-[clamp(6px,1.3vw,15px)] rounded-t-md origin-bottom transform-[scaleY(0)]"
          style={bar.style}
        />
      ))}
    </div>
  )
}
