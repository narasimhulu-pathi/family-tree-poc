import { Helmet } from 'react-helmet-async'
import { ExternalLink, Calendar } from 'lucide-react'
import { blogPosts } from '../data/blog'
import { hospital } from '../data/hospital'
import SectionHeading from '../components/ui/SectionHeading'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Health Blog — {hospital.name}</title>
        <meta name="description" content="Health articles and insights from the doctors at The Family Tree Hospital in Tirupati." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Health Insights</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Health Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert articles from our doctors on topics that matter to your family's health.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Latest Articles" title="From Our Doctors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.externalUrl}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </div>
                <h2 className="font-heading font-bold text-text-base text-lg leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Read Article
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
