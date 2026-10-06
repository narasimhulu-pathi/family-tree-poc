import { useEffect, useRef, useState } from 'react'
import type { Stat } from '../../data/stats'

interface StatCounterProps {
  stat: Stat
}

export default function StatCounter({ stat }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = stat.value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= stat.value) {
              setCount(stat.value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [stat.value, hasAnimated])

  const display = stat.value >= 1000 ? count.toLocaleString('en-IN') : count.toString()

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-heading text-4xl md:text-5xl font-bold text-primary">{display}</span>
        <span className="font-heading text-2xl font-bold text-accent">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-text-muted font-medium text-sm uppercase tracking-wide">{stat.label}</p>
    </div>
  )
}
