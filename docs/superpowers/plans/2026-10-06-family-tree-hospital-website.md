# Family Tree Hospital Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fast, mobile-first React SPA for The Family Tree Hospital, replacing a slow WordPress/Elementor site.

**Architecture:** Vite + React 18 + TypeScript SPA with React Router v6 lazy-loaded routes. All content lives in typed `src/data/` files. Tailwind CSS for styling with a warm blue/green design system. No backend, no CMS, deploys as static files.

**Tech Stack:** Vite 5, React 18, TypeScript, React Router v6, Tailwind CSS v3, Lucide React, React Helmet Async, @fontsource/nunito, @fontsource/inter, Vitest, @testing-library/react

**Spec:** `docs/superpowers/specs/2026-10-06-family-tree-hospital-design.md`

## Global Constraints

- New project scaffolded at: `hospital-web/` (sibling to the `family-tree/` HTTrack mirror)
- All shell commands run from `/Users/narasimhulupathi/Learning/ReactJS/family-tree/`
- Tailwind custom colors — primary: `#1B6B7B`, primary-light: `#E8F4F7`, secondary: `#4CAF82`, accent: `#F4A261`, surface: `#F8FAFB`, text-base: `#1A2E35`, text-muted: `#6B8A92`
- Fonts: Nunito (headings, 700/800), Inter (body, 400/500) — loaded via @fontsource packages
- Cards: `rounded-2xl shadow-md hover:shadow-lg transition-shadow`
- Section padding: `py-16 md:py-24`
- Responsive grid: 1-col mobile → 2-col sm → 3-col lg
- Booking URL: `https://sites.whitecoats.com/thefamilytreeclinics/#/`
- Phone: `8186883388` | Email: `thefamilytreehospital@gmail.com`
- Image source: `family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/`
- Image destination: `hospital-web/public/images/`

---

### Task 1: Scaffold project, install dependencies, configure Tailwind + fonts

**Files:**
- Create: `hospital-web/` (Vite scaffold)
- Create: `hospital-web/tailwind.config.ts`
- Create: `hospital-web/src/index.css`
- Modify: `hospital-web/src/main.tsx`
- Modify: `hospital-web/vite.config.ts`

**Interfaces:**
- Produces: runnable dev server at `http://localhost:5173`; Tailwind custom tokens available as `bg-primary`, `text-primary`, `bg-accent`, etc.

- [ ] **Step 1: Scaffold Vite project**

```bash
cd /Users/narasimhulupathi/Learning/ReactJS/family-tree
npm create vite@latest hospital-web -- --template react-ts
cd hospital-web
npm install
```

- [ ] **Step 2: Install all dependencies**

```bash
npm install react-router-dom react-helmet-async lucide-react @fontsource/nunito @fontsource/inter
npm install -D tailwindcss postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
npx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind — write `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B6B7B',
          light: '#E8F4F7',
        },
        secondary: '#4CAF82',
        accent: '#F4A261',
        surface: '#F8FAFB',
        'text-base': '#1A2E35',
        'text-muted': '#6B8A92',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Write `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', sans-serif;
    background-color: #F8FAFB;
    color: #1A2E35;
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif;
  }
}
```

- [ ] **Step 5: Update `src/main.tsx`**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

- [ ] **Step 6: Add Vitest config to `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
  },
})
```

- [ ] **Step 7: Create `src/test-setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 8: Delete Vite boilerplate**

Delete `src/App.css`, `src/assets/react.svg`, `public/vite.svg`.
Replace `src/App.tsx` with an empty placeholder:

```tsx
export default function App() {
  return <div>Family Tree Hospital</div>
}
```

- [ ] **Step 9: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts at `http://localhost:5173`, page shows "Family Tree Hospital"

- [ ] **Step 10: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Vite+React+TS project with Tailwind and font setup"
```

---

### Task 2: Copy image assets from HTTrack mirror

**Files:**
- Create: `hospital-web/public/images/` directory with doctor photos, logo, and gallery images

**Interfaces:**
- Produces: `/images/logo.png`, `/images/doctors/dr-shravan.jpeg`, `/images/doctors/dr-harshita.jpeg`, `/images/doctors/dr-rachana.jpeg`, `/images/hero.jpeg`, `/images/gallery/Gallery_N.jpg` paths usable in data files

- [ ] **Step 1: Create image directories**

```bash
cd /Users/narasimhulupathi/Learning/ReactJS/family-tree/hospital-web
mkdir -p public/images/doctors public/images/gallery
```

- [ ] **Step 2: Copy logo**

```bash
cp "../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/The-Family-Tree-Hospitals-Final-Logo-copy.pdf-1-600x249.png" public/images/logo.png
```

- [ ] **Step 3: Copy doctor photos**

```bash
cp "../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/WhatsApp-Image-2025-08-20-at-17.27.18-scaled-e1755692782254.jpeg" public/images/doctors/dr-shravan.jpeg
cp "../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/WhatsApp-Image-2025-08-20-at-14.25.08-1.jpeg" public/images/doctors/dr-harshita.jpeg
cp "../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/WhatsApp-Image-2025-08-20-at-17.27.18-1-1-scaled-e1755694570739.jpeg" public/images/doctors/dr-rachana.jpeg
```

- [ ] **Step 4: Copy hero image**

```bash
cp "../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/WhatsApp-Image-2025-08-20-at-17.27.18-scaled-e1755692782254-768x885.jpeg" public/images/hero.jpeg
```

- [ ] **Step 5: Copy gallery images**

```bash
for i in 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 18 19 20 21 22 23 24 25 26 27 29 31 32 34 35 36 37 38 40; do
  src="../family-tree/thefamilytreehospital.com/wp-content/uploads/sites/167/2025/08/Gallery_${i}.jpg"
  [ -f "$src" ] && cp "$src" "public/images/gallery/Gallery_${i}.jpg"
done
```

- [ ] **Step 6: Commit**

```bash
git add public/images
git commit -m "feat: copy hospital images from HTTrack mirror"
```

---

### Task 3: Data files with real content

**Files:**
- Create: `src/data/hospital.ts`
- Create: `src/data/stats.ts`
- Create: `src/data/services.ts`
- Create: `src/data/doctors.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/data/gallery.ts`
- Create: `src/data/blog.ts`

**Interfaces:**
- Produces: `hospital`, `stats`, `services`, `doctors`, `testimonials`, `galleryImages`, `blogPosts` named exports used by all pages and components

- [ ] **Step 1: Write `src/data/hospital.ts`**

```ts
export const hospital = {
  name: 'The Family Tree Hospital',
  tagline: 'Quality healthcare for you, your children, and your parents.',
  established: 'December 2021',
  phone: '8186883388',
  email: 'thefamilytreehospital@gmail.com',
  address: '19-12-568, Bairagipatteda Junction, Revenue Ward-19, Tirupati 517501, Andhra Pradesh',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=The+Family+Tree+Clinics+RC+Road+near+MR+Palli+Tirupati+Andhra+Pradesh+517502&t=m&z=13&output=embed&iwloc=near',
  bookingUrl: 'https://sites.whitecoats.com/thefamilytreeclinics/#/',
  formspreeEndpoint: '', // Set to your Formspree form ID, e.g. 'xpwzabcd'
  social: {
    facebook: 'https://www.facebook.com/thefamilytreeclinics',
    instagram: 'https://www.instagram.com/thefamilytreeclinicstirupati/',
    twitter: 'https://twitter.com/thefamilyhospi',
  },
} as const
```

- [ ] **Step 2: Write `src/data/stats.ts`**

```ts
export interface Stat {
  label: string
  value: number
  suffix: string
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Expert Doctors', value: 4, suffix: '+' },
  { label: 'Families Served', value: 15000, suffix: '+' },
  { label: 'Satisfied Patients', value: 25000, suffix: '+' },
]
```

- [ ] **Step 3: Write `src/data/services.ts`**

```ts
export interface Service {
  slug: string
  title: string
  icon: string
  shortDescription: string
  fullDescription: string
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: 'pediatrics-neonatology',
    title: 'Pediatrics & Neonatology',
    icon: 'Baby',
    shortDescription:
      'Comprehensive healthcare for newborns, infants, children, and adolescents by an experienced Pediatrician & Neonatologist.',
    fullDescription:
      'Our Pediatrics & Neonatology department provides comprehensive healthcare for newborns, infants, children, and adolescents, ensuring healthy growth and development at every stage. Led by Dr. Shravan Krishna Reddy P, an experienced Pediatrician and Neonatologist with over 9 years of expertise, we cover everything from routine check-ups and vaccinations to managing complex neonatal conditions. We bring the best of clinical excellence — trained at Rainbow, Manipal, Aster, and Ovum hospitals — into a setting that feels familiar and safe for your family.',
    bullets: [
      'Routine check-ups, growth monitoring, and vaccinations',
      'Specialized neonatal care including premature and critically ill infants',
      'Evidence-based pediatric nutrition guidance',
      'Parental counseling for growth milestones and preventive care',
      'Management of respiratory, infectious, and developmental conditions',
    ],
  },
  {
    slug: 'general-medicine',
    title: 'General Medicine',
    icon: 'Stethoscope',
    shortDescription:
      'Holistic adult healthcare including chronic disease management, preventive care, and nutrition counseling.',
    fullDescription:
      'Our General Medicine department offers comprehensive adult healthcare services, from diagnosing and managing a broad spectrum of health conditions to chronic illness management and preventive care. Dr. Harshita Reddy G brings extensive clinical experience and a patient-centric, compassionate approach that ensures every adult receives individualized care tailored to their specific needs.',
    bullets: [
      'Comprehensive primary care for adults of all ages',
      'Diagnosis and management of chronic illnesses',
      'Preventive health strategies and lifestyle counseling',
      'Nutritional guidance for improved patient outcomes',
      'Holistic patient education and follow-up care',
    ],
  },
  {
    slug: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    icon: 'Heart',
    shortDescription:
      'Complete women\'s health services — prenatal care, safe deliveries, and gynaecological treatments.',
    fullDescription:
      'Our Obstetrics & Gynaecology department provides complete women\'s healthcare across all life stages. From prenatal care and safe deliveries to gynaecological consultations and treatments, our specialists ensure every woman receives compassionate, evidence-based care in a supportive environment.',
    bullets: [
      'Antenatal and postnatal care',
      'High-risk pregnancy management',
      'Normal and complicated deliveries',
      'Gynaecological consultations and treatments',
      'Adolescent and menopausal health care',
    ],
  },
  {
    slug: 'fertility-infertility',
    title: 'Fertility & Infertility Services',
    icon: 'Sprout',
    shortDescription:
      'Personalized fertility evaluations and treatments to help families achieve their dream of parenthood.',
    fullDescription:
      'Our Fertility & Infertility Services offer hope and expert guidance to couples on their journey to parenthood. We provide thorough evaluations, evidence-based treatments, and compassionate support through every step of the process. Dr. Rachana Reddy\'s expertise ensures couples receive personalized care with the best possible outcomes.',
    bullets: [
      'Comprehensive fertility evaluation for couples',
      'Hormonal and ovulation assessments',
      'Intrauterine insemination (IUI)',
      'Counseling and emotional support',
      'Coordination with advanced fertility centers when required',
    ],
  },
  {
    slug: 'vaccination-clinic',
    title: 'Vaccination Clinic',
    icon: 'Syringe',
    shortDescription:
      'Complete immunization programs for children and adults — all vaccines available in one convenient location.',
    fullDescription:
      'Our Vaccination Clinic ensures your family stays protected with timely, complete immunizations. We follow the Indian Academy of Pediatrics (IAP) immunization schedule for children and offer travel vaccines and adult booster doses. Our trained nurses explain each vaccine clearly, making the experience comfortable for children and parents alike.',
    bullets: [
      'Full IAP schedule for newborns, infants, and children',
      'Travel and adult booster vaccinations',
      'Flu (influenza) vaccines for all ages from 6 months to seniors',
      'Safe, clean, child-friendly vaccination environment',
      'Vaccination records and reminders provided',
    ],
  },
  {
    slug: 'laboratory-services',
    title: 'Laboratory Services',
    icon: 'FlaskConical',
    shortDescription:
      'Accurate, fast diagnostic tests — blood work, urine analysis, cultures, and more — all under one roof.',
    fullDescription:
      'Our Laboratory Services provide accurate, timely diagnostic support for all clinical departments. With modern equipment and trained lab technicians, we deliver reliable results that guide precise treatment decisions. From routine blood panels to specialized tests, everything is available in-house so you don\'t need to travel elsewhere.',
    bullets: [
      'Complete blood counts, metabolic panels, and lipid profiles',
      'Urine, stool, and culture analyses',
      'Thyroid, hormonal, and diabetes monitoring tests',
      'Rapid tests for infections (Dengue, Malaria, COVID)',
      'Results available same day for most routine tests',
    ],
  },
  {
    slug: 'pharmacy',
    title: '24/7 Pharmacy',
    icon: 'Pill',
    shortDescription:
      'Round-the-clock pharmacy stocked with prescribed medications, ensuring you never wait for essential medicines.',
    fullDescription:
      'Our 24/7 in-house Pharmacy ensures that essential medicines are always available when you need them — day or night. Our knowledgeable pharmacy staff dispenses prescriptions accurately, suggests alternatives when specific medicines are unavailable, and provides guidance on dosage and storage. No more late-night searches for a pharmacy.',
    bullets: [
      'Open 24 hours, 7 days a week',
      'Comprehensive stock of prescribed and OTC medicines',
      'Knowledgeable staff who suggest safe alternatives',
      'Pediatric and adult formulations available',
      'Prescription verification and dosage counseling',
    ],
  },
  {
    slug: 'inpatient-care',
    title: 'Inpatient Care',
    icon: 'BedDouble',
    shortDescription:
      'Comfortable, well-equipped inpatient facilities with round-the-clock nursing care for patients who need admission.',
    fullDescription:
      'Our Inpatient Care facility provides a safe, comfortable environment for patients who require admission and close monitoring. With 24/7 nursing care, modern monitoring equipment, and a dedicated medical team, we ensure every admitted patient receives the continuous attention they need for a smooth and speedy recovery.',
    bullets: [
      'Well-equipped patient rooms with continuous monitoring',
      '24/7 nursing care and physician rounds',
      'Dedicated neonatal care unit for newborns',
      'ICU support for critical cases',
      'Hygienic, family-friendly environment',
    ],
  },
]
```

- [ ] **Step 4: Write `src/data/doctors.ts`**

```ts
export interface Doctor {
  name: string
  photo: string
  specialty: string
  qualifications: string
  bio: string
  featured: boolean
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Shravan Krishna Reddy P',
    photo: '/images/doctors/dr-shravan.jpeg',
    specialty: 'Pediatrician & Neonatologist',
    qualifications: 'MBBS, MD (Pediatrics), Fellowship in Perinatal Medicine',
    bio: 'With 9 years of clinical excellence, Dr. Shravan brings expertise from leading hospitals including Rainbow Children\'s Hospital, Manipal, Aster, and Ovum. He specializes in comprehensive pediatric care, neonatology, pediatric nutrition, and parental counseling.',
    featured: true,
  },
  {
    name: 'Dr. Harshita Reddy G',
    photo: '/images/doctors/dr-harshita.jpeg',
    specialty: 'Physician – General Medicine',
    qualifications: 'MBBS, MD (Internal Medicine)',
    bio: 'Dr. Harshita brings extensive experience in adult healthcare from top-tier institutions. Known for her compassionate, patient-centric approach, she specializes in chronic disease management, preventive care, and individualized treatment planning.',
    featured: true,
  },
  {
    name: 'Dr. Rachana Reddy',
    photo: '/images/doctors/dr-rachana.jpeg',
    specialty: 'Obstetrician, Gynaecologist & Fertility Specialist',
    qualifications: 'MBBS, MS (Obstetrics & Gynaecology)',
    bio: 'Dr. Rachana is dedicated to women\'s health across all life stages — from prenatal care and safe deliveries to fertility evaluations and gynaecological treatments. Her patient-first philosophy ensures every woman feels heard and well cared for.',
    featured: true,
  },
]
```

- [ ] **Step 5: Write `src/data/testimonials.ts`**

```ts
export interface Testimonial {
  name: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Peruru Roopa',
    text: 'Wonderful experience at The Family Tree Hospital. Treatment was effective and recovery was faster than expected. Dr. Shravan gives clear clarity about health issues and suggests the right medicine.',
    rating: 5,
  },
  {
    name: 'Jameer Shaik',
    text: 'Dr. Shravan explained the diagnosis and treatment clearly, making us confident throughout. The nurses were very supportive. Thank you Family Tree Hospital team!',
    rating: 5,
  },
  {
    name: 'sulochana s',
    text: 'Dr. Harshitha madam was very caring about the patient. I am really happy to have met her. The staff was very helpful and attentive throughout.',
    rating: 5,
  },
  {
    name: 'Sabha S',
    text: 'Truly trusted hospital in Tirupati! Pharmacy staff were knowledgeable and suggested alternatives when a medicine was unavailable. Dr. Shravan\'s treatment is amazing — highly recommended for pediatrics.',
    rating: 5,
  },
  {
    name: 'jai shankar',
    text: 'My child was admitted for high fever. Within 2 days, the result was there and she was discharged. The nurses and housekeeping team took great care. A big thanks to the entire management!',
    rating: 5,
  },
  {
    name: 'chirala Srinivasulu',
    text: 'Friendly behaviour and very supportive. Dr. Shravan sir\'s treatment was very clean and clear. Excellent pediatrician — highly recommended.',
    rating: 5,
  },
]
```

- [ ] **Step 6: Write `src/data/gallery.ts`**

```ts
export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/Gallery_2.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_3.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_4.jpg', alt: 'Patient care', category: 'Patient Care' },
  { src: '/images/gallery/Gallery_5.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_6.jpg', alt: 'Medical team', category: 'Team' },
  { src: '/images/gallery/Gallery_7.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_8.jpg', alt: 'Patient care', category: 'Patient Care' },
  { src: '/images/gallery/Gallery_9.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_10.jpg', alt: 'Medical team', category: 'Team' },
  { src: '/images/gallery/Gallery_11.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_12.jpg', alt: 'Patient care', category: 'Patient Care' },
  { src: '/images/gallery/Gallery_13.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_14.jpg', alt: 'Medical team', category: 'Team' },
  { src: '/images/gallery/Gallery_15.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_16.jpg', alt: 'Patient care', category: 'Patient Care' },
  { src: '/images/gallery/Gallery_18.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_19.jpg', alt: 'Medical team', category: 'Team' },
  { src: '/images/gallery/Gallery_20.jpg', alt: 'Hospital facility', category: 'Facility' },
  { src: '/images/gallery/Gallery_21.jpg', alt: 'Patient care', category: 'Patient Care' },
  { src: '/images/gallery/Gallery_22.jpg', alt: 'Hospital facility', category: 'Facility' },
]
```

- [ ] **Step 7: Write `src/data/blog.ts`**

```ts
export interface BlogPost {
  title: string
  date: string
  excerpt: string
  externalUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'The Silent Epidemic: Why One in Six Indians Cannot Have a Baby',
    date: '2026-05-05',
    excerpt: 'Dr. Rachana Reddy explores the growing fertility crisis in India and why more couples are struggling — and what can be done about it.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/the-silent-epidemic-why-one-in-six-indians-cannot-have-a-baby-and-why-nobody-is-talking-about-itby-dr-rachana-reddy/',
  },
  {
    title: 'The Heat That Isn\'t Heat',
    date: '2026-05-08',
    excerpt: 'Understanding heat-related illnesses in summer — recognizing early signs and when to seek immediate medical attention.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/headline-the-heat-that-isnt-heat/',
  },
  {
    title: 'What Makes Our Lab and Diagnostics Different',
    date: '2026-04-24',
    excerpt: 'A look at how our in-house laboratory delivers fast, accurate results and why that matters for your treatment.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/what-makes-our-lab-and-diagnostics-different/',
  },
  {
    title: 'Are You Suffering from IDIOT Syndrome?',
    date: '2026-03-23',
    excerpt: 'An eye-opening read about the dangers of self-diagnosis and internet-based medical advice — and why a doctor\'s consultation still matters.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/are-you-suffering-fromidiot-syndrome/',
  },
  {
    title: 'The Nebulizer Paradox: Is Your Child\'s Treatment Helping or Harming?',
    date: '2026-01-03',
    excerpt: 'Dr. Shravan explains when nebulizers are necessary and when they might be doing more harm than good for your child\'s breathing.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/the-nebulizer-paradox-is-your-childs-breathing-issue-treatment-harming-more-than-helping/',
  },
  {
    title: 'A Pediatrician\'s Perspective: Why Early Recognition is Key',
    date: '2025-12-04',
    excerpt: 'Early identification of childhood health issues can make a profound difference. Dr. Shravan shares what parents should watch for.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/a-pediatricians-perspective-why-early-recognition-is-key-in-protecting-our-childrens-health/',
  },
  {
    title: 'Influenza Vaccine for All Ages: From 6 Months to Seniors in 2025',
    date: '2025-10-01',
    excerpt: 'Why influenza still matters in 2025 and why vaccination is the single most effective way to protect your family this season.',
    externalUrl: 'https://thefamilytreehospital.com/blogs/influenza-vaccine-for-all-ages-from-6-months-to-seniors-in-2025why-influenza-still-matters-in-2025/',
  },
]
```

- [ ] **Step 8: Commit**

```bash
git add src/data public/images
git commit -m "feat: add all content data files and hospital images"
```

---

### Task 4: UI primitives — Button and SectionHeading

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/Button.test.tsx`

**Interfaces:**
- Produces:
  - `Button`: `variant?: 'primary' | 'secondary' | 'outline'`, `size?: 'sm' | 'md' | 'lg'`, `href?: string`, `onClick?`, `children`, `className?`
  - `SectionHeading`: `eyebrow?: string`, `title: string`, `subtitle?: string`, `center?: boolean`

- [ ] **Step 1: Write failing test**

Create `src/components/ui/Button.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from './Button'

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Book Appointment</Button>)
    expect(screen.getByText('Book Appointment')).toBeInTheDocument()
  })

  it('renders as anchor tag when href is provided', () => {
    render(
      <MemoryRouter>
        <Button href="https://example.com">External</Button>
      </MemoryRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('applies accent class for primary variant', () => {
    render(<Button variant="primary">CTA</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-accent')
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx vitest run src/components/ui/Button.test.tsx
```
Expected: FAIL — "Cannot find module './Button'"

- [ ] **Step 3: Write `src/components/ui/Button.tsx`**

```tsx
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-orange-500',
  secondary: 'bg-primary text-white hover:bg-teal-700',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return <Link to={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
```

- [ ] **Step 4: Run test to confirm pass**

```bash
npx vitest run src/components/ui/Button.test.tsx
```
Expected: PASS (3 tests)

- [ ] **Step 5: Write `src/components/ui/SectionHeading.tsx`**

```tsx
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false }: SectionHeadingProps) {
  const align = center ? 'text-center' : ''
  return (
    <div className={`mb-10 ${align}`}>
      {eyebrow && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-text-muted text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add Button and SectionHeading UI primitives"
```

---

### Task 5: StatCounter component

**Files:**
- Create: `src/components/ui/StatCounter.tsx`
- Create: `src/components/ui/StatCounter.test.tsx`

**Interfaces:**
- Consumes: `Stat` type from `src/data/stats.ts` — `{ label: string; value: number; suffix: string }`
- Produces: `StatCounter`: `stat: Stat` prop — renders animated count-up when scrolled into view

- [ ] **Step 1: Write failing test**

Create `src/components/ui/StatCounter.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import StatCounter from './StatCounter'

const stat = { label: 'Years of Experience', value: 15, suffix: '+' }

describe('StatCounter', () => {
  it('renders the label', () => {
    render(<StatCounter stat={stat} />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders the suffix', () => {
    render(<StatCounter stat={stat} />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx vitest run src/components/ui/StatCounter.test.tsx
```
Expected: FAIL — "Cannot find module './StatCounter'"

- [ ] **Step 3: Write `src/components/ui/StatCounter.tsx`**

```tsx
import { useEffect, useRef, useState } from 'react'
import type { Stat } from '../../data/stats'

interface StatCounterProps {
  stat: Stat
}

export default function StatCounter({ stat }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = stat.value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= stat.value) {
              setCount(stat.value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [stat.value, hasAnimated])

  const display = stat.value >= 1000
    ? count.toLocaleString('en-IN')
    : count.toString()

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-heading text-4xl md:text-5xl font-bold text-primary">{display}</span>
        <span className="font-heading text-2xl font-bold text-accent">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-text-muted font-medium text-sm uppercase tracking-wide">{stat.label}</p>
    </div>
  )
}
```

- [ ] **Step 4: Run test to confirm pass**

```bash
npx vitest run src/components/ui/StatCounter.test.tsx
```
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/StatCounter.tsx src/components/ui/StatCounter.test.tsx
git commit -m "feat: add StatCounter with IntersectionObserver animation"
```

---

### Task 6: ServiceCard and DoctorCard

**Files:**
- Create: `src/components/ui/ServiceCard.tsx`
- Create: `src/components/ui/DoctorCard.tsx`

**Interfaces:**
- Consumes: `Service` from `src/data/services.ts`, `Doctor` from `src/data/doctors.ts`
- Produces:
  - `ServiceCard`: `service: Service` — card linking to `/services/:slug`
  - `DoctorCard`: `doctor: Doctor` — card showing photo, name, specialty, qualifications

- [ ] **Step 1: Write `src/components/ui/ServiceCard.tsx`**

```tsx
import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Baby, Stethoscope, Heart, Sprout, Syringe, FlaskConical, Pill, BedDouble } from 'lucide-react'
import type { Service } from '../../data/services'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Baby, Stethoscope, Heart, Sprout, Syringe, FlaskConical, Pill, BedDouble,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Stethoscope
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col gap-4"
    >
      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-text-base group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{service.shortDescription}</p>
      <span className="flex items-center gap-1 text-primary text-sm font-semibold">
        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}
```

- [ ] **Step 2: Write `src/components/ui/DoctorCard.tsx`**

```tsx
import type { Doctor } from '../../data/doctors'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden bg-primary-light">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-text-base">{doctor.name}</h3>
        <p className="text-secondary font-semibold text-sm mt-1">{doctor.specialty}</p>
        <p className="text-text-muted text-xs mt-1">{doctor.qualifications}</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ServiceCard.tsx src/components/ui/DoctorCard.tsx
git commit -m "feat: add ServiceCard and DoctorCard components"
```

---

### Task 7: Header with mobile navigation

**Files:**
- Create: `src/components/layout/Header.tsx`

**Interfaces:**
- Consumes: `hospital.bookingUrl`, `hospital.name` from `src/data/hospital.ts`
- Produces: sticky `<header>` with logo, desktop nav (with dropdowns for About and Services), mobile hamburger + slide-down drawer, "Book Appointment" accent CTA

- [ ] **Step 1: Write `src/components/layout/Header.tsx`**

```tsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { hospital } from '../../data/hospital'
import Button from '../ui/Button'

const serviceLinks = [
  { label: 'Pediatrics & Neonatology', slug: 'pediatrics-neonatology' },
  { label: 'General Medicine', slug: 'general-medicine' },
  { label: 'Obstetrics & Gynaecology', slug: 'obstetrics-gynaecology' },
  { label: 'Fertility & Infertility', slug: 'fertility-infertility' },
  { label: 'Vaccination Clinic', slug: 'vaccination-clinic' },
  { label: 'Laboratory Services', slug: 'laboratory-services' },
  { label: '24/7 Pharmacy', slug: 'pharmacy' },
  { label: 'Inpatient Care', slug: 'inpatient-care' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const activeClass = 'text-primary font-semibold'
  const inactiveClass = 'text-text-base hover:text-primary'

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md backdrop-blur-sm bg-white/95' : 'shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-1 px-4 hidden md:flex justify-end gap-6">
        <a href={`tel:${hospital.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors">
          <Phone className="w-3 h-3" /> {hospital.phone}
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.png" alt={hospital.name} className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Home
            </NavLink>

            {/* About dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${inactiveClass}`}>
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <NavLink to="/about" className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-primary rounded-t-xl">About Us</NavLink>
                <NavLink to="/directors-desk" className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-primary rounded-b-xl">Director's Desk</NavLink>
              </div>
            </div>

            {/* Services dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${inactiveClass}`}>
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <NavLink to="/services" className="block px-4 py-2 text-sm font-semibold hover:bg-primary-light hover:text-primary border-b border-gray-100">All Services</NavLink>
                {serviceLinks.map((s) => (
                  <NavLink key={s.slug} to={`/services/${s.slug}`} className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-primary last:rounded-b-xl">
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/doctors" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Doctors</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Gallery</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Contact</NavLink>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button href={hospital.bookingUrl} variant="primary" size="sm" className="hidden md:inline-flex">
              Book Appointment
            </Button>
            <button
              className="lg:hidden p-2 text-text-base"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 space-y-1 max-h-screen overflow-y-auto">
          <NavLink to="/" end onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">About Us</NavLink>
          <NavLink to="/directors-desk" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-muted hover:text-primary pl-4">Director's Desk</NavLink>
          <button
            className="w-full text-left py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium flex items-center justify-between"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-1">
              {serviceLinks.map((s) => (
                <NavLink key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-text-muted hover:text-primary">
                  {s.label}
                </NavLink>
              ))}
            </div>
          )}
          <NavLink to="/doctors" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">Doctors</NavLink>
          <NavLink to="/gallery" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">Gallery</NavLink>
          <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-gray-50 text-text-base hover:text-primary font-medium">Contact</NavLink>
          <div className="pt-4">
            <Button href={hospital.bookingUrl} variant="primary" className="w-full justify-center">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: add Header with desktop nav dropdowns and mobile drawer"
```

---

### Task 8: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `hospital` from `src/data/hospital.ts`, `services` from `src/data/services.ts`
- Produces: 3-column footer with quick links, services links, contact info, social icons, copyright

- [ ] **Step 1: Write `src/components/layout/Footer.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { hospital } from '../../data/hospital'
import { services } from '../../data/services'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand + contact */}
          <div className="space-y-4">
            <img src="/images/logo.png" alt={hospital.name} className="h-12 w-auto brightness-0 invert" />
            <p className="text-white/80 text-sm leading-relaxed">{hospital.tagline}</p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${hospital.phone}`} className="flex items-start gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {hospital.phone}
              </a>
              <a href={`mailto:${hospital.email}`} className="flex items-start gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {hospital.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-white/80">{hospital.address}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a href={hospital.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={hospital.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={hospital.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: "Director's Desk", to: '/directors-desk' },
                { label: 'Our Doctors', to: '/doctors' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-accent transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/60">
        © {year} {hospital.name}. All rights reserved.
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer with 3-column layout and social links"
```

---

### Task 9: Layout wrapper and App routing

**Files:**
- Create: `src/components/layout/Layout.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer` components
- Produces: all routes wired with lazy loading, `Layout` renders `<Outlet>` between header and footer

- [ ] **Step 1: Write `src/components/layout/Layout.tsx`**

```tsx
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Write `src/App.tsx`**

```tsx
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const DirectorsDesk = lazy(() => import('./pages/DirectorsDesk'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Doctors = lazy(() => import('./pages/Doctors'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-primary-light border-t-primary rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="directors-desk" element={<DirectorsDesk />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
```

- [ ] **Step 3: Create stub pages so routing compiles**

Create each of the following with a minimal placeholder (replace one by one in later tasks):

`src/pages/Home.tsx`:
```tsx
export default function Home() { return <div className="p-8">Home</div> }
```

Repeat for: `About.tsx`, `DirectorsDesk.tsx`, `Services.tsx`, `ServiceDetail.tsx`, `Doctors.tsx`, `Gallery.tsx`, `Blog.tsx`, `Contact.tsx`

`src/pages/NotFound.tsx`:
```tsx
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-text-muted">Page not found</p>
      <Link to="/" className="text-primary underline hover:text-accent">Back to Home</Link>
    </div>
  )
}
```

- [ ] **Step 4: Verify dev server loads all routes without errors**

Run: `npm run dev`
Visit: `http://localhost:5173`, `http://localhost:5173/about`, `http://localhost:5173/services/pediatrics-neonatology`
Expected: Header + Footer visible, stub content rendered, no console errors

- [ ] **Step 5: Commit**

```bash
git add src/
git commit -m "feat: add Layout wrapper and full React Router v6 route tree"
```

---

### Task 10: Home page sections

**Files:**
- Create: `src/components/sections/HeroBanner.tsx`
- Create: `src/components/sections/ServicesGrid.tsx`
- Create: `src/components/sections/DoctorTeam.tsx`
- Create: `src/components/sections/Testimonials.tsx`
- Create: `src/components/sections/ContactCTA.tsx`

**Interfaces:**
- Consumes: `hospital`, `services`, `doctors`, `testimonials`, `stats` data; `Button`, `SectionHeading`, `ServiceCard`, `DoctorCard`, `StatCounter` components
- Produces: five standalone section components, each self-contained

- [ ] **Step 1: Write `src/components/sections/HeroBanner.tsx`**

```tsx
import { hospital } from '../../data/hospital'
import Button from '../ui/Button'

export default function HeroBanner() {
  return (
    <section className="bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Est. {hospital.established}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Quality Healthcare for Your Family
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-lg">
              {hospital.tagline} Trusted by over 15,000 families in Tirupati.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={hospital.bookingUrl} variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
            <a href={`tel:${hospital.phone}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              📞 {hospital.phone}
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
            <img
              src="/images/hero.jpeg"
              alt="Dr. Shravan Krishna Reddy P — Pediatrician & Neonatologist"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover object-top max-h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Write `src/components/sections/ServicesGrid.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'
import SectionHeading from '../ui/SectionHeading'

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Comprehensive healthcare for every member of your family — from newborns to seniors."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Write `src/components/sections/DoctorTeam.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { doctors } from '../../data/doctors'
import DoctorCard from '../ui/DoctorCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function DoctorTeam() {
  const featured = doctors.filter((d) => d.featured)
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors"
            subtitle="Trained at India's leading hospitals, our specialists bring world-class expertise to Tirupati."
          />
          <Button href="/doctors" variant="outline" size="sm" className="shrink-0">
            See All Doctors
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Write `src/components/sections/Testimonials.tsx`**

```tsx
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const shown = testimonials.slice(0, 3)
  return (
    <section className="py-16 md:py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Over 1,900 Google reviews. Here are some of our favourite stories."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shown.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-text-muted leading-relaxed flex-1">"{t.text}"</p>
              <p className="font-semibold text-text-base text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Write `src/components/sections/ContactCTA.tsx`**

```tsx
import { hospital } from '../../data/hospital'
import Button from '../ui/Button'
import { Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Ready to Visit Us?
        </h2>
        <p className="text-white/80 text-lg">
          Book an appointment online or call us directly. We're here for your family.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={hospital.bookingUrl} variant="primary" size="lg">
            Book Appointment
          </Button>
          <a
            href={`tel:${hospital.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" /> {hospital.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/
git commit -m "feat: add all five Home page section components"
```

---

### Task 11: Home page

**Files:**
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: all 5 section components, `stats` from `src/data/stats.ts`, `StatCounter`
- Produces: full Home page — hero → stats strip → services → doctors → testimonials → CTA

- [ ] **Step 1: Write `src/pages/Home.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import HeroBanner from '../components/sections/HeroBanner'
import ServicesGrid from '../components/sections/ServicesGrid'
import DoctorTeam from '../components/sections/DoctorTeam'
import Testimonials from '../components/sections/Testimonials'
import ContactCTA from '../components/sections/ContactCTA'
import StatCounter from '../components/ui/StatCounter'
import { stats } from '../data/stats'
import { hospital } from '../data/hospital'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{hospital.name} — Quality Healthcare for Your Family</title>
        <meta name="description" content={`${hospital.name} in Tirupati. ${hospital.tagline} Pediatrics, General Medicine, Gynaecology, Fertility, and more.`} />
      </Helmet>
      <HeroBanner />

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <DoctorTeam />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 2: Verify in browser**

Run `npm run dev`, open `http://localhost:5173`. Check:
- Hero image loads
- Stats strip is visible
- Services grid shows 8 cards
- Doctor section shows 3 cards
- Testimonials section shows 3 reviews
- Footer visible

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: implement full Home page"
```

---

### Task 12: About page and Director's Desk page

**Files:**
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/DirectorsDesk.tsx`

**Interfaces:**
- Consumes: `hospital` from `src/data/hospital.ts`, `ContactCTA` section
- Produces: two standalone informational pages with breadcrumbs

- [ ] **Step 1: Write `src/pages/About.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import ContactCTA from '../components/sections/ContactCTA'
import { hospital } from '../data/hospital'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — {hospital.name}</title>
        <meta name="description" content={`Learn about ${hospital.name} — established ${hospital.established} in Tirupati, providing quality family healthcare.`} />
      </Helmet>

      {/* Page hero */}
      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › About Us
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">About Us</h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-text-base">
          <SectionHeading eyebrow="Who We Are" title="A Trusted Name in Family Healthcare" />
          <p className="text-text-muted text-lg leading-relaxed">
            Welcome to <strong>The Family Tree Hospital</strong> — a distinguished healthcare institution established in <strong>December 2021</strong>, catering to both adults and children, conveniently located in Tirupati, Andhra Pradesh.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mt-4">
            We understand that every individual's health needs are unique. Our specialized approach ensures comprehensive and personalized medical attention for patients of all age groups — whether it's a child's delicate health or an adult's specific medical concerns.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Our Mission', body: 'To provide accessible, compassionate, and world-class healthcare to every family in Tirupati and surrounding regions.' },
              { title: 'Our Vision', body: 'To be the most trusted multi-specialty hospital for families in Andhra Pradesh — where every patient feels safe, heard, and cared for.' },
              { title: 'Our Values', body: 'Patient safety first. Evidence-based medicine. Compassionate care. Continuous learning. Ethical practice.' },
            ].map((item) => (
              <div key={item.title} className="bg-primary-light rounded-2xl p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Why Choose The Family Tree Hospital?</h2>
            <ul className="space-y-3 text-text-muted">
              {[
                'Doctors trained at India\'s top hospitals — Rainbow, Manipal, Aster, Ovum',
                'Multi-specialty under one roof — Pediatrics, General Medicine, Gynaecology, Fertility, and more',
                '24/7 Pharmacy and Laboratory services on-site',
                'Dedicated Neonatal care unit for premature and critically ill newborns',
                'Over 15,000 families served since December 2021',
                'Patient-first philosophy — every patient receives personalized, compassionate attention',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 2: Write `src/pages/DirectorsDesk.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/sections/ContactCTA'
import { hospital } from '../data/hospital'

export default function DirectorsDesk() {
  return (
    <>
      <Helmet>
        <title>Director's Desk — {hospital.name}</title>
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › <Link to="/about" className="hover:text-primary">About Us</Link> › Director's Desk
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Director's Desk</h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/doctors/dr-shravan.jpeg"
                  alt="Dr. Shravan Krishna Reddy P"
                  className="w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-heading font-bold text-lg text-text-base">Dr. Shravan Krishna Reddy P</h3>
                <p className="text-secondary text-sm">Founder & Director</p>
                <p className="text-text-muted text-xs">Pediatrician & Neonatologist</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-5 text-text-muted leading-relaxed">
              <h2 className="font-heading text-2xl font-bold text-primary">A Message from Our Director</h2>
              <p>
                When we founded The Family Tree Hospital in December 2021, our dream was simple: to bring world-class, compassionate healthcare to the families of Tirupati — without them having to travel to a bigger city.
              </p>
              <p>
                Healthcare is deeply personal. When a parent brings their sick child to us, or when a couple comes to us with the hope of starting a family, we understand that this is not just a medical interaction — it is one of the most important moments in their lives. Our entire team is committed to treating every patient with the dignity, care, and expertise they deserve.
              </p>
              <p>
                We have assembled a team of doctors trained at Rainbow, Manipal, Aster, and Ovum — bringing the best of Indian clinical excellence to your doorstep. We continue to invest in modern equipment, evidence-based protocols, and continuous medical education to ensure that the care you receive here matches the highest standards anywhere in the country.
              </p>
              <p>
                We are grateful to the over 15,000 families who have trusted us with their most precious people. Your trust motivates us every single day.
              </p>
              <p className="font-semibold text-text-base">
                With gratitude,<br />
                Dr. Shravan Krishna Reddy P<br />
                <span className="text-text-muted font-normal text-sm">Founder & Director, The Family Tree Hospital</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/About.tsx src/pages/DirectorsDesk.tsx
git commit -m "feat: implement About and Director's Desk pages"
```

---

### Task 13: Services overview and Service detail pages

**Files:**
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/ServiceDetail.tsx`

**Interfaces:**
- Consumes: `services` array from `src/data/services.ts`, `ServiceCard`, `SectionHeading`
- Produces:
  - `Services`: grid of all 8 service cards
  - `ServiceDetail`: reads `slug` from URL params, renders service full content + breadcrumb + CTA

- [ ] **Step 1: Write `src/pages/Services.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import ContactCTA from '../components/sections/ContactCTA'
import { hospital } from '../data/hospital'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — {hospital.name}</title>
        <meta name="description" content="Explore our 8 healthcare specialties: Pediatrics, General Medicine, Obstetrics, Fertility, Vaccination, Laboratory, Pharmacy, and Inpatient Care." />
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › Services
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Our Services</h1>
          <p className="mt-3 text-text-muted text-lg max-w-2xl">
            Comprehensive healthcare for every member of your family — under one roof.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 2: Write `src/pages/ServiceDetail.tsx`**

```tsx
import type { ComponentType } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { CheckCircle, Baby, Stethoscope, Heart, Sprout, Syringe, FlaskConical, Pill, BedDouble } from 'lucide-react'
import { services } from '../data/services'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'
import ContactCTA from '../components/sections/ContactCTA'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Baby, Stethoscope, Heart, Sprout, Syringe, FlaskConical, Pill, BedDouble,
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const Icon = iconMap[service.icon] ?? Stethoscope

  return (
    <>
      <Helmet>
        <title>{service.title} — {hospital.name}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › <Link to="/services" className="hover:text-primary">Services</Link> › {service.title}
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">{service.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-text-muted text-lg leading-relaxed">{service.fullDescription}</p>

          <div className="bg-primary-light rounded-2xl p-8">
            <h2 className="font-heading text-xl font-bold text-primary mb-6">Key Services & Highlights</h2>
            <ul className="space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-text-muted">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-4">
            <Button href={hospital.bookingUrl} variant="primary" size="lg">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/Services.tsx src/pages/ServiceDetail.tsx
git commit -m "feat: implement Services overview and ServiceDetail pages"
```

---

### Task 14: Doctors page

**Files:**
- Modify: `src/pages/Doctors.tsx`

**Interfaces:**
- Consumes: `doctors` array from `src/data/doctors.ts`, `DoctorCard`, `ContactCTA`
- Produces: full team grid with page hero and breadcrumb

- [ ] **Step 1: Write `src/pages/Doctors.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { doctors } from '../data/doctors'
import DoctorCard from '../components/ui/DoctorCard'
import ContactCTA from '../components/sections/ContactCTA'
import { hospital } from '../data/hospital'

export default function Doctors() {
  return (
    <>
      <Helmet>
        <title>Our Doctors — {hospital.name}</title>
        <meta name="description" content="Meet our team of specialist doctors — trained at Rainbow, Manipal, Aster, and Ovum hospitals." />
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › Doctors
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Our Doctors</h1>
          <p className="mt-3 text-text-muted text-lg max-w-2xl">
            Our doctors have trained and served at some of India's top hospitals — bringing the best clinical excellence into a setting that feels familiar and safe for your family.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>

          {/* Bio cards */}
          <div className="mt-16 space-y-8">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="bg-surface rounded-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover object-top mx-auto md:mx-0"
                />
                <div className="md:col-span-3 space-y-2">
                  <h3 className="font-heading text-xl font-bold text-primary">{doctor.name}</h3>
                  <p className="text-secondary font-semibold">{doctor.specialty}</p>
                  <p className="text-text-muted text-sm">{doctor.qualifications}</p>
                  <p className="text-text-muted leading-relaxed mt-3">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Doctors.tsx
git commit -m "feat: implement Doctors page with grid and bio cards"
```

---

### Task 15: Gallery page

**Files:**
- Modify: `src/pages/Gallery.tsx`

**Interfaces:**
- Consumes: `galleryImages` from `src/data/gallery.ts`
- Produces: responsive masonry-style grid, lightbox on click (native `<dialog>` element)

- [ ] **Step 1: Write `src/pages/Gallery.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryImages } from '../data/gallery'
import { hospital } from '../data/hospital'

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <Helmet>
        <title>Gallery — {hospital.name}</title>
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › Gallery
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Gallery</h1>
          <p className="mt-3 text-text-muted text-lg">A glimpse inside The Family Tree Hospital.</p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <button
                key={img.src}
                className="block w-full break-inside-avoid rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelected(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selected}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Gallery.tsx
git commit -m "feat: implement Gallery page with masonry grid and lightbox"
```

---

### Task 16: Blog page

**Files:**
- Modify: `src/pages/Blog.tsx`

**Interfaces:**
- Consumes: `blogPosts` from `src/data/blog.ts`
- Produces: list of blog post cards, each linking externally to the WordPress site

- [ ] **Step 1: Write `src/pages/Blog.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExternalLink, Calendar } from 'lucide-react'
import { blogPosts } from '../data/blog'
import { hospital } from '../data/hospital'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — {hospital.name}</title>
        <meta name="description" content="Health tips, medical insights, and patient education from the doctors at The Family Tree Hospital." />
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › Blog
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Blog</h1>
          <p className="mt-3 text-text-muted text-lg max-w-2xl">
            Health tips, medical insights, and patient education from our doctors.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <a
                key={post.externalUrl}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                <h2 className="font-heading text-xl font-bold text-text-base group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Read article <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Blog.tsx
git commit -m "feat: implement Blog page with external links"
```

---

### Task 17: Contact page

**Files:**
- Modify: `src/pages/Contact.tsx`

**Interfaces:**
- Consumes: `hospital` from `src/data/hospital.ts`
- Produces: contact page with address/phone/email, Google Maps embed, Formspree contact form (Name, Email, Phone, Subject, Message)

- [ ] **Step 1: Write `src/pages/Contact.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, CheckCircle } from 'lucide-react'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!hospital.formspreeEndpoint) {
      alert('Contact form not yet configured. Please call us at ' + hospital.phone)
      return
    }
    setFormState('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch(`https://formspree.io/f/${hospital.formspreeEndpoint}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      setFormState('success')
      form.reset()
    } else {
      setFormState('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — {hospital.name}</title>
        <meta name="description" content={`Contact ${hospital.name}. Phone: ${hospital.phone}. Address: ${hospital.address}`} />
      </Helmet>

      <div className="bg-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> › Contact Us
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary">Contact Us</h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-primary">Get in Touch</h2>
                <div className="space-y-3 text-text-muted">
                  <a href={`tel:${hospital.phone}`} className="flex items-start gap-3 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <span>{hospital.phone}</span>
                  </a>
                  <a href={`mailto:${hospital.email}`} className="flex items-start gap-3 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <span>{hospital.email}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <span>{hospital.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-bold text-lg text-primary">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={hospital.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" /> Facebook
                  </a>
                  <a href={hospital.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href={hospital.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" /> Twitter
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md h-64">
                <iframe
                  src={hospital.mapsEmbedUrl}
                  title="The Family Tree Hospital location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-surface rounded-2xl p-8 shadow-md">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

              {formState === 'success' ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle className="w-12 h-12 text-secondary" />
                  <h3 className="font-heading text-xl font-bold text-text-base">Message Sent!</h3>
                  <p className="text-text-muted">Thank you for reaching out. We'll get back to you shortly.</p>
                  <Button onClick={() => setFormState('idle')} variant="outline" size="sm">Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-base mb-1">Full Name</label>
                      <input name="name" type="text" required placeholder="Your name" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text-base focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-base mb-1">Phone Number</label>
                      <input name="phone" type="tel" placeholder="Your phone" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text-base focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-base mb-1">Email Address</label>
                    <input name="email" type="email" required placeholder="your@email.com" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text-base focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-base mb-1">Subject</label>
                    <input name="subject" type="text" placeholder="How can we help?" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text-base focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-base mb-1">Message</label>
                    <textarea name="message" rows={5} placeholder="Your message..." className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text-base focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </div>
                  {formState === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try calling us directly.</p>
                  )}
                  <Button type="submit" variant="primary" size="md" className="w-full justify-center" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Contact.tsx
git commit -m "feat: implement Contact page with form, map embed, and contact details"
```

---

### Task 18: Final polish, build verification

**Files:**
- Modify: `src/pages/NotFound.tsx` (enhance from stub)
- Verify: production build works

**Interfaces:**
- Consumes: all pages and components
- Produces: clean `npm run build` with no TypeScript errors; all routes navigable

- [ ] **Step 1: Enhance `src/pages/NotFound.tsx`**

```tsx
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page Not Found — {hospital.name}</title></Helmet>
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center px-4 py-16">
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest">404 Error</p>
        <h1 className="font-heading text-7xl font-extrabold text-primary">Oops!</h1>
        <p className="text-xl text-text-muted max-w-md">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```
Expected: zero errors

- [ ] **Step 3: Run tests**

```bash
npx vitest run
```
Expected: all tests pass

- [ ] **Step 4: Production build**

```bash
npm run build
```
Expected: build succeeds, no errors. `dist/` folder created.

- [ ] **Step 5: Preview production build**

```bash
npm run preview
```
Open `http://localhost:4173`. Navigate to each route:
- `/` — home page loads, all sections visible
- `/about` — about page loads
- `/directors-desk` — director's page loads
- `/services` — 8 service cards visible
- `/services/pediatrics-neonatology` — service detail loads
- `/doctors` — 3 doctors visible
- `/gallery` — image grid loads, lightbox works on click
- `/blog` — 7 blog posts visible, links open in new tab
- `/contact` — form + map visible
- `/nonexistent` — 404 page renders correctly
- Mobile: resize browser to 375px, verify hamburger menu works

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "feat: complete Family Tree Hospital website rebuild — all pages implemented"
```
