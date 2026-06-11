# 🚕 Shree Momai Cabs — Website

**Premium taxi booking website for Shree Momai Cabs, Dwarka, Gujarat**

Built with React + Vite + Tailwind CSS + Framer Motion

---

## 🏗️ Tech Stack

| Tool             | Version   | Purpose                  |
|------------------|-----------|--------------------------|
| React            | ^18.3.1   | UI Framework             |
| Vite             | ^5.3.4    | Build Tool               |
| Tailwind CSS     | ^3.4.7    | Styling                  |
| Framer Motion    | ^11.3.19  | Animations               |
| Lucide React     | ^0.400.0  | Icons                    |

---

## 📁 Folder Structure

```
shree-momai-cabs/
├── public/
│   ├── logo.png              ← Brand logo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    ← Sticky nav with mobile menu
│   │   │   └── Footer.jsx    ← Full footer with links
│   │   ├── sections/
│   │   │   ├── Hero.jsx          ← Hero with stats bar
│   │   │   ├── About.jsx         ← About with image block
│   │   │   ├── Services.jsx      ← 14 service cards
│   │   │   ├── AirportSection.jsx← Airport transfer section
│   │   │   ├── Fleet.jsx         ← 4 vehicle cards
│   │   │   ├── Destinations.jsx  ← 6 outstation destinations
│   │   │   ├── Testimonials.jsx  ← Auto-sliding carousel
│   │   │   ├── BookingCTA.jsx    ← WhatsApp booking form
│   │   │   ├── FAQ.jsx           ← Animated accordion
│   │   │   └── Contact.jsx       ← Contact cards + strip
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Logo.jsx
│   │       ├── SectionLabel.jsx
│   │       ├── Toast.jsx
│   │       └── FloatingButtons.jsx
│   ├── data/
│   │   └── siteContent.js    ← ✏️ ALL content lives here
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── motionVariants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── netlify.toml
```

---

## 🚀 Getting Started (Local)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Dev Server

```bash
npm run dev
```

Visit → **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## ☁️ Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow prompts. Vercel auto-detects Vite.

### Option B — Vercel Dashboard

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

---

## 🌐 Deploy to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option B — Netlify Dashboard (Drag & Drop)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Drag & Drop
3. Upload the `dist/` folder
4. Site is live instantly ✅

---

## ✏️ How to Update Content

All website content is in **one file**:

```
src/data/siteContent.js
```

### Change Phone Numbers
```js
phones: ['+91 XXXXXXXXXX', '+91 XXXXXXXXXX'],
```

### Change WhatsApp Number
```js
whatsapp: '91XXXXXXXXXX',  // country code + number, no + or spaces
```

### Change Email
```js
email: 'youremail@gmail.com',
```

### Add / Edit Services
```js
export const services = [
  {
    id: 15,
    icon: 'Car',          // lucide-react icon name
    title: 'New Service',
    desc: 'Description here.',
  },
]
```

### Add Testimonials / Destinations
Just add objects to `testimonials[]` or `destinations[]` arrays.

---

## 🎨 Brand Colors

| Color        | Hex       | Usage                    |
|--------------|-----------|--------------------------|
| Royal Blue   | `#1B3A8C` | Primary brand, navbar    |
| Golden Yellow| `#F5B400` | Accents, CTAs, highlights|
| Black        | `#111111` | Hero, footer background  |
| Charcoal     | `#1E1E1E` | Dark sections            |
| Light Gray   | `#F5F5F5` | Light section backgrounds|

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with scroll spy active links
- ✅ Mobile hamburger menu
- ✅ WhatsApp booking form with validation
- ✅ All CTAs connect to WhatsApp or phone
- ✅ Floating WhatsApp + call button
- ✅ Auto-sliding testimonial carousel
- ✅ FAQ accordion with smooth animation
- ✅ Toast notifications
- ✅ Framer Motion scroll reveal
- ✅ Prefers-reduced-motion respected
- ✅ ARIA accessibility
- ✅ SEO meta tags

---

## 📞 Business Contact

- **Shree Momai Cabs** — Dwarka, Gujarat
- Phone: +91 7984767057
- Phone: +91 9274547505
- Email: shreemomaitour@gmail.com
