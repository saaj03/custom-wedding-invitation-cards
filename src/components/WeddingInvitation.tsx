'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { WeddingConfig } from '@/config/wedding'

interface Props {
  config: WeddingConfig
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }
}

function getTimeLeft(targetDate: string) {
  const now = new Date().getTime()
  const target = new Date(targetDate).getTime()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function WeddingInvitation({ config }: Props) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(config.weddingDateTime))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(config.weddingDateTime))
    }, 1000)

    return () => clearInterval(interval)
  }, [config.weddingDateTime])
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background: 'linear-gradient(180deg, #FDF8F0 0%, #FAF2E0 50%, #F5E6C8 100%)',
      }}
    >
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Card */}
        <motion.div
          className="invitation-card rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.92, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Top border ornament */}
          <div className="h-1.5 w-full" style={{background: 'linear-gradient(90deg, transparent, #D4A017, #E8C96B, #D4A017, transparent)'}} />

          <div className="px-8 md:px-12 py-12">
            {/* Header */}
            <motion.div className="text-center mb-8" {...fadeUp(0.1)}>
              <p className="font-body text-[#5F7A63] tracking-[0.35em] text-xs uppercase mb-3">
                بِسْمِ اللہِ الرَّحْمٰنِ الرَّحِيم
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1" style={{background: 'linear-gradient(90deg, transparent, #7A9C78)'}} />
                <span className="text-[#7A9C78] text-xl">✦</span>
                <div className="h-px flex-1" style={{background: 'linear-gradient(90deg, #7A9C78, transparent)'}} />
              </div>
            </motion.div>

            {/* Couple names */}
            <motion.div className="text-center mb-8" {...fadeUp(0.2)}>
              <h1 className="font-script text-[#2F4F3A] text-5xl md:text-6xl leading-tight mb-1">
                {config.groom.name}
              </h1>
              <motion.div
                className="flex items-center justify-center gap-4 my-4"
                {...fadeUp(0.3)}
              >
                <div className="h-px w-12" style={{background:'linear-gradient(90deg,transparent,#7A9C78)'}} />
                <span className="font-script text-[#5F7A63] text-3xl">&amp;</span>
                <div className="h-px w-12" style={{background:'linear-gradient(90deg,#7A9C78,transparent)'}} />
              </motion.div>
              <h1 className="font-script text-[#2F4F3A] text-5xl md:text-6xl leading-tight">
                {config.bride.name}
              </h1>
            </motion.div>

            {/* Couple photos */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-8"
              {...fadeUp(0.4)}
            >
              {/* Groom photo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden"
                  style={{ border: '3px solid #7A9C78', boxShadow: '0 8px 25px rgba(122,156,120,0.3)' }}
                >
                  <Image
                    src={config.photos.groom}
                    alt={`${config.groom.name} - Groom`}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <span className="font-body text-[#8B7355] text-sm tracking-wide">
                  {config.groom.shortName}
                </span>
              </div>

              {/* Center heart/ornament */}
              <div className="flex flex-col items-center">
                <span className="text-[#D72626] text-4xl drop-shadow-[0_0_12px_rgba(215,38,38,0.35)]">♥</span>
              </div>

              {/* Bride photo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden"
                  style={{ border: '3px solid #7A9C78', boxShadow: '0 8px 25px rgba(122,156,120,0.3)' }}
                >
                  <Image
                    src={config.photos.bride}
                    alt={`${config.bride.name} - Bride`}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <span className="font-body text-[#8B7355] text-sm tracking-wide">
                  {config.bride.shortName}
                </span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div className="gold-divider" {...fadeUp(0.7)}>
              <span className="text-[#5F7A63] text-sm tracking-widest font-body uppercase">
                ✦ آپ کو دعوت ہے ✦
              </span>
            </motion.div>

            {/* Invitation text */}
            <motion.p
              className="text-center font-body text-[#3F5644] text-lg leading-relaxed mb-8"
              {...fadeUp(0.6)}
            >
              ہم آپ کو اپنے نیک دن پر دعوت دینے کے لیے خوش ہیں
            </motion.p>

            {/* Date, Time, Venue card */}
            <motion.div
              className="rounded-2xl p-6 mb-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(122,156,120,0.08), rgba(217,238,216,0.2))',
                border: '1px solid rgba(122,156,120,0.25)',
              }}
              {...fadeUp(0.65)}
            >
              <p className="font-serif-display text-[#254432] text-2xl md:text-3xl font-semibold mb-1">
                15 جون 2025
              </p>
              <p className="font-body text-[#5F7A63] tracking-widest text-sm uppercase mb-4">
                جمعہ
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10" style={{background:'linear-gradient(90deg,transparent,#7A9C78)'}} />
                <span className="text-[#7A9C78]">✦</span>
                <div className="h-px w-10" style={{background:'linear-gradient(90deg,#7A9C78,transparent)'}} />
              </div>
              <p className="font-body text-[#3F5644] text-xl mb-3">
                🕐 6:00 PM
              </p>
              <p className="font-serif-display text-[#254432] text-lg font-semibold mb-1">
                The Grand Palace Ballroom
              </p>
              <p className="font-body text-[#5F7A63] text-sm leading-relaxed">
                123 Rose Garden Avenue, Chennai, Tamil Nadu 600001, India
              </p>
            </motion.div>

            {/* Wedding message */}
            <motion.div className="text-center" {...fadeUp(0.75)}>
              <div className="gold-divider mb-6">
                <span className="text-[#7A9C78] text-sm">✦</span>
              </div>
              <p className="font-body italic text-[#3F5644] text-base leading-relaxed px-2">
                &ldquo;بِسْمِ اللہِ الرَّحْمٰنِ الرَّحِيم، ہم آپ کو اپنی شادی کے خصوصی دن پر دعوت دینے کے لیے خوش ہیں۔ آپ کی موجودگی ہمارے دلوں کو اور زیادہ خوش اور مبارک بنائے گی۔&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Bottom border ornament */}
          <div className="h-1.5 w-full" style={{background: 'linear-gradient(90deg, transparent, #D4A017, #E8C96B, #D4A017, transparent)'}} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="font-body text-[#8B7355] text-sm tracking-widest uppercase mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#D4A017] text-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
