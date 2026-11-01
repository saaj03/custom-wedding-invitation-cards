'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'

interface Props {
  venue: WeddingConfig['venue']
}

export default function VenueSection({ venue }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-[#8B7355] tracking-[0.4em] text-xs uppercase mb-3">Find Us At</p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#3D2B1F] mb-2">Wedding Venue</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
          <span className="text-[#D4A017] text-lg">✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
        </div>
      </motion.div>

      <motion.div
        className="rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(253,248,240,0.9))',
          border: '1px solid rgba(212,160,23,0.25)',
          boxShadow: '0 20px 50px rgba(212,160,23,0.12)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Venue image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={venue.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'}
            alt={venue.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 760px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
            <div>
              <p className="font-body text-[#F6E8B8] tracking-[0.25em] text-[10px] uppercase">Wedding Location</p>
            </div>
            <div className="rounded-full border border-white/40 bg-white/10 px-2 py-1 backdrop-blur-sm">
              <span className="text-white text-xs font-body tracking-widest uppercase">Venue</span>
            </div>
          </div>
        </div>

        <div className="p-7 text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, #D4A017, #B8860B)', boxShadow: '0 4px 15px rgba(212,160,23,0.4)' }}
          >
            <span className="text-white text-xl">📍</span>
          </div>

          <h3 className="font-serif-display text-2xl text-[#3D2B1F] font-semibold mb-2">
            {venue.name}
          </h3>
          <p className="font-body text-[#8B7355] text-base leading-relaxed mb-6">
            {venue.address}
          </p>

          <motion.a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wedding-btn inline-flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>📍</span>
            <span>Open in Google Maps</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
