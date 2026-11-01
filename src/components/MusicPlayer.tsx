'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'

interface Props {
  musicUrl: string
  title: string
  autoPlay: boolean
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
}

export default function MusicPlayer({ musicUrl, title, autoPlay, audioRef }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const internalRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!musicUrl) return
    const audio = new Audio(musicUrl)
    audio.loop = true
    audio.volume = 0.5
    internalRef.current = audio
    if (audioRef) audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [musicUrl, audioRef])

  useEffect(() => {
    if (autoPlay && internalRef.current && !isPlaying) {
      internalRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [autoPlay, isPlaying])

  const toggle = useCallback(() => {
    const audio = internalRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [isPlaying])

  if (!musicUrl) return null

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="bg-white rounded-xl px-3 py-2 shadow-lg text-right"
            style={{ border: '1px solid rgba(212,160,23,0.3)' }}
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
          >
            <p className="font-body text-[#5C3D2E] text-xs font-medium">{title}</p>
            <p className="font-body text-[#8B7355] text-xs">
              {isPlaying ? '♫ Now Playing' : 'Tap to play'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #D4A017, #B8860B)',
          boxShadow: isPlaying
            ? '0 0 0 0 rgba(212,160,23,0.4)'
            : '0 4px 15px rgba(212,160,23,0.5)',
        }}
        animate={isPlaying ? {
          boxShadow: [
            '0 0 0 0 rgba(212,160,23,0.4)',
            '0 0 0 10px rgba(212,160,23,0)',
          ]
        } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </motion.button>
    </motion.div>
  )
}
