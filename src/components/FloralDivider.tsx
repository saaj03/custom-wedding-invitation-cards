'use client'

import { motion } from 'framer-motion'

export default function FloralDivider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 py-2 px-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
      <span className="text-[#D4A017] text-lg">🌸</span>
      <span className="text-[#D4A017] text-sm">✦</span>
      <span className="font-script text-[#D4A017] text-2xl">❦</span>
      <span className="text-[#D4A017] text-sm">✦</span>
      <span className="text-[#D4A017] text-lg">🌸</span>
      <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
    </motion.div>
  )
}
