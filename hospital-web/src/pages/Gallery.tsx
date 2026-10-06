import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '../data/gallery'
import { assetUrl } from '../utils/asset'
import { hospital } from '../data/hospital'

const categories = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'All' ? galleryImages : galleryImages.filter((g) => g.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))

  return (
    <>
      <Helmet>
        <title>Gallery — {hospital.name}</title>
        <meta name="description" content="Photo gallery of The Family Tree Hospital — facilities, patient care, and our medical team." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Hospital in Pictures</h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-muted border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid via columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((image, index) => (
              <div
                key={image.src}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={assetUrl(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={assetUrl(filtered[lightboxIndex].src)}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <p className="absolute bottom-4 text-white/50 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  )
}
