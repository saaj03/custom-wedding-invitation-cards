'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  weddingDateTime: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

function getTimeLeft(targetDate: string): TimeLeft {
  const now = new Date().getTime()
  const target = new Date(targetDate).getTime()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isPast: false,
  }
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="countdown-box min-w-[70px] md:min-w-[90px]"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.span
        key={value}
        className="font-serif-display text-3xl md:text-5xl font-bold gold-text block"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="font-body text-[#8B7355] text-xs tracking-widest uppercase mt-1">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown({ weddingDateTime }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(weddingDateTime))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDateTime))
    }, 1000)
    return () => clearInterval(interval)
  }, [weddingDateTime])

  return (
    <div className="max-w-2xl mx-auto text-center px-4">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-[#8B7355] tracking-[0.4em] text-xs uppercase mb-3">
          Counting Down To
        </p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#3D2B1F] mb-2">
          The Big Day
        </h2>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
          <span className="text-[#D4A017] text-lg">✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
        </div>
      </motion.div>

      {timeLeft.isPast ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="py-8"
        >
          <div className="text-6xl mb-4">🎊</div>
          <h3 className="font-script text-[#D4A017] text-4xl mb-2">Today is the Wedding Day!</h3>
          <p className="font-body text-[#8B7355] text-lg">
            Congratulations to the beautiful couple! 🎉
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="flex items-center justify-center gap-3 md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CountdownBox value={timeLeft.days} label="Days" />
          <span className="font-serif-display text-[#D4A017] text-2xl md:text-3xl font-light pb-4">:</span>
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <span className="font-serif-display text-[#D4A017] text-2xl md:text-3xl font-light pb-4">:</span>
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <span className="font-serif-display text-[#D4A017] text-2xl md:text-3xl font-light pb-4">:</span>
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      )}

      <motion.p
        className="font-body italic text-[#8B7355] text-sm mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        ✦ Every second brings us closer to forever ✦
      </motion.p>
    </div>
  )
}
