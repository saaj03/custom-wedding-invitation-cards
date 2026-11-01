'use client'

import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { WeddingConfig } from '@/config/wedding'
import WelcomeScreen from './WelcomeScreen'
import OpeningAnimation from './OpeningAnimation'
import WeddingInvitation from './WeddingInvitation'
import Countdown from './Countdown'
import EventTimeline from './EventTimeline'
import VenueSection from './VenueSection'
import Gallery from './Gallery'
import QRGenerator from './QRGenerator'
import ShareButton from './ShareButton'
import MusicPlayer from './MusicPlayer'
import FloralDivider from './FloralDivider'

type Stage = 'welcome' | 'opening' | 'invitation'

interface Props {
  config: WeddingConfig
}

export default function WeddingPage({ config }: Props) {
  const [stage, setStage] = useState<Stage>('welcome')
  const [musicStarted, setMusicStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleWelcomeClick = () => {
    setStage('opening')
    // Start music on user interaction
    if (config.musicUrl && !musicStarted) {
      setMusicStarted(true)
    }
  }

  const handleOpeningComplete = () => {
    setStage('invitation')
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <WelcomeScreen
            key="welcome"
            config={config}
            onEnter={handleWelcomeClick}
          />
        )}
        {stage === 'opening' && (
          <OpeningAnimation
            key="opening"
            onComplete={handleOpeningComplete}
          />
        )}
      </AnimatePresence>

      {stage === 'invitation' && (
        <div className="relative">
          {/* Music Player - floating */}
          {config.musicUrl && (
            <MusicPlayer
              musicUrl={config.musicUrl}
              title={config.musicTitle}
              autoPlay={musicStarted}
              audioRef={audioRef}
            />
          )}

          {/* Share Button - floating */}
          <ShareButton config={config} />

          {/* Main Invitation Card */}
          <section id="invitation">
            <WeddingInvitation config={config} />
          </section>

          {/* Countdown */}
          <section id="countdown" className="section-padding bg-[#FDF8F0]">
            <Countdown weddingDateTime={config.weddingDateTime} />
          </section>

          <FloralDivider />

          {/* Events Timeline */}
          <section id="events" className="section-padding">
            <EventTimeline events={config.events} />
          </section>

          <FloralDivider />

          {/* Venue */}
          <section id="venue" className="section-padding bg-[#FDF8F0]">
            <VenueSection venue={config.venue} />
          </section>

          <FloralDivider />

          {/* Gallery */}
          <section id="gallery" className="section-padding">
            <Gallery photos={config.gallery} />
          </section>

          <FloralDivider />

          {/* QR Code */}
          <section id="qr" className="section-padding">
            <QRGenerator url={config.invitationUrl} config={config} />
          </section>

          {/* Footer */}
          <footer className="text-center py-12 px-4">
            <p className="font-script text-4xl gold-text mb-2">
              {config.groom.shortName} & {config.bride.shortName}
            </p>
            <p className="font-body text-sm text-[#8B7355] tracking-widest uppercase">
              {config.weddingDate} · {config.weddingDay}
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-px" style={{background: 'linear-gradient(90deg, transparent, #D4A017, transparent)'}} />
            </div>
            <p className="font-body text-xs text-[#8B7355] mt-4">Made with ♥ for a love that lasts forever</p>
          </footer>
        </div>
      )}
    </main>
  )
}
