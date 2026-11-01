# 💍 Digital Wedding Invitation — Sarfaraj & Ayesha

A premium, mobile-first digital wedding invitation website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

| Feature | Status |
|---|---|
| Welcome screen with glowing animated circle | ✅ |
| Falling rose petals + floating gold particles | ✅ |
| Envelope opening animation on "Welcome" click | ✅ |
| Full wedding invitation card with couple photos | ✅ |
| Live countdown timer (auto updates every second) | ✅ |
| Event timeline with animated cards | ✅ |
| Venue section with Google Maps button | ✅ |
| Photo gallery with category filters + lightbox | ✅ |
| RSVP form (Firebase/Supabase ready) | ✅ |
| Optional background music (no autoplay) | ✅ |
| QR Code generator with download + copy link | ✅ |
| Native Web Share API + WhatsApp/Facebook share | ✅ |
| Mobile-first responsive design | ✅ |
| SEO + Open Graph metadata | ✅ |
| `/wedding/[slug]` URL structure | ✅ |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## ⚙️ Customize Your Wedding

**All wedding details are in one file:**

```
src/config/wedding.ts
```

Edit this file to change:
- ✏️ Groom & Bride names
- 📅 Wedding date, day, and time
- 📍 Venue name and address
- 💌 Wedding message
- 📸 Photos (groom, bride, couple, gallery)
- 🎵 Background music URL
- 📅 Events timeline
- 🔗 Invitation URL (after deployment)
- 🎨 Theme colors

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & SEO
│   ├── globals.css         # Global styles & animations
│   ├── page.tsx            # Home page
│   └── wedding/[slug]/
│       └── page.tsx        # /wedding/your-slug route
├── components/
│   ├── WeddingPage.tsx     # Main orchestrator (welcome → animation → invitation)
│   ├── WelcomeScreen.tsx   # Full-screen welcome with glowing circle
│   ├── OpeningAnimation.tsx # Envelope opening transition
│   ├── WeddingInvitation.tsx # Main invitation card
│   ├── Countdown.tsx       # Live countdown timer
│   ├── EventTimeline.tsx   # Wedding events timeline
│   ├── VenueSection.tsx    # Venue with Google Maps link
│   ├── Gallery.tsx         # Photo gallery with lightbox
│   ├── RSVPForm.tsx        # RSVP form (Firebase/Supabase ready)
│   ├── MusicPlayer.tsx     # Floating music player
│   ├── QRGenerator.tsx     # QR code with download
│   ├── ShareButton.tsx     # Native share + social links
│   └── FloralDivider.tsx   # Gold floral section divider
├── config/
│   └── wedding.ts          # ← EDIT THIS FILE
└── lib/
    ├── firebase.ts         # Firebase setup instructions
    └── supabase.ts         # Supabase setup instructions
```

---

## 🗄️ RSVP Backend Setup

### Option A: Firebase Firestore

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a project → Enable **Firestore Database**
3. Copy your config into `src/lib/firebase.ts` (uncomment the code)
4. Run `npm install firebase`
5. In `src/components/RSVPForm.tsx`, replace the `TODO` comment:

```typescript
import { db } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

await addDoc(collection(db, 'rsvp'), {
  ...form,
  guests: Number(form.guests),
  createdAt: serverTimestamp(),
})
```

### Option B: Supabase

1. Go to [Supabase](https://app.supabase.com) → Create project
2. Create `rsvp` table with columns: `name`, `guests`, `attending`, `message`, `created_at`
3. Copy your URL and anon key into `src/lib/supabase.ts`
4. Run `npm install @supabase/supabase-js`
5. In `RSVPForm.tsx`, replace the `TODO` comment:

```typescript
import { supabase } from '@/lib/supabase'

const { error } = await supabase.from('rsvp').insert([{
  name: form.name,
  guests: Number(form.guests),
  attending: form.attending === 'yes',
  message: form.message || null,
}])
if (error) throw error
```

---

## 🌐 Deployment

### Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

After deploying:
1. Copy your Vercel URL (e.g. `https://sarfaraj-and-ayesha.vercel.app`)
2. Update `invitationUrl` in `src/config/wedding.ts`
3. Redeploy → the QR code will automatically point to the correct URL

### Custom Domain

```bash
# In Vercel dashboard → Domains → Add your domain
```

---

## 🎵 Adding Music

1. Host an MP3 file (Google Drive, Cloudinary, or any CDN)
2. Get a direct playable link
3. Set `musicUrl` in `src/config/wedding.ts`

```typescript
musicUrl: 'https://your-cdn.com/wedding-song.mp3',
musicTitle: 'Perfect — Ed Sheeran',
```

> Music will NOT autoplay. It starts after the guest clicks "Welcome".

---

## 📸 Replacing Photos

**Online photos:** Update the Unsplash URLs in `src/config/wedding.ts`

**Local photos:**
1. Place images in `/public/images/`
2. Reference them as `/images/photo.jpg`

```typescript
photos: {
  groom: '/images/groom.jpg',
  bride: '/images/bride.jpg',
  couple: '/images/couple.jpg',
},
```

---

## 🔗 QR Code

After deploying:
1. Open your wedding invitation website
2. Scroll to the **QR Code** section
3. Click **Download QR** — save the PNG
4. Print it on invitation cards, posters, etc.

---

## 📱 Guest Experience Flow

```
SCAN QR CODE
    ↓
WEBSITE OPENS (Welcome Screen — dark romantic, glowing circle)
    ↓
TAP "WELCOME"
    ↓
ENVELOPE OPENING ANIMATION
    ↓
WEDDING INVITATION CARD (names, photos, date, venue)
    ↓
COUNTDOWN TIMER
    ↓
EVENT TIMELINE (Nikah → Reception → Walima)
    ↓
VENUE + GOOGLE MAPS
    ↓
PHOTO GALLERY (with lightbox)
    ↓
RSVP FORM
    ↓
QR CODE + SHARE
```

---

## 🛠️ Tech Stack

- **Next.js 15** — App Router, SSR, Image optimization
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **qrcode.react** — QR code generation
- **Google Fonts** — Playfair Display, Great Vibes, Cormorant Garamond

---

*Made with ♥ for a love that lasts forever.*
