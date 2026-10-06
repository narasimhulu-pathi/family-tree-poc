import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!hospital.formspreeEndpoint) return

    setFormState('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
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
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — {hospital.name}</title>
        <meta name="description" content="Contact The Family Tree Hospital in Tirupati — call, email, or send us a message. We're here to help." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach us by phone, email, or fill in the form below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-base mb-6">Reach Us Directly</h2>
              <ul className="flex flex-col gap-5 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-base">Phone</p>
                    <a href={`tel:${hospital.phone}`} className="text-text-muted hover:text-primary transition-colors">
                      {hospital.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-base">Email</p>
                    <a href={`mailto:${hospital.email}`} className="text-text-muted hover:text-primary transition-colors break-all">
                      {hospital.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-base">Address</p>
                    <p className="text-text-muted leading-relaxed">{hospital.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-base">Hours</p>
                    <p className="text-text-muted">OPD: Mon–Sat, 9 AM – 8 PM</p>
                    <p className="text-text-muted">Pharmacy & Emergency: 24/7</p>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64">
                <iframe
                  src={hospital.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  title="The Family Tree Hospital location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-base mb-6">Send Us a Message</h2>

              {formState === 'success' ? (
                <div className="bg-secondary/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                  <CheckCircle2 className="w-12 h-12 text-secondary" />
                  <h3 className="font-heading font-bold text-xl text-text-base">Message Sent!</h3>
                  <p className="text-text-muted">Thank you for reaching out. We'll get back to you shortly.</p>
                  <Button onClick={() => setFormState('idle')} variant="secondary">Send Another Message</Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text-base mb-1.5">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-base placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text-base mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-base placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-base mb-1.5">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-base placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-text-base mb-1.5">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-base placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-base mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-base placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                  )}

                  {hospital.formspreeEndpoint ? (
                    <Button type="submit" variant="primary" size="lg" disabled={formState === 'submitting'}>
                      {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                    </Button>
                  ) : (
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-700">
                      Contact form not yet configured. Please call us at{' '}
                      <a href={`tel:${hospital.phone}`} className="font-semibold hover:underline">{hospital.phone}</a> or email{' '}
                      <a href={`mailto:${hospital.email}`} className="font-semibold hover:underline">{hospital.email}</a>.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
