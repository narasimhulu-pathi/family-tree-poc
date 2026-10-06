# The Family Tree Hospital — Website Rebuild Design

**Date:** 2026-10-06  
**Status:** Approved — ready for implementation planning

---

## 1. Goal

Rebuild the existing WordPress/Elementor hospital website (thefamilytreehospital.com) as a fast, mobile-first React SPA. The current site is slow due to heavy plugin loading (Elementor, WooCommerce, 30+ CSS files). The new site must be:

- Multi-device responsive (mobile-first)
- Fast (static assets, code-split routes, no CMS runtime)
- Configurable (all content in TypeScript data files — no code changes needed for content updates)
- Easy to navigate (clear structure, prominent CTAs, accessible)

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Build tool | Vite 5 |
| Framework | React 18 + TypeScript |
| Routing | React Router v6 (lazy-loaded routes) |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Page meta | React Helmet Async |
| Fonts | Google Fonts (Nunito + Inter) via `@fontsource` |
| Deployment | Static files — any CDN/host (Netlify, Vercel, GitHub Pages) |

No backend. No state management library. No CMS runtime.

---

## 3. Routes

All routes render inside a shared `Layout` component (Header + Footer).  
Pages are lazy-loaded via `React.lazy` + `Suspense`.

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | Hero, stats, services grid, doctor highlights, testimonials, contact CTA |
| `/about` | `About` | Hospital story, mission, values |
| `/directors-desk` | `DirectorsDesk` | Director's photo + message |
| `/services` | `Services` | Overview grid of all 8 services |
| `/services/:slug` | `ServiceDetail` | Detail page, reads slug from `services.ts` |
| `/doctors` | `Doctors` | Full team grid |
| `/gallery` | `Gallery` | Responsive photo grid |
| `/blog` | `Blog` | Post list; detail links out to original WP site |
| `/contact` | `Contact` | Phone, email, address, social links, Google Maps embed |

**Service slugs:**  
`pediatrics-neonatology`, `general-medicine`, `obstetrics-gynaecology`,  
`fertility-infertility`, `vaccination-clinic`, `laboratory-services`,  
`pharmacy`, `inpatient-care`

**404:** A simple not-found page with a "Back to Home" link.

---

## 4. Data Model

All content files live in `src/data/`. Updating content = editing one file, no code change needed.

### `src/data/hospital.ts`
```ts
export const hospital = {
  name: 'The Family Tree Hospital',
  tagline: 'Quality healthcare for you, your children, and your parents.',
  phone: '8186883388',
  email: 'thefamilytreehospital@gmail.com',
  address: '19-12-568, Bairagipatteda Junction, Revenue Ward-19, Tirupati 517501, Andhra Pradesh',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=The+Family+Tree+Clinics+RC+Road+near+MR+Palli+Tirupati+Andhra+Pradesh+517502&t=m&z=13&output=embed&iwloc=near',
  bookingUrl: 'https://sites.whitecoats.com/thefamilytreeclinics/#/',
  formspreeEndpoint: '', // hospital owner fills in their Formspree form ID
  social: {
    facebook: 'https://www.facebook.com/thefamilytreeclinics',
    instagram: 'https://www.instagram.com/thefamilytreeclinicstirupati/',
    twitter: 'https://twitter.com/thefamilyhospi',
  },
}
```

### `src/data/services.ts`
Array of:
```ts
{
  slug: string          // URL slug
  title: string
  icon: string          // Lucide icon name
  shortDescription: string   // shown on cards
  fullDescription: string    // shown on detail page
  bullets: string[]          // key points on detail page
}
```

### `src/data/doctors.ts`
Array of:
```ts
{
  name: string
  photo: string         // path relative to /public/images/doctors/
  specialty: string
  qualifications: string
  bio: string
}
```

### `src/data/stats.ts`
Array of:
```ts
{ label: string; value: number; suffix: string }
// e.g. { label: 'Years of Experience', value: 10, suffix: '+' }
```

### `src/data/testimonials.ts`
Array of:
```ts
{ name: string; text: string; rating: number }
```

### `src/data/gallery.ts`
Array of:
```ts
{ src: string; alt: string; category: string }
```

### `src/data/blog.ts`
Array of:
```ts
{ title: string; date: string; excerpt: string; externalUrl: string }
// externalUrl points back to the original WordPress blog post
```

---

## 5. Component Structure

```
src/
├── data/
│   ├── hospital.ts
│   ├── services.ts
│   ├── doctors.ts
│   ├── stats.ts
│   ├── testimonials.ts
│   ├── gallery.ts
│   └── blog.ts
│
├── components/
│   ├── layout/
│   │   ├── Layout.tsx          # wraps all pages: Header + <Outlet/> + Footer
│   │   ├── Header.tsx          # logo, desktop nav, mobile hamburger + drawer
│   │   └── Footer.tsx          # 3-col: links, contact info, social icons
│   │
│   ├── ui/
│   │   ├── Button.tsx          # variants: primary | secondary | outline
│   │   ├── SectionHeading.tsx  # consistent eyebrow + h2 + subtitle pattern
│   │   ├── DoctorCard.tsx      # photo, name, specialty, qualifications
│   │   ├── ServiceCard.tsx     # icon, title, short description, arrow link
│   │   └── StatCounter.tsx     # IntersectionObserver-triggered count-up
│   │
│   └── sections/               # Home-page sections (not reused elsewhere)
│       ├── HeroBanner.tsx      # full-width, headline, tagline, 2 CTAs
│       ├── ServicesGrid.tsx    # responsive grid of ServiceCards
│       ├── DoctorTeam.tsx      # 3-up grid of DoctorCards
│       ├── Testimonials.tsx    # 3-up grid (desktop) / 1-up (mobile)
│       └── ContactCTA.tsx      # "Ready to visit?" strip with phone + book btn
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── DirectorsDesk.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Doctors.tsx
│   ├── Gallery.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── App.tsx                     # Router setup, lazy imports, Suspense boundary
└── main.tsx                    # Vite entry, React.StrictMode
```

---

## 6. Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#1B6B7B` | Nav active, headings, primary buttons |
| Primary light | `#E8F4F7` | Alternate section backgrounds, card hover |
| Secondary | `#4CAF82` | Icon accents, badges, secondary highlights |
| Accent (CTA) | `#F4A261` | "Book Appointment" buttons throughout |
| Surface | `#F8FAFB` | Page background |
| Text | `#1A2E35` | Body copy |
| Text muted | `#6B8A92` | Subtitles, captions, secondary text |
| White | `#FFFFFF` | Card backgrounds, nav background |

### Typography

- **Headings:** Nunito (700/800 weight) — rounded, friendly
- **Body:** Inter (400/500 weight) — clean, highly readable
- Loaded via `@fontsource/nunito` and `@fontsource/inter` (no Google Fonts network call)

### Spacing & Feel

- Rounded corners: `rounded-2xl` on cards, `rounded-full` on buttons
- Section vertical padding: `py-16 md:py-24`
- Card shadows: `shadow-md hover:shadow-lg transition-shadow`
- No harsh borders; use background color to delineate sections
- Alternating section backgrounds: `white` / `#E8F4F7`

### Responsive Grid

- Mobile: 1 column
- sm (640px): 2 columns for service/doctor cards
- lg (1024px): 3 columns for service/doctor cards
- Tailwind defaults for all breakpoints

---

## 7. Header & Navigation

**Desktop:** Horizontal nav bar. Logo left, nav links center, "Book Appointment" accent button right.  
Nav items with dropdowns: **About Us** (sub: Director's Desk) | **Services** (sub: 8 items) | **Doctors** | **Gallery** | **Blog** | **Contact Us**

**Mobile:** Logo left, hamburger right. Tap opens a full-width slide-down drawer with all links expanded. "Book Appointment" button at bottom of drawer.

Sticky header with `backdrop-blur` on scroll.

---

## 8. Key Pages — Content Notes

### Home
1. Hero: headline ("Quality Healthcare for Your Family"), tagline, "Book Appointment" (accent) + "Our Services" (outline) buttons, hero image
2. Stats strip: 4 animated counters (Years, Doctors, Families, Patients)
3. Services grid: 8 ServiceCards
4. Doctor highlights: 3 featured DoctorCards + "See All Doctors" link
5. Testimonials: 3 patient quotes
6. Contact CTA strip: phone number + "Book Appointment" button

### Service Detail
- Hero with service title + icon
- Full description paragraphs
- Bulleted key points
- "Book Appointment" CTA at bottom
- Breadcrumb: Home → Services → [Service Name]

### Contact
- Hospital address, phone, email
- Social media icons
- Google Maps embed (iframe) pointing to hospital location
- Contact form: Name, Email, Phone, Subject, Message — submitted via **Formspree** (free tier, no backend needed; hospital owner sets up a Formspree account and puts the form endpoint in `hospital.ts`)

---

## 9. Assets

All images from the existing HTTrack mirror live in:
`family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/`

These will be copied to `public/images/` in the new project and referenced from the data files.

---

## 10. Out of Scope

- Blog post detail pages (link out to existing WordPress site)
- Online appointment form (external WhiteCoats booking URL)
- User accounts / login
- WooCommerce / payments
- Search functionality
- Multilingual support
