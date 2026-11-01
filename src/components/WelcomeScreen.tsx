'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'

interface Props {
  config: WeddingConfig
  onEnter: () => void
}

const seededValue = (index: number) => {
  const value = Math.sin(index * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

// Floating petal component
function Petal({ delay, x, size, duration, color, driftX, rotateOffset }: {
  delay: number; x: number; size: number; duration: number; color: string; driftX: number; rotateOffset: number
}) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${x}%`, top: -20, fontSize: size, opacity: 0 }}
      animate={{
        y: ['0vh', '110vh'],
        rotate: [0, 360 + rotateOffset],
        x: [0, driftX],
        opacity: [0, 0.8, 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {color}
    </motion.div>
  )
}

const PETALS = Array.from({ length: 20 }, (_, i) => {
  const seedA = seededValue(i + 7)
  const seedB = seededValue(i + 11)
  const seedC = seededValue(i + 19)

  return {
    id: i,
    delay: i * 0.6,
    x: seedA * 100,
    size: 14 + seedB * 14,
    duration: 7 + seedC * 6,
    color: ['🌸', '🌺', '🌹', '✿', '❀'][Math.floor(seedA * 5)],
    driftX: (seedB - 0.5) * 80,
    rotateOffset: seedC * 360,
  }
})

// Floating particle dot
function Particle({ delay, x, y, duration, driftY }: { delay: number; x: number; y: number; duration: number; driftY: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: 'radial-gradient(circle, #E8C96B, #D4A017)',
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.7, 0],
        scale: [0.5, 1.5, 0.5],
        y: [0, driftY, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const PARTICLES = Array.from({ length: 30 }, (_, i) => {
  const seedA = seededValue(i + 3)
  const seedB = seededValue(i + 17)

  return {
    id: i,
    delay: i * 0.3,
    x: seedA * 100,
    y: seedB * 100,
    duration: 3 + seededValue(i + 29) * 2,
    driftY: -30 - seededValue(i + 41) * 20,
  }
})

export default function WelcomeScreen({ config, onEnter }: Props) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (clicked) return
    setClicked(true)
    setTimeout(onEnter, 300)
  }

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1d1208 0%, #3a2615 22%, #2d1d12 42%, #1b120b 68%, #120d09 100%)',
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(212,160,23,0.17) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(212,160,23,0.13) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(212,160,23,0.16) 0%, transparent 50%)`,
        }}
      />

      {/* Minimal mosque motif */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-60 z-0">
        <svg width="180" height="110" viewBox="0 0 180 110" fill="none" aria-hidden="true">
          <path d="M35 74V47c0-12 10-22 22-22h18c12 0 22 10 22 22v27M83 74V38c0-10 8-18 18-18h11c10 0 18 8 18 18v36M24 74h132" stroke="rgba(212,160,23,0.64)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M75 39c0-10 8-18 18-18s18 8 18 18v7H75v-7Z" fill="rgba(230,201,131,0.16)" stroke="rgba(212,160,23,0.7)" strokeWidth="2" />
          <path d="M57 74V52c0-8 6-14 14-14h10v36H57Z" fill="rgba(212,160,23,0.08)" />
          <path d="M111 74V52c0-8-6-14-14-14h-10v36h24Z" fill="rgba(212,160,23,0.08)" />
          <path d="M90 17v-8M78 22h24" stroke="rgba(212,160,23,0.72)" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 82h56" stroke="rgba(212,160,23,0.56)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative corner ornaments */}
      <div className="absolute top-4 left-4 text-[#E9C670] text-2xl opacity-70 select-none">❧</div>
      <div className="absolute top-4 right-4 text-[#E9C670] text-2xl opacity-70 rotate-y-180 select-none" style={{transform:'scaleX(-1)'}}>❧</div>
      <div className="absolute bottom-4 left-4 text-[#E9C670] text-2xl opacity-70 select-none" style={{transform:'scaleY(-1)'}}>❧</div>
      <div className="absolute bottom-4 right-4 text-[#E9C670] text-2xl opacity-70 select-none" style={{transform:'scale(-1)'}}>❧</div>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Falling petals */}
      {PETALS.map((p) => (
        <Petal key={p.id} {...p} />
      ))}

      {/* Top text */}
      <motion.div
        className="text-center mb-10 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
      >
        <p className="font-arabic text-[#F4E0A3] text-3xl md:text-4xl mb-2 leading-none">
          آپ کو دعوت ہے
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
          <span className="text-[#E9C670] text-lg">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>
      </motion.div>

      {/* Main Welcome Circle */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Outer glow rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[180, 210, 240].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#D4A017] opacity-20"
              style={{ width: size, height: size }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2.5 + i * 0.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Ripple effect on hover */}
        {hovered && (
          <motion.div
            className="absolute rounded-full border-2 border-[#E8C96B]"
            style={{ width: 160, height: 160 }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}

        {/* Main circle button */}
        <motion.button
          onClick={handleClick}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileTap={{ scale: 0.95 }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full cursor-pointer select-none focus:outline-none"
          style={{
            background: 'linear-gradient(145deg, rgba(212,160,23,0.18), rgba(170,120,40,0.26))',
            border: '2px solid rgba(233,198,112,0.78)',
            boxShadow: hovered
              ? '0 0 60px rgba(212,160,23,0.8), 0 0 120px rgba(212,160,23,0.4), inset 0 0 40px rgba(212,160,23,0.12)'
              : '0 0 30px rgba(212,160,23,0.5), 0 0 60px rgba(212,160,23,0.2), inset 0 0 20px rgba(212,160,23,0.08)',
          }}
          animate={{
            boxShadow: [
              '0 0 30px rgba(212,160,23,0.5), 0 0 60px rgba(212,160,23,0.2)',
              '0 0 50px rgba(212,160,23,0.8), 0 0 100px rgba(212,160,23,0.4)',
              '0 0 30px rgba(212,160,23,0.5), 0 0 60px rgba(212,160,23,0.2)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Enter Wedding Invitation"
        >
          {/* Inner decorative ring */}
          <div
            className="absolute inset-3 rounded-full"
            style={{ border: '1px solid rgba(233,198,112,0.55)' }}
          />

          {/* Text content */}
          <div className="flex flex-col items-center justify-center h-full gap-1.5">
            <span className="text-[#F5D98B] text-sm font-arabic tracking-[0.08em]">بِسْمِ</span>
            <span className="text-[#F8F2DF] text-lg tracking-[0.3em] font-serif-display font-light">
              WELCOME
            </span>
            <div className="w-8 h-px bg-[#E9C670] my-1 opacity-70" />
            <div className="flex items-center gap-3">
              <span className="text-[#F5D98B] text-base">☪</span>
              <span className="text-[#D62B2B] text-2xl leading-none drop-shadow-[0_0_10px_rgba(214,43,43,0.6)]">♥</span>
              <span className="text-[#F5D98B] text-base">☪</span>
            </div>
          </div>
        </motion.button>

        {/* Tap to enter text */}
        <motion.p
          className="mt-8 text-[#F4E0A3] font-body tracking-widest text-sm uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦ Tap to Enter ✦
        </motion.p>
      </motion.div>

      {/* Couple names below */}
      <motion.div
        className="text-center mt-10 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
          <span className="text-[#E9C670] text-lg">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>
        <p className="font-script text-[#F8F2DF] text-3xl md:text-4xl mt-3">
          {config.groom.shortName} & {config.bride.shortName}
        </p>
        <p className="font-body text-[#F5D98B] text-sm tracking-widest mt-2 uppercase">
          15 جون 2025
        </p>
      </motion.div>

      {/* Music button (corner) */}
      <motion.div
        className="absolute bottom-6 left-6 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {config.musicUrl && (
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#D4A017] text-lg"
            style={{
              background: 'rgba(169,198,171,0.12)',
              border: '1px solid rgba(169,198,171,0.35)',
            }}
            aria-label="Music will play after entering"
            title="Music will play after you enter"
          >
            🎵
          </button>
        )}
      </motion.div>
    </motion.div>
  )
}
