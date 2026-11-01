'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'

type Photo = WeddingConfig['gallery'][0]

interface Props {
  photos: Photo[]
}

const CATEGORIES = ['all', 'hotel', 'venue', 'event', 'decor']

export default function Gallery({ photos }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null)

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  const availableCategories = CATEGORIES.filter(
    (c) => c === 'all' || photos.some((p) => p.category === c)
  )

  const openLightbox = useCallback((photo: Photo) => setLightboxPhoto(photo), [])
  const closeLightbox = useCallback(() => setLightboxPhoto(null), [])

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightboxPhoto) return
    const idx = filtered.findIndex((p) => p.id === lightboxPhoto.id)
    const next = filtered[(idx + dir + filtered.length) % filtered.length]
    setLightboxPhoto(next)
  }, [lightboxPhoto, filtered])

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-[#8B7355] tracking-[0.4em] text-xs uppercase mb-3">Venue & Events</p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#3D2B1F] mb-2">Gallery</h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
          <span className="text-[#D4A017] text-lg">✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full font-body text-sm capitalize transition-all duration-300"
              style={
                activeCategory === cat
                  ? {
                      background: 'linear-gradient(135deg, #D4A017, #B8860B)',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(212,160,23,0.4)',
                    }
                  : {
                      background: 'transparent',
                      color: '#8B7355',
                      border: '1px solid rgba(212,160,23,0.3)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
        layout
      >
        <AnimatePresence>
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(photo)}
              style={{ border: '2px solid rgba(212,160,23,0.15)' }}
            >
              <Image
                src={photo.thumb}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="text-white text-xs font-body tracking-wider">View</span>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#E8C96B] text-lg">✦</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(10,4,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl z-10"
              style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.4)' }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl z-10"
              style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.4)' }}
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl z-10"
              style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.4)' }}
              aria-label="Next"
            >
              ›
            </button>

            {/* Image */}
            <motion.div
              key={lightboxPhoto.id}
              className="relative max-w-2xl w-full max-h-[80vh]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: '4/3',
                  border: '2px solid rgba(212,160,23,0.4)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                }}
              >
                <Image
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <p className="text-center font-body text-[#E8C96B] text-sm mt-3 tracking-wide capitalize">
                {lightboxPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
