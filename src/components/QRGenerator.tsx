'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import type { WeddingConfig } from '@/config/wedding'

interface Props {
  url: string
  config: WeddingConfig
}

export default function QRGenerator({ url, config }: Props) {
  const [copied, setCopied] = useState(false)
  const qrRef = useRef<HTMLDivElement>(null)

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const input = document.createElement('input')
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [url])

  const downloadQR = useCallback(() => {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return

    const canvas = document.createElement('canvas')
    const size = 400
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const img = new window.Image()
    img.onload = () => {
      ctx.fillStyle = '#FDF8F0'
      ctx.fillRect(0, 0, size, size)
      ctx.drawImage(img, 20, 20, size - 40, size - 40)
      const link = document.createElement('a')
      link.download = `${config.groom.shortName}-${config.bride.shortName}-wedding-qr.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }, [config])

  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-[#8B7355] tracking-[0.4em] text-xs uppercase mb-3">Share Our Day</p>
        <h2 className="font-serif-display text-3xl md:text-4xl text-[#3D2B1F] mb-2">QR Code</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4A017)' }} />
          <span className="text-[#D4A017] text-lg">✦</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, #D4A017, transparent)' }} />
        </div>
      </motion.div>

      <motion.div
        className="rounded-3xl p-7 text-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(253,248,240,0.9))',
          border: '1px solid rgba(212,160,23,0.25)',
          boxShadow: '0 20px 50px rgba(212,160,23,0.1)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="font-body text-[#8B7355] text-sm mb-6 leading-relaxed">
          Scan this QR code to open the wedding invitation on any smartphone.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div
            ref={qrRef}
            className="p-4 rounded-2xl inline-block"
            style={{
              background: '#FDF8F0',
              border: '2px solid rgba(212,160,23,0.3)',
              boxShadow: '0 8px 25px rgba(212,160,23,0.12)',
            }}
          >
            <QRCodeSVG
              value={url}
              size={200}
              level="H"
              bgColor="#FDF8F0"
              fgColor="#3D2B1F"
              includeMargin={false}
            />
          </div>
        </div>

        {/* URL display */}
        <div
          className="rounded-xl px-4 py-3 mb-6 flex items-center gap-2 text-left overflow-hidden"
          style={{ background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)' }}
        >
          <span className="text-[#D4A017] flex-shrink-0">🔗</span>
          <span className="font-body text-[#5C3D2E] text-sm truncate">{url}</span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            onClick={downloadQR}
            className="wedding-btn py-3 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ⬇ Download QR
          </motion.button>

          <motion.button
            onClick={copyLink}
            className="py-3 rounded-full font-serif-display font-semibold tracking-widest text-sm uppercase transition-all duration-300"
            style={{
              background: copied ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'transparent',
              color: copied ? 'white' : '#D4A017',
              border: `2px solid ${copied ? 'transparent' : 'rgba(212,160,23,0.5)'}`,
              boxShadow: copied ? '0 4px 15px rgba(34,197,94,0.3)' : 'none',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={copied ? 'copied' : 'copy'}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
              >
                {copied ? '✓ Copied!' : '📋 Copy Link'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <p className="font-body text-[#8B7355] text-xs mt-5 leading-relaxed">
          💡 Update the URL in <code className="text-[#D4A017]">src/config/wedding.ts</code> after deploying to your domain.
        </p>
      </motion.div>
    </div>
  )
}
