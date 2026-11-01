// ============================================================
// WEDDING CONFIGURATION FILE
// Edit all your wedding details here — no need to touch the UI components.
// ============================================================

export const weddingConfig = {
  // ── Couple ────────────────────────────────────────────────
  groom: {
    name: 'Sarfaraj Ahamed',
    shortName: 'Sarfaraj',
  },
  bride: {
    name: 'Ayesha Rahman',
    shortName: 'Ayesha',
  },

  // ── Wedding Date & Time ───────────────────────────────────
  // IMPORTANT: Update this to the actual wedding date/time (ISO 8601, local timezone)
  weddingDateTime: '2027-06-15T18:00:00',
  weddingDate: 'June 15, 2027',
  weddingDay: 'Sunday',
  weddingTime: '6:00 PM',

  // ── Venue ─────────────────────────────────────────────────
  venue: {
    name: 'Birgunj Party Palace & Hotel',
    address: '2V4F+P8X, Adarshnagar Panitanki-3, Birgunj 44300',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    googleMapsUrl: 'https://share.google/efM7kWHzmjMzfgFNj',
  },

  // ── Wedding Message ───────────────────────────────────────
  message:
    'بِسْمِ اللہِ الرَّحْمٰنِ الرَّحِيم\nہم آپ کو اپنی شادی کے خصوصی دن پر دعوت دینے کے لیے خوش ہیں۔ آپ کی موجودگی ہمارے دلوں کو اور زیادہ خوش اور مبارک بنائے گی۔',

  // ── URL ───────────────────────────────────────────────────
  // Update this to your actual deployed URL
  invitationUrl: 'https://yourdomain.com/wedding/sarfaraj-and-ayesha',
  slug: 'sarfaraj-and-ayesha',

  // ── Events Timeline ───────────────────────────────────────
  events: [
    {
      id: 1,
      name: 'Nikah Ceremony',
      icon: '🕌',
      date: 'June 15, 2027',
      time: '11:00 AM – 1:00 PM',
      location: 'Al-Noor Mosque',
      address: '45 Mosque Street, Chennai 600002',
      description: 'The sacred Nikah ceremony uniting two hearts.',
    },
    {
      id: 2,
      name: 'Wedding Reception',
      icon: '💍',
      date: 'June 15, 2027',
      time: '6:00 PM – 11:00 PM',
      location: 'The Grand Palace Ballroom',
      address: '123 Rose Garden Avenue, Chennai 600001',
      description: 'An elegant evening of celebration, dinner, and joy.',
    },
    {
      id: 3,
      name: 'Walima Celebration',
      icon: '🌹',
      date: 'June 16, 2027',
      time: '12:00 PM – 4:00 PM',
      location: 'Family Residence',
      address: '78 Garden Lane, Chennai 600010',
      description: 'A warm gathering with family and close friends.',
    },
  ],

  // ── Gallery Photos ────────────────────────────────────────
  // Replace these with your own image URLs or local paths under /public/images/
  gallery: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
      alt: 'Wedding venue exterior',
      category: 'hotel',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      alt: 'Wedding celebration stage',
      category: 'venue',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
      alt: 'Floral décor and table styling',
      category: 'decor',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1519167758481-83f550bbeb3b?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1519167758481-83f550bbeb3b?auto=format&fit=crop&w=600&q=80',
      alt: 'Hall ceremony setup',
      category: 'event',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury wedding décor',
      category: 'decor',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      alt: 'Reception room interior',
      category: 'venue',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80',
      alt: 'Hotel reception and lobby',
      category: 'hotel',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      alt: 'Resort venue exterior',
      category: 'hotel',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      alt: 'Wedding ceremony backdrop',
      category: 'event',
    },
  ],

  // ── Photos ────────────────────────────────────────────────
  // Replace with your actual photos in /public/images/
  photos: {
    groom: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    bride: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    couple: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },

  // ── Music ─────────────────────────────────────────────────
  // Add a link to your wedding music (mp3 or audio file hosted online)
  // Leave empty string to disable music
  musicUrl: '',
  musicTitle: 'Our Song',

  // ── Theme Colors (for reference, edit tailwind.config.js for actual CSS) ──
  theme: {
    primary: '#D4A017',   // Gold
    secondary: '#8B6914', // Dark gold
    background: '#FDF8F0', // Cream
    text: '#3D2B1F',      // Dark brown
    accent: '#B76E79',    // Rose gold
  },

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: "Sarfaraj & Ayesha's Wedding Invitation",
    description:
      "We joyfully invite you to celebrate our wedding. Join us for our special day on June 15, 2027.",
    ogImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
  },
}

export type WeddingConfig = typeof weddingConfig
