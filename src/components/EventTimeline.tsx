'use client'

import { motion } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'

type Event = WeddingConfig['events'][0]

interface Props {
  events: Event[]
}

export default function EventTimeline({ events }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-[#8B7355] tracking-[0.4em] text-xs uppercase mb-3">
          Join Us For
        </p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#3D2B1F] mb-2">
          Event Details
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
          <span className="text-[#D4A017] text-lg">✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #D4A017, rgba(212,160,23,0.1))' }}
        />

        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="relative pb-10 last:pb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Timeline dot */}
            <div
              className="absolute -left-[18px] top-2 w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #D4A017, #B8860B)',
                boxShadow: '0 0 0 3px rgba(212,160,23,0.2), 0 0 0 6px rgba(212,160,23,0.08)',
              }}
            />

            {/* Event card */}
            <motion.div
              className="ml-4 rounded-2xl p-5"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(253,248,240,0.8))',
                border: '1px solid rgba(212,160,23,0.2)',
                boxShadow: '0 8px 25px rgba(212,160,23,0.08)',
              }}
              whileHover={{ translateY: -2, boxShadow: '0 12px 35px rgba(212,160,23,0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0 mt-0.5">{event.icon}</span>
                <div className="flex-1">
                  <h3 className="font-serif-display text-xl text-[#3D2B1F] font-semibold mb-2">
                    {event.name}
                  </h3>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#D4A017]">📅</span>
                      <span className="font-body text-[#5C3D2E]">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#D4A017]">🕐</span>
                      <span className="font-body text-[#5C3D2E]">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-[#D4A017] mt-0.5">📍</span>
                      <div>
                        <span className="font-body text-[#5C3D2E] font-medium">{event.location}</span>
                        <p className="font-body text-[#8B7355] text-xs mt-0.5">{event.address}</p>
                      </div>
                    </div>
                  </div>
                  {event.description && (
                    <p className="font-body italic text-[#8B7355] text-sm border-t border-[rgba(212,160,23,0.2)] pt-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
