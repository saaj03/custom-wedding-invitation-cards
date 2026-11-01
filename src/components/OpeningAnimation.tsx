'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

export default function OpeningAnimation({ onComplete }: Props) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: '#1a0a00' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Expanding circle burst */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232,201,107,0.6) 0%, rgba(212,160,23,0.3) 40%, transparent 70%)',
        }}
        initial={{ width: 180, height: 180, opacity: 1 }}
        animate={{ width: '300vw', height: '300vw', opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Light sweep */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,250,230,0.95) 0%, rgba(253,248,240,0.8) 40%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1, 1.5, 3] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1], ease: 'easeOut' }}
      />

      {/* Envelope opening effect */}
      <div className="relative z-10">
        {/* Envelope body */}
        <motion.div
          className="relative"
          style={{ width: 280, height: 200 }}
        >
          {/* Bottom of envelope */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #FDF8F0, #F5E6C8)',
              border: '2px solid rgba(212,160,23,0.4)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 1, 0] }}
            transition={{ duration: 2.5, times: [0, 0.5, 1] }}
          >
            {/* Envelope decorations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-script text-[#D4A017] text-4xl opacity-60">
                  S & A
                </span>
              </div>
            </div>
            {/* Diagonal lines (envelope folds) */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  linear-gradient(135deg, transparent 45%, rgba(212,160,23,0.5) 50%, transparent 55%),
                  linear-gradient(-135deg, transparent 45%, rgba(212,160,23,0.5) 50%, transparent 55%)
                `,
              }}
            />
          </motion.div>

          {/* Envelope flap (top triangle) */}
          <motion.div
            className="absolute top-0 left-0 right-0"
            style={{
              height: '50%',
              transformOrigin: 'top center',
              background: 'linear-gradient(180deg, #F0E0B0, #E8C96B)',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              zIndex: 10,
              borderRadius: '8px 8px 0 0',
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: [0, 0, -180] }}
            transition={{ duration: 2.5, times: [0, 0.3, 0.8], ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Petals burst out */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * 360
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * 200
        const y = Math.sin(rad) * 200
        return (
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x, y, opacity: [0, 1, 0], scale: [0, 1, 0.5] }}
            transition={{ duration: 1.5, delay: 0.8 + i * 0.05, ease: 'easeOut' }}
          >
            {['🌸', '🌺', '✿', '❀', '🌹'][i % 5]}
          </motion.div>
        )
      })}

      {/* Text that fades in */}
      <motion.div
        className="absolute bottom-24 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
        transition={{ duration: 3, times: [0, 0.3, 0.8, 1] }}
      >
        <p className="font-script text-[#D4A017] text-3xl">Opening your invitation...</p>
      </motion.div>
    </motion.div>
  )
}
